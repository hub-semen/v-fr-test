// figma node: 3:1773 basic / log_out
export function BasicLogOut2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      color: "rgb(20,228,15)",
      ...props.style,
    }}>
      <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
        position: "absolute",
        left: 2.5,
        top: 2.5,
        width: 15,
        height: 15,
      }}>
        <path d={"M 13.333 15 L 5.833 15 C 4.913 15 4.167 14.254 4.167 13.333 L 4.167 10 L 5.833 10 L 5.833 13.333 L 13.333 13.333 L 13.333 1.667 L 5.833 1.667 L 5.833 5 L 4.167 5 L 4.167 1.667 C 4.167 0.746 4.913 0 5.833 0 L 13.333 0 C 14.254 0 15 0.746 15 1.667 L 15 13.333 C 15 14.254 14.254 15 13.333 15 Z M 7.5 10.833 L 7.5 8.333 L 0 8.333 L 0 6.667 L 7.5 6.667 L 7.5 4.167 L 11.667 7.5 L 7.5 10.833 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default BasicLogOut2;
