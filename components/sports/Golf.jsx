// figma node: 3:6632 Golf
export function Golf(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 11,
      height: 11,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <svg width={11} height={11} viewBox="0 0 11 11" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 11,
        height: 11,
      }}>
        <path d={"M 11 0.448 L 9.99 0 L 7.418 6.719 C 7.02 7.863 6.159 7.89 5.916 7.774 C 5.455 7.553 4.336 6.96 3.545 6.347 C 2.555 5.582 1.233 5.675 0.315 6.95 C -0.419 7.971 0.3 9.028 0.751 9.429 C 4.278 12.225 7.051 10.737 7.707 9.206 L 11 0.448 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default Golf;
