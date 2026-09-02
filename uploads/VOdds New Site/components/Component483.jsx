import { Skype } from './Skype.jsx';

// figma node: 2329:7651 Component 48 (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Component483(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(45,54,63)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(21,214,16)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 15px 10px 15px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: 1.2999999523162842,
          color: "rgb(45,54,63)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "My Account"}</span>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 20,
            height: 20,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 20,
              height: 20,
              overflow: "hidden",
            }}>
              <svg width={10} height={12.500} viewBox="0 0 10 12.500" fill="none" style={{
                position: "absolute",
                left: 4.499,
                top: 3.333,
                width: 10,
                height: 12.5,
              }}>
                <path d={"M 1.667 12.5 L 0 12.5 C 0 9.739 2.239 7.5 5 7.5 C 7.761 7.5 10 9.739 10 12.5 L 8.333 12.5 C 8.333 10.659 6.841 9.167 5 9.167 C 3.159 9.167 1.667 10.659 1.667 12.5 Z M 5 6.667 C 3.159 6.667 1.667 5.174 1.667 3.333 C 1.667 1.492 3.159 0 5 0 C 6.841 0 8.333 1.492 8.333 3.333 C 8.331 5.173 6.84 6.664 5 6.667 Z M 5 1.667 C 4.089 1.668 3.348 2.399 3.335 3.309 C 3.322 4.22 4.042 4.972 4.952 4.999 C 5.862 5.026 6.626 4.318 6.667 3.408 L 6.667 3.742 L 6.667 3.333 C 6.667 2.413 5.92 1.667 5 1.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(21,214,16)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 15px 10px 15px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: 1.2999999523162842,
          color: "rgb(45,54,63)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "My Account"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Skype />}</div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(21,214,16)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 15px 10px 15px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: 1.2999999523162842,
          color: "rgb(30,36,44)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "My Account"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Skype />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=default green
    "property1=default green": __body1,
    // figma: Property 1=Variant4
    "property1=variant4": __body2,
    // figma: Property 1=Hover
    "property1=hover": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Component483;
