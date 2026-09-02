/* @ds-bundle: {"format":3,"namespace":"VOddsDesignSystem_b9b154","components":[{"name":"Avatar","sourcePath":"components/betting/Avatar.jsx"},{"name":"BonusCard","sourcePath":"components/betting/BonusCard.jsx"},{"name":"MatchupCard","sourcePath":"components/betting/MatchupCard.jsx"},{"name":"OddsChip","sourcePath":"components/betting/OddsChip.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"PromoCode","sourcePath":"components/core/PromoCode.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"SocialBar","sourcePath":"components/feedback/SocialBar.jsx"}],"sourceHashes":{"components/betting/Avatar.jsx":"e2e904ac25cc","components/betting/BonusCard.jsx":"23304708a154","components/betting/MatchupCard.jsx":"e750e570c19c","components/betting/OddsChip.jsx":"43e325900461","components/brand/Logo.jsx":"cdd3134ab74f","components/core/Badge.jsx":"34c7dab56e72","components/core/Button.jsx":"7ee739655f54","components/core/PromoCode.jsx":"636a8b9aa19f","components/core/SectionHeading.jsx":"1589116594bd","components/core/Tag.jsx":"8e3f20daa047","components/feedback/SocialBar.jsx":"8ed0200947bd","ui_kits/banners/BannerGallery.jsx":"11759388d216","ui_kits/email/EmailCampaign.jsx":"a627ae0a369c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VOddsDesignSystem_b9b154 = window.VOddsDesignSystem_b9b154 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/betting/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular athlete / player avatar with the brand ring — used on odds boards
 * and "best odds" rows ("NOAH LYLES"). Falls back to initials when no image.
 */
function Avatar({
  src,
  name = '',
  size = 88,
  ring = 'sport',
  style,
  ...rest
}) {
  const rings = {
    sport: 'var(--vo-sport-azure)',
    red: 'var(--vo-red)',
    neon: 'var(--vo-neon)',
    gold: 'var(--vo-gold)'
  };
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      padding: 3,
      background: rings[ring] || rings.sport,
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--vo-slate-800)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: size * 0.32,
      color: '#fff'
    }
  }, initials)));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/betting/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/betting/OddsChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Single odds tile — the dark chip showing a decimal price over its market
 * label ("1.31 / Home"). Lifts the email odds-board styling. Clickable;
 * highlights on hover and when `selected`.
 */
