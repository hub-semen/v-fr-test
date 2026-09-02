// figma node: 3:6650 arrow_forward
export function ArrowForward(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
      }}>
        <path d={"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
      <svg width={13.333} height={13.333} viewBox="0 0 13.333 13.333" fill="none" style={{
        position: "absolute",
        left: 3.333,
        top: 3.333,
        width: 13.333,
        height: 13.333,
        color: "rgb(255,255,255)",
      }}>
        <path d={"M 6.667 0 L 5.492 1.175 L 10.142 5.833 L 0 5.833 L 0 7.5 L 10.142 7.5 L 5.492 12.158 L 6.667 13.333 L 13.333 6.667 L 6.667 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default ArrowForward;
