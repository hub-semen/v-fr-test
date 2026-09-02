// figma node: 243:5928 Hamburger
export function Hamburger(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      height: 20,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "3px 2px 3px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 11.339,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={16} height={2.286} viewBox="0 0 16 2.286" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 2.286,
        }}>
          <path d={"M 16 0 L 0 0 L 0 2.286 L 16 2.286 L 16 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={16} height={2.286} viewBox="0 0 16 2.286" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 4.527,
          width: 16,
          height: 2.286,
        }}>
          <path d={"M 16 0 L 0 0 L 0 2.286 L 16 2.286 L 16 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={16} height={2.286} viewBox="0 0 16 2.286" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 9.053,
          width: 16,
          height: 2.286,
        }}>
          <path d={"M 16 0 L 0 0 L 0 2.286 L 16 2.286 L 16 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
}
export default Hamburger;