function OddsChip({
  price = '1.31',
  label = 'Home',
  selected = false,
  tone = 'dark',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'dark';
  const on = selected || hover;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      minWidth: 92,
      padding: '16px 20px',
      borderRadius: 'var(--radius-lg)',
      cursor: 'pointer',
      border: selected ? '1.5px solid var(--vo-red)' : '1.5px solid transparent',
      background: dark ? 'var(--vo-slate-800)' : 'var(--vo-white)',
      boxShadow: on ? 'var(--glow-red)' : dark ? 'none' : 'var(--shadow-card)',
      transition: 'box-shadow 160ms ease, border-color 140ms ease',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-tech)',
      fontWeight: 700,
      fontSize: 26,
      lineHeight: 1,
      color: dark ? '#fff' : 'var(--vo-ink)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 13,
      color: dark ? 'rgba(255,255,255,0.62)' : 'var(--vo-grey)'
    }
  }, label));
}
Object.assign(__ds_scope, { OddsChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/betting/OddsChip.jsx", error: String((e && e.message) || e) }); }

// components/betting/MatchupCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Match-up row — two competitors with a "VS" divider and a 1X2 odds board
 * underneath. The core unit of a VOdds sports email / odds-scanner block.
 */
function MatchupCard({
  league = 'EURO 2024',
  time = 'Sat 21:00',
  home = {
    name: 'Germany',
    flag: '🇩🇪'
  },
  away = {
    name: 'Scotland',
    flag: '🏴'
  },
  odds = [{
    price: '1.31',
    label: '1'
  }, {
    price: '4.20',
    label: 'X'
  }, {
    price: '8.50',
    label: '2'
  }],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--vo-slate-900)',
      border: '1px solid var(--vo-slate-700)',
      borderRadius: 'var(--radius-xl)',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-tech)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--vo-red)'
    }
  }, league), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'rgba(255,255,255,0.55)'
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Team, _extends({}, home, {
    align: "flex-start"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 900,
      fontSize: 18,
      color: 'rgba(255,255,255,0.4)'
    }
  }, "VS"), /*#__PURE__*/React.createElement(Team, _extends({}, away, {
    align: "flex-end"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${odds.length}, 1fr)`,
      gap: 8
    }
  }, odds.map((o, i) => /*#__PURE__*/React.createElement(__ds_scope.OddsChip, {
    key: i,
    price: o.price,
    label: o.label,
    tone: "dark",
    style: {
      minWidth: 0
    }
  }))));
}
function Team({
  name,
  flag,
  align
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align,
      gap: 6,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      lineHeight: 1
    }
  }, flag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: '#fff',
      textTransform: 'uppercase',
      textAlign: align === 'flex-end' ? 'right' : 'left'
    }
  }, name));
}
Object.assign(__ds_scope, { MatchupCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/betting/MatchupCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VOdds primary logo — the "VODDS" wordmark (red angular V + word) with the
 * optional "THE SMARTER WAY TO BET" tagline. Vector paths are the real marks
 * lifted from the brand Figma file. The V is always brand red; the "ODDS"
 * letters take `tone` (white on dark, ink on light).
 */
function Logo({
  tone = 'light',
  height = 42,
  tagline = false,
  title = 'VOdds',
  style,
  ...rest
}) {
  const wordColor = tone === 'dark' ? '#010203' : '#ffffff';
  const taglineColor = tone === 'dark' ? '#010203' : '#ffffff';
  const scale = height / 42;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "img",
    "aria-label": title,
    style: {
      display: 'inline-block',
      width: 128 * scale,
      height: 42 * scale,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 128,
      height: 42,
      transform: `scale(${scale})`,
      transformOrigin: 'top left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 128,
      height: 42
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 128,
      height: 42,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 128,
      height: 42,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.422,
      top: 1.4,
      width: 123.781,
      height: 38.335,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 33.513,
      height: 37.398,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.454,
    height: 37.398,
    viewBox: "0 0 22.454 37.398",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.058,
      top: 0,
      width: 22.454,
      height: 37.398,
      color: "rgb(255,41,41)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.187 0 L 7.434 16.699 L 7.434 16.686 L 3.622 25.818 L 3.622 25.831 L 3.547 25.992 L 3.559 26.017 L 0 37.398 L 6.892 37.373 L 20.132 5.753 L 22.454 0 L 14.187 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.667,
    height: 27.446,
    viewBox: "0 0 14.667 27.446",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 9.952,
      width: 14.667,
      height: 27.446,
      color: "rgb(255,41,41)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.604 16.04 L 14.667 15.891 L 7.737 0 L 0 0 L 10.83 26.738 L 11.057 27.446 L 14.616 16.065 L 14.604 16.04 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 24.001,
    height: 28.395,
    viewBox: "0 0 24.001 28.395",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.204,
      top: 9.918,
      width: 24.001,
      height: 28.395,
      color: wordColor
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 28.387 C 0 22.336 0 16.31 0 10.235 C 0.088 10.309 0.151 10.347 0.189 10.396 C 2.057 12.496 3.925 14.608 5.793 16.708 C 5.92 16.857 5.957 17.006 5.957 17.193 C 5.957 18.684 5.957 20.174 5.957 21.665 C 5.957 21.802 5.957 21.939 5.957 22.088 C 6.084 22.1 6.159 22.113 6.248 22.113 C 7.447 22.113 8.633 22.125 9.832 22.113 C 10.703 22.1 11.574 22.001 12.42 21.752 C 13.303 21.492 14.048 21.019 14.641 20.324 C 15.891 18.845 16.623 17.143 16.863 15.242 C 17.04 13.838 16.926 12.434 16.547 11.067 C 15.828 8.47 14.086 6.979 11.435 6.47 C 10.665 6.321 9.883 6.284 9.1 6.284 C 6.248 6.284 3.395 6.284 0.543 6.284 C 0.379 6.284 0.214 6.284 0.025 6.284 C 0.025 4.184 0.025 2.134 0.025 0.047 C 0.126 0.034 0.227 0.009 0.315 0.009 C 3.711 0.009 7.093 -0.028 10.489 0.047 C 12.988 0.096 15.399 0.643 17.62 1.861 C 20.334 3.339 22.101 5.588 23.098 8.458 C 23.603 9.899 23.855 11.39 23.956 12.906 C 24.057 14.509 23.994 16.112 23.716 17.702 C 23.376 19.665 22.606 21.454 21.369 23.032 C 20.712 23.877 20.031 24.697 19.21 25.393 C 17.494 26.847 15.487 27.692 13.265 28.077 C 12.117 28.275 10.943 28.375 9.782 28.375 C 6.639 28.387 3.484 28.375 0.341 28.375 C 0.214 28.4 0.126 28.4 0 28.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 23.981,
    height: 28.388,
    viewBox: "0 0 23.981 28.388",
    fill: "none",
    style: {
      position: "absolute",
      left: 77.334,
      top: 9.947,
      width: 23.981,
      height: 28.388,
      color: wordColor
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.267 C 0 4.155 0 2.117 0 0.042 C 0.101 0.03 0.202 0.005 0.29 0.005 C 3.698 0.005 7.093 -0.02 10.501 0.042 C 12.458 0.079 14.376 0.452 16.207 1.198 C 19.602 2.577 21.861 5.012 23.06 8.404 C 23.578 9.858 23.83 11.361 23.931 12.889 C 24.032 14.343 23.982 15.797 23.767 17.238 C 23.451 19.363 22.694 21.313 21.344 23.028 C 20.776 23.748 20.208 24.469 19.526 25.09 C 17.746 26.718 15.626 27.662 13.24 28.085 C 12.092 28.283 10.918 28.383 9.757 28.383 C 6.626 28.395 3.484 28.383 0.353 28.383 C 0.24 28.383 0.126 28.37 0 28.358 C 0 22.32 0 16.294 0 10.218 C 0.088 10.293 0.164 10.33 0.215 10.392 C 2.07 12.492 3.925 14.579 5.793 16.679 C 5.92 16.828 5.97 16.977 5.958 17.163 C 5.958 18.654 5.958 20.145 5.958 21.636 C 5.958 21.773 5.958 21.91 5.958 22.071 C 6.084 22.084 6.185 22.108 6.273 22.108 C 7.472 22.108 8.659 22.121 9.858 22.096 C 10.729 22.084 11.6 21.984 12.445 21.736 C 13.303 21.475 14.023 21.027 14.604 20.344 C 15.878 18.866 16.61 17.151 16.85 15.238 C 17.027 13.834 16.913 12.43 16.535 11.063 C 15.828 8.466 14.086 6.963 11.423 6.453 C 10.64 6.304 9.845 6.267 9.05 6.267 C 6.21 6.267 3.37 6.267 0.53 6.267 C 0.366 6.267 0.202 6.267 0 6.267 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 24.019,
    height: 28.381,
    viewBox: "0 0 24.019 28.381",
    fill: "none",
    style: {
      position: "absolute",
      left: 99.762,
      top: 9.8,
      width: 24.019,
      height: 28.381,
      color: wordColor
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.019 0.053 C 23.906 0.202 23.83 0.289 23.754 0.376 C 22.164 2.215 20.574 4.054 18.996 5.892 C 18.832 6.079 18.668 6.166 18.403 6.153 C 16.434 6.141 14.477 6.153 12.508 6.153 C 12.079 6.153 11.663 6.203 11.271 6.365 C 10.085 6.837 9.441 8.265 9.883 9.446 C 10.009 9.794 10.224 10.067 10.527 10.278 C 10.88 10.514 11.259 10.763 11.65 10.937 C 12.306 11.235 12.988 11.521 13.67 11.769 C 14.843 12.192 15.992 12.664 17.103 13.198 C 17.746 13.509 18.365 13.869 18.983 14.217 C 19.11 14.279 19.211 14.391 19.311 14.478 C 20.548 15.584 21.293 16.938 21.47 18.59 C 21.647 20.243 21.482 21.846 20.788 23.374 C 19.741 25.697 17.923 27.139 15.487 27.884 C 14.389 28.22 13.266 28.381 12.117 28.381 C 8.267 28.369 4.405 28.381 0.555 28.381 C 0.391 28.381 0.227 28.381 0 28.381 C 0.088 28.257 0.126 28.182 0.177 28.12 C 1.78 26.256 3.383 24.405 4.986 22.541 C 5.137 22.368 5.301 22.318 5.516 22.318 C 7.472 22.318 9.416 22.33 11.372 22.318 C 11.751 22.318 12.142 22.281 12.508 22.169 C 13.771 21.771 14.49 20.367 14.086 19.112 C 13.96 18.74 13.745 18.429 13.417 18.205 C 13.038 17.944 12.647 17.696 12.231 17.51 C 11.233 17.087 10.211 16.714 9.201 16.304 C 7.75 15.708 6.311 15.124 4.986 14.279 C 4.758 14.13 4.544 13.931 4.342 13.732 C 3.13 12.564 2.524 11.123 2.411 9.471 C 2.322 8.166 2.449 6.899 2.903 5.656 C 3.837 3.097 5.68 1.469 8.28 0.612 C 9.542 0.202 10.855 0.028 12.18 0.016 C 16.017 -0.009 19.867 0.003 23.704 0.003 C 23.792 0.04 23.868 0.04 24.019 0.053 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.888,
    height: 18.525,
    viewBox: "0 0 8.888 18.525",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.726,
      top: 11.915,
      width: 8.888,
      height: 18.525,
      color: "rgb(255,41,41)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.958 10.139 C 2.501 6.585 4.319 3.665 7.171 1.429 C 7.676 1.031 8.206 0.671 8.736 0.348 L 8.888 0 C 7.676 0.509 6.502 1.193 5.404 2.063 C 2.552 4.311 0.747 7.219 0.191 10.772 C -0.25 13.617 0.078 16.202 1.125 18.525 L 2.211 15.941 C 1.731 14.152 1.643 12.214 1.958 10.139 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 29.690,
    height: 28.279,
    viewBox: "0 0 29.690 28.279",
    fill: "none",
    style: {
      position: "absolute",
      left: 21.462,
      top: 9.992,
      width: 29.69,
      height: 28.279,
      color: wordColor
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.504 11.887 C 28.961 8.334 27.143 5.414 24.291 3.178 C 21.009 0.593 17.235 -0.363 13.07 0.121 C 10.987 0.37 9.044 0.979 7.239 1.96 C 7.239 1.96 7.024 2.072 6.911 2.147 C 6.608 2.32 6.002 2.768 6.002 2.768 C 5.876 2.855 5.749 2.954 5.623 3.053 C 2.644 5.365 0.764 8.359 0.196 12.024 C -0.069 13.764 -0.069 15.416 0.221 16.969 L 0.196 17.019 C 0.246 17.205 0.284 17.379 0.335 17.566 C 0.372 17.715 0.41 17.864 0.448 18 L 0.461 17.976 C 1.862 22.523 4.828 25.729 9.485 27.431 C 11.985 28.35 14.572 28.462 17.197 28.052 C 19.987 27.617 22.511 26.573 24.644 24.747 C 28.595 21.33 30.286 17.031 29.504 11.887 Z M 21.211 18.609 C 20.277 20.361 18.838 21.579 16.844 21.989 C 14.054 22.573 11.53 22.038 9.46 20.001 C 8.324 18.895 7.681 17.503 7.378 15.975 C 6.961 13.888 7.188 11.863 8.185 9.974 C 9.485 7.526 11.581 6.234 14.383 6.023 C 14.597 6.011 14.824 5.998 15.026 5.986 C 17.904 6.011 20.063 7.253 21.337 9.788 C 22.801 12.732 22.764 15.702 21.211 18.609 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.942,
    height: 21.583,
    viewBox: "0 0 6.942 21.583",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.724,
      top: 9.952,
      width: 6.942,
      height: 21.583,
      color: "rgb(255,41,41)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.304 21.582 C 4.266 21.669 6.917 15.941 6.942 15.891 L 0 0 C 0.013 0 4.557 15.096 4.304 21.582 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.958,
    height: 11.841,
    viewBox: "0 0 5.958 11.841",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.205,
      top: 20.153,
      width: 5.958,
      height: 11.841,
      color: "rgba(223,220,220,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.958 11.841 C 5.958 11.692 5.958 11.567 5.958 11.431 C 5.958 9.94 5.958 8.449 5.958 6.958 C 5.958 6.771 5.932 6.622 5.793 6.473 C 3.925 4.373 2.057 2.261 0.189 0.161 C 0.139 0.112 0.088 0.074 0 0 C 0 0.025 0 0.037 0 0.062 C 1.174 1.715 4.19 6.262 5.958 11.841 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.958,
    height: 11.841,
    viewBox: "0 0 5.958 11.841",
    fill: "none",
    style: {
      position: "absolute",
      left: 77.321,
      top: 20.153,
      width: 5.958,
      height: 11.841,
      color: "rgba(223,220,220,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.958 11.841 C 5.958 11.692 5.958 11.567 5.958 11.431 C 5.958 9.94 5.958 8.449 5.958 6.958 C 5.958 6.771 5.932 6.622 5.793 6.473 C 3.925 4.373 2.057 2.261 0.189 0.161 C 0.139 0.112 0.088 0.074 0 0 C 0 0.025 0 0.037 0 0.062 C 1.186 1.715 4.203 6.262 5.958 11.841 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.229,
    height: 6.063,
    viewBox: "0 0 8.229 6.063",
    fill: "none",
    style: {
      position: "absolute",
      left: 99.775,
      top: 32.156,
      width: 8.229,
      height: 6.063,
      color: "rgba(223,220,220,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.229 0 C 7.321 0 6.424 0 5.516 0 C 5.301 0 5.137 0.05 4.986 0.224 C 3.383 2.087 1.78 3.951 0.177 5.802 C 0.126 5.864 0.088 5.939 0 6.063 C 1.628 4.585 4.544 2.162 8.229 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))))), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 37,
      top: 2.5,
      width: 86,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      fontSize: 5.1,
      letterSpacing: '0.13em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      color: taglineColor
    }
  }, "THE SMARTER WAY TO BET"))));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status / promo pill — "BONUS", "NEW", "LIVE", "+150 USDT".
 * Tones map to the brand semantic colors.
 */
function Badge({
  children,
  tone = 'red',
  solid = true,
  style,
  ...rest
}) {
  const tones = {
    red: ['var(--vo-red)', '#fff'],
    pink: ['var(--vo-pink)', '#fff'],
    neon: ['var(--vo-neon)', 'var(--vo-ink)'],
    gold: ['var(--vo-gold)', 'var(--vo-ink)'],
    sport: ['var(--vo-sport-azure)', '#fff'],
    dark: ['var(--vo-ink)', '#fff']
  };
  const [bg, fg] = tones[tone] || tones.red;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-tech)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      color: solid ? fg : bg,
      background: solid ? bg : 'transparent',
      border: solid ? 'none' : `1.5px solid ${bg}`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VOdds call-to-action button. Primary is the brand red pill with a glow on
 * hover (lifted straight from the Figma "Regular CTA Button"). Variants cover
 * the three verticals (neon / gold) plus ghost + secondary.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  uppercase = true,
  type = 'button',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: '9px 18px',
      fontSize: 13
    },
    md: {
      padding: '14px 28px',
      fontSize: 15
    },
    lg: {
      padding: '18px 40px',
      fontSize: 18
    }
  };
  const variants = {
    primary: {
      base: {
        background: 'var(--vo-red)',
        color: '#fff',
        border: 'none'
      },
      hover: {
        background: 'var(--vo-red-contrast)',
        boxShadow: 'var(--glow-red)'
      }
    },
    pink: {
      base: {
        background: 'var(--vo-pink)',
        color: '#fff',
        border: 'none'
      },
      hover: {
        background: 'var(--vo-pink-soft)',
        boxShadow: 'var(--glow-pink)'
      }
    },
    neon: {
      base: {
        background: 'var(--vo-neon)',
        color: 'var(--vo-ink)',
        border: 'none'
      },
      hover: {
        background: 'var(--vo-neon-bright)',
        boxShadow: 'var(--glow-neon)'
      }
    },
    gold: {
      base: {
        background: 'var(--vo-gold)',
        color: 'var(--vo-ink)',
        border: 'none'
      },
      hover: {
        background: '#ffd45e',
        boxShadow: 'var(--glow-gold)'
      }
    },
    secondary: {
      base: {
        background: 'rgba(255,255,255,0.10)',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.22)'
      },
      hover: {
        background: 'rgba(255,255,255,0.18)'
      }
    },
    ghost: {
      base: {
        background: 'transparent',
        color: 'var(--vo-red)',
        border: '1.5px solid var(--vo-red)'
      },
      hover: {
        background: 'var(--vo-red)',
        color: '#fff'
      }
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStyle: 'italic',
      letterSpacing: '0.01em',
      textTransform: uppercase ? 'uppercase' : 'none',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'background 140ms ease, box-shadow 180ms ease, transform 90ms ease',
      transform: active ? 'scale(0.97)' : 'scale(1)',
      ...sizes[size],
      ...v.base,
      ...(hover ? v.hover : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/betting/BonusCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bonus / welcome-offer card — the headline promo block ("$3000 WELCOME BONUS
 * FOR YOUR BETS"). Themed per vertical via gradient background.
 */
function BonusCard({
  vertical = 'sports',
  kicker = 'Welcome bonus',
  amount = '$3000',
  headline = 'For your bets',
  cta = 'Get account now',
  onCta,
  style,
  ...rest
}) {
  const grads = {
    sports: 'var(--grad-sport)',
    casino: 'var(--grad-casino)',
    esports: 'var(--grad-esport)',
    crypto: 'var(--grad-night)',
    red: 'var(--grad-red)'
  };
  const accents = {
    sports: 'gold',
    casino: 'gold',
    esports: 'neon',
    crypto: 'gold',
    red: 'gold'
  };
  const btnVariant = vertical === 'esports' ? 'neon' : 'primary';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-2xl)',
      padding: '32px 36px',
      background: grads[vertical] || grads.sports,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      alignItems: 'flex-start',
      color: '#fff',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: accents[vertical]
  }, kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 900,
      fontSize: 'var(--text-hero)',
      lineHeight: 0.95,
      letterSpacing: '0.005em',
      color: 'var(--vo-gold)'
    }
  }, amount), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 800,
      fontSize: 'var(--text-h2)',
      textTransform: 'uppercase',
      lineHeight: 1
    }
  }, headline)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: btnVariant,
    size: "md",
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { BonusCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/betting/BonusCard.jsx", error: String((e && e.message) || e) }); }

// components/core/PromoCode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Promo-code chip — the dashed-outline "CRB150" code users copy from emails.
 * Click to copy. Shown inline in campaign bodies.
 */
function PromoCode({
  code = 'CRB150',
  label = 'Promo code',
  onCopy,
  style,
  ...rest
}) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    try {
      navigator.clipboard && navigator.clipboard.writeText(code);
    } catch (e) {}
    setCopied(true);
    onCopy && onCopy(code);
    setTimeout(() => setCopied(false), 1400);
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: copy,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 10px 10px 18px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px dashed var(--vo-red)',
      background: 'rgba(255,41,41,0.06)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--vo-grey)',
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-tech)',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '0.08em',
      color: 'var(--vo-ink)'
    }
  }, code)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 800,
      fontSize: 12,
      textTransform: 'uppercase',
      color: '#fff',
      background: 'var(--vo-red)',
      padding: '8px 12px',
      borderRadius: 6
    }
  }, copied ? 'Copied' : 'Copy'));
}
Object.assign(__ds_scope, { PromoCode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PromoCode.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section heading — optional eyebrow over a heavy uppercase display title,
 * the pattern used throughout VOdds emails ("CHECK THE BEST ODDS FOR THE…").
 */
function SectionHeading({
  eyebrow,
  children,
  align = 'center',
  tone = 'dark',
  accent,
  size = 'h2',
  style,
  ...rest
}) {
  const sizes = {
    h1: 'var(--text-h1)',
    h2: 'var(--text-h2)',
    h3: 'var(--text-h3)'
  };
  const color = tone === 'light' ? '#fff' : 'var(--vo-ink)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-tech)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: accent || 'var(--vo-red)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStyle: 'italic',
      fontSize: sizes[size],
      lineHeight: 1.05,
      letterSpacing: '0.005em',
      textTransform: 'uppercase',
      color
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vertical / category tag with a leading glyph — labels the product world a
 * piece of content belongs to (SPORTS, CASINO, ESPORTS, CRYPTO).
 */
function Tag({
  vertical = 'sports',
  label,
  style,
  ...rest
}) {
  const map = {
    sports: {
      glyph: '⚽',
      bg: 'var(--vo-sport-navy)',
      fg: '#fff',
      text: 'Sports'
    },
    casino: {
      glyph: '🎰',
      bg: 'var(--vo-casino-purple)',
      fg: '#fff',
      text: 'Casino'
    },
    esports: {
      glyph: '🎮',
      bg: '#0c2a10',
      fg: 'var(--vo-mint)',
      text: 'Esports'
    },
    crypto: {
      glyph: '₿',
      bg: 'var(--vo-ink)',
      fg: 'var(--vo-gold)',
      text: 'Crypto'
    }
  };
  const v = map[vertical] || map.sports;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-tech)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      background: v.bg,
      color: v.fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, v.glyph), label || v.text);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SocialBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  facebook: 'M14 9h2.5l.5-3h-3V4.3c0-.9.3-1.5 1.6-1.5H17V.1C16.7.1 15.6 0 14.3 0 11.7 0 10 1.6 10 4v2H7.5v3H10v8h4V9z',
  instagram: 'M10 1.8c2.7 0 3 0 4 .1 1 0 1.5.2 1.9.4.5.2.8.4 1.2.8.4.4.6.7.8 1.2.1.4.3.9.4 1.9.1 1 .1 1.3.1 4s0 3-.1 4c0 1-.2 1.5-.4 1.9-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.1-.9.3-1.9.4-1 .1-1.3.1-4 .1s-3 0-4-.1c-1 0-1.5-.2-1.9-.4a3.2 3.2 0 0 1-1.2-.8 3.2 3.2 0 0 1-.8-1.2c-.1-.4-.3-.9-.4-1.9-.1-1-.1-1.3-.1-4s0-3 .1-4c0-1 .2-1.5.4-1.9.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.1.9-.3 1.9-.4 1-.1 1.3-.1 4-.1M10 0C7.3 0 6.9 0 5.9.1 4.8.1 4.1.3 3.5.5c-.7.3-1.2.6-1.8 1.2C1.1 2.3.8 2.8.5 3.5.3 4.1.1 4.8.1 5.9 0 6.9 0 7.3 0 10s0 3.1.1 4.1c0 1.1.2 1.8.4 2.4.3.7.6 1.2 1.2 1.8.6.6 1.1.9 1.8 1.2.6.2 1.3.4 2.4.4 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c1.1 0 1.8-.2 2.4-.4.7-.3 1.2-.6 1.8-1.2.6-.6.9-1.1 1.2-1.8.2-.6.4-1.3.4-2.4.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c0-1.1-.2-1.8-.4-2.4a4.8 4.8 0 0 0-1.2-1.8A4.8 4.8 0 0 0 16.5.5C15.9.3 15.2.1 14.1.1 13.1 0 12.7 0 10 0zm0 4.9a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm5.3-9.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z',
  telegram: 'M18.4 2.3 1.6 8.8c-1.1.5-1.1 1.1-.2 1.3l4.3 1.3 1.6 5c.2.6.1.8.7.8.5 0 .7-.2 1-.5l2-2 4.2 3.1c.8.4 1.3.2 1.5-.7l2.8-13c.3-1.1-.4-1.6-1.1-1.3zM7.6 12.3l8.8-5.6c.4-.3.8-.1.5.2l-7.3 6.6c-.3.2-.4.4-.4.8l-.3 2.5-1.3-4.5z',
  x: 'M14.7 1h2.8l-6.1 7L18.6 19h-5.6l-4.4-5.8L3.5 19H.7l6.5-7.5L.2 1h5.7l4 5.3L14.7 1zm-1 16.3h1.6L5.4 2.6H3.7l10 14.7z',
  youtube: 'M19.6 5.8a2.5 2.5 0 0 0-1.8-1.8C16.2 3.6 10 3.6 10 3.6s-6.2 0-7.8.4A2.5 2.5 0 0 0 .4 5.8C0 7.4 0 10.6 0 10.6s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM8 13.6V7.6l5.2 3-5.2 3z'
};
const VIEWBOX = {
  facebook: '0 0 17 18',
  instagram: '0 0 20 20',
  telegram: '0 0 20 20',
  x: '0 0 19 20',
  youtube: '0 0 20 21'
};

/**
 * Footer social bar — VOdds' rounded-square social buttons (Facebook,
 * Instagram, Telegram, X, YouTube). `tone="light"` for dark backgrounds.
 */
function SocialBar({
  platforms = ['facebook', 'instagram', 'telegram', 'x', 'youtube'],
  tone = 'light',
  size = 44,
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 12,
      ...style
    }
  }, rest), platforms.map(p => /*#__PURE__*/React.createElement("a", {
    key: p,
    href: "#",
    "aria-label": p,
    onClick: e => e.preventDefault(),
    style: {
      width: size,
      height: size,
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: light ? '#fff' : 'var(--vo-slate-800)',
      boxShadow: light ? 'var(--shadow-card)' : 'none',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size * 0.42,
    height: size * 0.42,
    viewBox: VIEWBOX[p],
    fill: light ? 'var(--vo-ink)' : '#fff'
  }, /*#__PURE__*/React.createElement("path", {
    d: ICONS[p]
  })))));
}
Object.assign(__ds_scope, { SocialBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SocialBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/banners/BannerGallery.jsx
try { (() => {
/* global React, VOddsDesignSystem_b9b154 */
const {
  Logo,
  Button,
  Badge,
  Tag,
  Avatar,
  OddsChip,
  SectionHeading
} = window.VOddsDesignSystem_b9b154;
const THEME = {
  sports: {
    grad: 'var(--grad-sport)',
    accent: 'var(--vo-gold)',
    btn: 'gold',
    tag: 'sports',
    ev: 'EURO 2024'
  },
  casino: {
    grad: 'var(--grad-casino)',
    accent: 'var(--vo-gold)',
    btn: 'gold',
    tag: 'casino',
    ev: 'Live Casino Drops'
  },
  esports: {
    grad: 'var(--grad-esport)',
    accent: 'var(--vo-neon)',
    btn: 'neon',
    tag: 'esports',
    ev: 'DreamLeague S29'
  }
};
function Frame({
  title,
  w,
  h,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-tech)',
      fontSize: 11,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--vo-grey)'
    }
  }, title, " \xB7 ", w, "\xD7", h), /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-pop)',
      position: 'relative'
    }
  }, children));
}

/* Wide hero banner */
function HeroBanner({
  t
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: t.grad,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: '0 56px'
    }
  }, /*#__PURE__*/React.createElement(Glow, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      zIndex: 1,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "light",
    height: 40,
    tagline: true
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 900,
      fontSize: 56,
      lineHeight: .96,
      textTransform: 'uppercase',
      color: '#fff'
    }
  }, "Excellence in", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.accent
    }
  }, "every play")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: t.btn,
    size: "md"
  }, "Bet now"), /*#__PURE__*/React.createElement(Badge, {
    tone: "dark"
  }, t.ev))));
}

/* VS matchup banner */
function VsBanner({
  t
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'var(--grad-night)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 16,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      left: 22
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "light",
    height: 28
  })), /*#__PURE__*/React.createElement(Tag, {
    vertical: t.tag
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Team A",
    ring: "sport",
    size: 78
  }), /*#__PURE__*/React.createElement(OddsChip, {
    price: "1.85",
    label: "Team A"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 900,
      fontSize: 46,
      color: t.accent
    }
  }, "VS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Team B",
    ring: "red",
    size: 78
  }), /*#__PURE__*/React.createElement(OddsChip, {
    price: "2.05",
    label: "Team B"
  }))));
}

/* Square 1080 social */
function SquareBanner({
  t
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: t.grad,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 30
    }
  }, /*#__PURE__*/React.createElement(Glow, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "light",
    height: 30
  }), /*#__PURE__*/React.createElement(Tag, {
    vertical: t.tag
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-tech)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: t.accent
    }
  }, t.ev), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 900,
      fontSize: 46,
      lineHeight: .95,
      textTransform: 'uppercase',
      color: '#fff'
    }
  }, "Get up to", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.accent
    }
  }, "150 USDT"))), /*#__PURE__*/React.createElement("div", {
    style: {
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: t.btn,
    size: "md",
    block: true
  }, "Claim bonus")));
}
function Glow() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 80% at 85% 20%, rgba(255,255,255,.18), transparent 60%)',
      pointerEvents: 'none'
    }
  });
}
function App() {
  const [vert, setVert] = React.useState('esports');
  const t = THEME[vert];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--vo-ink)',
      padding: '28px 28px 60px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: 8,
      background: 'var(--vo-night)',
      borderRadius: 999
    }
  }, Object.keys(THEME).map(k => {
    const on = k === vert;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setVert(k),
      style: {
        border: 'none',
        cursor: 'pointer',
        padding: '8px 20px',
        borderRadius: 999,
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontWeight: 800,
        fontSize: 13,
        textTransform: 'uppercase',
        background: on ? 'var(--vo-red)' : 'transparent',
        color: on ? '#fff' : 'rgba(255,255,255,.6)'
      }
    }, k);
  })), /*#__PURE__*/React.createElement(Frame, {
    title: "Hero banner",
    w: 920,
    h: 300
  }, /*#__PURE__*/React.createElement(HeroBanner, {
    t: t
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Frame, {
    title: "VS banner",
    w: 460,
    h: 300
  }, /*#__PURE__*/React.createElement(VsBanner, {
    t: t
  })), /*#__PURE__*/React.createElement(Frame, {
    title: "Social square",
    w: 300,
    h: 300
  }, /*#__PURE__*/React.createElement(SquareBanner, {
    t: t
  }))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/banners/BannerGallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/email/EmailCampaign.jsx
try { (() => {
/* global React, VOddsDesignSystem_b9b154 */
const {
  Logo,
  BonusCard,
  SectionHeading,
  MatchupCard,
  OddsChip,
  Avatar,
  PromoCode,
  Button,
  SocialBar,
  Badge,
  Tag
} = window.VOddsDesignSystem_b9b154;
const VERTICALS = {
  sports: {
    label: 'Sports',
    tag: 'sports',
    grad: 'var(--grad-sport)',
    kicker: 'Olympic Games 2024',
    amount: '$3000',
    headline: 'For your bets',
    heroTitle: ['Bet on your favorite team,', 'Germany or Scotland,', 'and get up to 150 USDT!'],
    promo: 'CRB150',
    btn: 'primary',
    cta: 'Claim your bonus'
  },
  casino: {
    label: 'Casino',
    tag: 'casino',
    grad: 'var(--grad-casino)',
    kicker: 'Live Casino Drops',
    amount: '€1500',
    headline: '+ 300 free spins',
    heroTitle: ['Spin the reels and', 'win the daily', 'casino drops!'],
    promo: 'SPIN300',
    btn: 'gold',
    cta: 'Play now'
  },
  esports: {
    label: 'Esports',
    tag: 'esports',
    grad: 'var(--grad-esport)',
    kicker: 'DreamLeague S29',
    amount: '150 USDT',
    headline: 'Crypto bonus',
    heroTitle: ['Excellence in', 'every play —', 'bet on esports!'],
    promo: 'EGAME150',
    btn: 'neon',
    cta: 'Bet now'
  }
};
function Switcher({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: 8,
      background: 'var(--vo-night)',
      borderRadius: 999
    }
  }, Object.keys(VERTICALS).map(k => {
    const on = k === value;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => onChange(k),
      style: {
        border: 'none',
        cursor: 'pointer',
        padding: '8px 18px',
        borderRadius: 999,
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontWeight: 800,
        fontSize: 13,
        textTransform: 'uppercase',
        letterSpacing: '.02em',
        background: on ? 'var(--vo-red)' : 'transparent',
        color: on ? '#fff' : 'rgba(255,255,255,.6)',
        transition: 'background 140ms ease'
      }
    }, VERTICALS[k].label);
  }));
}
function Email({
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 640,
      background: 'var(--vo-cloud)',
      borderRadius: 18,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card-strong)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px 40px 0'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "dark",
    height: 40,
    tagline: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 40px 0'
    }
  }, /*#__PURE__*/React.createElement(BonusCard, {
    vertical: v.tag,
    kicker: v.kicker,
    amount: v.amount,
    headline: v.headline,
    cta: v.cta
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '34px 40px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      textAlign: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 800,
      fontSize: 30,
      lineHeight: 1.05,
      textTransform: 'uppercase',
      color: 'var(--vo-ink)'
    }
  }, v.heroTitle.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 480,
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, "Are you ready to earn big using cryptocurrency? ", /*#__PURE__*/React.createElement("b", null, "Join VOdds today and get a special bonus"), " when you bet this weekend. Fund your account using Bitcoin (BTC) or Tether (USDT)."), /*#__PURE__*/React.createElement(PromoCode, {
    code: v.promo
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      padding: '30px 40px',
      background: 'var(--vo-night)',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "This weekend",
    size: "h3",
    tone: "light",
    align: "center"
  }, "Check the best odds"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Noah Lyles",
    ring: "sport",
    size: 84
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 14,
      color: '#fff',
      textTransform: 'uppercase'
    }
  }, "Noah Lyles")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 900,
      fontSize: 40,
      color: 'var(--vo-red)'
    }
  }, "VS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Kishane T",
    ring: "red",
    size: 84
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 14,
      color: '#fff',
      textTransform: 'uppercase'
    }
  }, "Kishane T."))), /*#__PURE__*/React.createElement(MatchupCard, {
    league: v.kicker,
    home: {
      name: 'Germany',
      flag: '🇩🇪'
    },
    away: {
      name: 'Scotland',
      flag: '🏴'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: 'rgba(255,255,255,.5)',
      textAlign: 'center'
    }
  }, "*Odds are accurate at the time of writing and might be subject to change.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px 40px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 800,
      fontSize: 18,
      textTransform: 'uppercase'
    }
  }, "Cheers, VOdds Team"), /*#__PURE__*/React.createElement(SocialBar, {
    tone: "dark"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 460,
      fontSize: 11,
      lineHeight: 1.5,
      color: 'var(--vo-grey)'
    }
  }, "VOdds is a brand managed by Ole Group International B.V., a Cura\xE7ao registered company, License No. 8048/JAZ. Please gamble responsibly. 18+.")));
}
function App() {
  const [vert, setVert] = React.useState('sports');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--vo-ink)',
      padding: '32px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Switcher, {
    value: vert,
    onChange: setVert
  }), /*#__PURE__*/React.createElement(Email, {
    v: VERTICALS[vert]
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/email/EmailCampaign.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.BonusCard = __ds_scope.BonusCard;

__ds_ns.MatchupCard = __ds_scope.MatchupCard;

__ds_ns.OddsChip = __ds_scope.OddsChip;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.PromoCode = __ds_scope.PromoCode;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.SocialBar = __ds_scope.SocialBar;

})();
