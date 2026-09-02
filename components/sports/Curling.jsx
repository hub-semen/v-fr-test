// figma node: 4372:7454 Curling
export function Curling(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 30,
      height: 30,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 15,
      padding: "4.500px 3px 4.500px 3px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 22.63,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={26} height={12.037} viewBox="0 0 26 12.037" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 10.593,
          width: 26,
          height: 12.037,
        }}>
          <path d={"M 0 6.019 C 0 2.695 2.694 0 6.019 0 L 19.981 0 C 23.305 0 26 2.695 26 6.019 C 26 9.342 23.305 12.037 19.981 12.037 L 6.019 12.037 C 2.694 12.037 0 9.342 0 6.019 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={18.296} height={8.667} viewBox="0 0 18.296 8.667" fill="none" style={{
          position: "absolute",
          left: 3.37,
          top: 0,
          width: 18.296,
          height: 8.667,
        }}>
          <path d={"M 10.593 3.852 C 11.178 3.852 11.64 4.373 11.543 4.977 C 11.466 5.45 11.021 5.778 10.541 5.778 L 3.37 5.778 C 1.444 5.778 0 7.337 0 8.667 L 18.296 8.667 L 16.066 1.976 C 15.673 0.795 14.569 0 13.325 0 L 4.815 0 C 3.751 0 2.889 0.862 2.889 1.926 C 2.889 2.99 3.751 3.852 4.815 3.852 L 10.593 3.852 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
}
export default Curling;
