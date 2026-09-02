// figma node: 3:6602 Box
export function Box(_p = {}) {
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
        <path d={"M 2.41 6.038 C 1.829 5.615 1.452 4.004 1.337 3.251 C -0.538 3.571 -0.039 5.242 0.445 6.038 C 1.243 7.916 2.722 8.643 3.362 8.772 C 3.374 9.825 3.579 10.372 3.68 10.514 C 3.982 10.978 5.751 11.026 6.597 10.991 C 8.532 11.032 9.298 10.776 9.439 10.643 C 9.753 9.972 9.832 9.073 9.832 8.708 C 8.006 9.275 6.018 9.134 5.252 8.992 C 7.816 8.888 9.182 8.441 9.545 8.231 C 10.524 7.415 10.85 5.32 10.89 4.374 C 11.313 1.67 10.412 0.693 9.908 0.542 C 9.736 0.37 8.795 0.021 6.401 0.001 C 4.006 -0.02 2.984 0.491 2.773 0.749 C 1.515 1.492 2.007 4.584 2.41 6.038 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default Box;
