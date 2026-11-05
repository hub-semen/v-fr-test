#!/usr/bin/env python3
"""Insert hreflang links (vodds.fr <-> vodds.com) into the <head> of mapped pages.

Source: "Vodds.fr _ Internal Linking Plan" -> sheet "hreflang".
The same clusters are emitted on vodds.com by the vodds_main theme
(functions.php, vodds_fr_hreflang_map) - keep both maps in sync.

Idempotent: the block between the markers is replaced on every run.
Usage: python3 scripts/add-hreflang.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FR = "https://vodds.fr/"
COM = "https://vodds.com/"

# fr slug -> (vodds.com path, set of languages that are noindex on vodds.com)
# Noindex URLs stay in the map but are not emitted; drop them from the set
# once vodds.com switches those pages to index.
CLUSTERS = {
    "": ("", set()),
    "bookmakers/": ("bookmakers/", set()),
    "comparateur-de-cotes/": ("odds-scanner/", set()),
    "compte-de-paris-prive/": ("direct-sportsbook/", set()),
    "paris-sportifs/": ("sports/", set()),
    "paiements/": ("payment-policy/", set()),
    "promotions/": ("promotions/", set()),
    "promo-bonus-crypto/": ("promotions/crypto-welcome-offer/", {"es"}),
    "promo-coupes-uefa-power-play/": ("promotions/vodds-uefa-welcome-bonus/", {"en"}),
    "contact/": ("contact-us/", set()),
    "conditions-generales/": ("terms-and-conditions/", set()),
}

START, END = "<!-- hreflang:start -->", "<!-- hreflang:end -->"
BLOCK_RE = re.compile(re.escape(START) + r".*?" + re.escape(END) + r"\n?", re.S)
CANONICAL_RE = re.compile(r'^<link rel="canonical"[^>]*>\n', re.M)


def build_block(fr_slug, com_path, noindex):
    alts = [("fr", FR + fr_slug)]
    urls = {"en": COM + com_path, "es": COM + "es/" + com_path, "ru": COM + "ru/" + com_path}
    alts += [(lang, url) for lang, url in urls.items() if lang not in noindex]
    if "en" not in noindex:
        alts.append(("x-default", urls["en"]))
    lines = [f'<link rel="alternate" hreflang="{lang}" href="{url}">' for lang, url in alts]
    return "\n".join([START, *lines, END]) + "\n"


def files_for(fr_slug):
    if fr_slug == "":
        # accueil.html is kept in sync with the served homepage (index.html)
        return [ROOT / "index.html", ROOT / "accueil.html"]
    return [ROOT / fr_slug / "index.html"]


def main():
    for fr_slug, (com_path, noindex) in CLUSTERS.items():
        block = build_block(fr_slug, com_path, noindex)
        for path in files_for(fr_slug):
            html = BLOCK_RE.sub("", path.read_text(encoding="utf-8"))
            canonical = CANONICAL_RE.search(html)
            if not canonical:
                raise SystemExit(f"no canonical in {path}")
            html = html[: canonical.end()] + block + html[canonical.end():]
            path.write_text(html, encoding="utf-8")
            print(f"{path.relative_to(ROOT)}: {block.count('hreflang=')} hreflang")


if __name__ == "__main__":
    main()
