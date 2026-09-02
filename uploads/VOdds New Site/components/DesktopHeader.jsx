import { ArrowForward } from './ArrowForward.jsx';
import { BasicLogOut2 } from './BasicLogOut2.jsx';
import { Component483 } from './Component483.jsx';
import { Hamburger } from './Hamburger.jsx';
import { LiveGames2 } from './LiveGames2.jsx';

// figma node: 2326:7152 Desktop header (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function DesktopHeader(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1728,
      borderRadius: "0px 0px 5px 5px",
      backgroundColor: "rgb(45,54,63)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 50px 12px 50px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 30,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", height: 20, flexShrink: 0 }}>{props.icon1 ?? <Hamburger />}</div>
        <div style={{
          position: "relative",
          width: 90.892,
          height: 29.241,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 24.607,
            height: 27.897,
            overflow: "hidden",
            boxShadow: "0px 0px 10px 0px rgba(255,41,41,0.7)",
          }}>
            <svg width={16.488} height={27.897} viewBox="0 0 16.488 27.897" fill="none" style={{
              position: "absolute",
              left: 8.119,
              top: 0,
              width: 16.488,
              height: 27.897,
              color: "rgb(255,41,41)",
            }}>
              <path d={"M 10.417 0 L 5.459 12.456 L 5.459 12.447 L 2.66 19.259 L 2.66 19.268 L 2.604 19.389 L 2.614 19.407 L 0 27.897 L 5.06 27.878 L 14.783 4.291 L 16.488 0 L 10.417 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={10.769} height={20.473} viewBox="0 0 10.769 20.473" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 7.424,
              width: 10.769,
              height: 20.473,
              color: "rgb(255,41,41)",
            }}>
              <path d={"M 10.723 11.965 L 10.769 11.854 L 5.681 0 L 0 0 L 7.952 19.945 L 8.119 20.473 L 10.732 11.984 L 10.723 11.965 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <svg width={17.624} height={21.181} viewBox="0 0 17.624 21.181" fill="none" style={{
            position: "absolute",
            left: 38.333,
            top: 7.398,
            width: 17.624,
            height: 21.181,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 0 21.175 C 0 16.662 0 12.167 0 7.635 C 0.065 7.69 0.111 7.718 0.139 7.755 C 1.511 9.321 2.882 10.897 4.254 12.463 C 4.347 12.574 4.375 12.686 4.375 12.825 C 4.375 13.937 4.375 15.049 4.375 16.161 C 4.375 16.263 4.375 16.365 4.375 16.476 C 4.467 16.486 4.523 16.495 4.588 16.495 C 5.468 16.495 6.339 16.504 7.22 16.495 C 7.859 16.486 8.499 16.411 9.12 16.226 C 9.769 16.031 10.315 15.679 10.751 15.16 C 11.668 14.057 12.206 12.788 12.382 11.37 C 12.512 10.322 12.428 9.275 12.15 8.255 C 11.622 6.318 10.343 5.206 8.397 4.826 C 7.831 4.715 7.257 4.687 6.682 4.687 C 4.588 4.687 2.493 4.687 0.399 4.687 C 0.278 4.687 0.158 4.687 0.019 4.687 C 0.019 3.121 0.019 1.592 0.019 0.035 C 0.093 0.025 0.167 0.007 0.232 0.007 C 2.725 0.007 5.209 -0.021 7.702 0.035 C 9.537 0.072 11.307 0.48 12.938 1.388 C 14.931 2.491 16.228 4.168 16.961 6.309 C 17.331 7.384 17.517 8.496 17.591 9.627 C 17.665 10.823 17.619 12.018 17.415 13.205 C 17.164 14.669 16.599 16.004 15.691 17.181 C 15.209 17.811 14.708 18.423 14.106 18.942 C 12.845 20.026 11.372 20.656 9.741 20.943 C 8.897 21.092 8.035 21.166 7.183 21.166 C 4.875 21.175 2.558 21.166 0.25 21.166 C 0.158 21.184 0.093 21.184 0 21.175 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={17.609} height={21.176} viewBox="0 0 17.609 21.176" fill="none" style={{
            position: "absolute",
            left: 56.785,
            top: 7.42,
            width: 17.609,
            height: 21.176,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 0 4.675 C 0 3.099 0 1.579 0 0.031 C 0.074 0.022 0.148 0.004 0.213 0.004 C 2.716 0.004 5.209 -0.015 7.711 0.031 C 9.148 0.059 10.556 0.337 11.9 0.893 C 14.393 1.922 16.052 3.739 16.933 6.269 C 17.313 7.353 17.498 8.475 17.572 9.615 C 17.646 10.699 17.609 11.783 17.452 12.858 C 17.22 14.443 16.664 15.898 15.672 17.177 C 15.255 17.715 14.838 18.252 14.338 18.716 C 13.031 19.93 11.474 20.634 9.722 20.949 C 8.879 21.098 8.017 21.172 7.164 21.172 C 4.866 21.181 2.558 21.172 0.26 21.172 C 0.176 21.172 0.093 21.163 0 21.153 C 0 16.649 0 12.154 0 7.622 C 0.065 7.678 0.12 7.705 0.158 7.752 C 1.52 9.318 2.882 10.875 4.254 12.441 C 4.347 12.553 4.384 12.664 4.375 12.803 C 4.375 13.915 4.375 15.027 4.375 16.139 C 4.375 16.241 4.375 16.343 4.375 16.464 C 4.467 16.473 4.541 16.491 4.606 16.491 C 5.487 16.491 6.358 16.501 7.238 16.482 C 7.878 16.473 8.517 16.399 9.138 16.213 C 9.769 16.019 10.297 15.685 10.723 15.175 C 11.659 14.073 12.197 12.794 12.373 11.366 C 12.503 10.319 12.419 9.272 12.141 8.252 C 11.622 6.315 10.343 5.194 8.388 4.814 C 7.813 4.703 7.229 4.675 6.645 4.675 C 4.56 4.675 2.475 4.675 0.389 4.675 C 0.269 4.675 0.148 4.675 0 4.675 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={17.637} height={21.171} viewBox="0 0 17.637 21.171" fill="none" style={{
            position: "absolute",
            left: 73.255,
            top: 8.042,
            width: 17.637,
            height: 21.171,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 17.637 0.039 C 17.554 0.151 17.498 0.215 17.442 0.28 C 16.275 1.652 15.107 3.024 13.948 4.395 C 13.828 4.534 13.707 4.599 13.513 4.59 C 12.067 4.581 10.63 4.59 9.185 4.59 C 8.87 4.59 8.564 4.627 8.276 4.748 C 7.405 5.1 6.932 6.166 7.257 7.046 C 7.35 7.306 7.507 7.509 7.73 7.667 C 7.989 7.843 8.267 8.028 8.554 8.158 C 9.036 8.381 9.537 8.594 10.037 8.779 C 10.899 9.094 11.743 9.446 12.558 9.845 C 13.031 10.077 13.485 10.345 13.939 10.605 C 14.032 10.651 14.106 10.735 14.18 10.8 C 15.088 11.624 15.635 12.635 15.765 13.867 C 15.895 15.1 15.774 16.296 15.264 17.435 C 14.495 19.169 13.161 20.244 11.372 20.8 C 10.566 21.05 9.741 21.171 8.897 21.171 C 6.071 21.161 3.235 21.171 0.408 21.171 C 0.287 21.171 0.167 21.171 0 21.171 C 0.065 21.078 0.093 21.022 0.13 20.976 C 1.307 19.586 2.484 18.205 3.661 16.815 C 3.772 16.685 3.893 16.648 4.05 16.648 C 5.487 16.648 6.914 16.657 8.35 16.648 C 8.629 16.648 8.916 16.62 9.185 16.536 C 10.111 16.24 10.64 15.193 10.343 14.257 C 10.25 13.979 10.093 13.747 9.852 13.58 C 9.574 13.385 9.287 13.2 8.981 13.061 C 8.249 12.746 7.498 12.468 6.756 12.162 C 5.691 11.717 4.634 11.282 3.661 10.651 C 3.494 10.54 3.336 10.392 3.188 10.243 C 2.298 9.372 1.854 8.297 1.77 7.065 C 1.705 6.091 1.798 5.146 2.132 4.219 C 2.817 2.31 4.171 1.096 6.08 0.456 C 7.007 0.151 7.971 0.021 8.944 0.012 C 11.761 -0.007 14.588 0.002 17.405 0.002 C 17.47 0.03 17.526 0.03 17.637 0.039 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={6.526} height={13.819} viewBox="0 0 6.526 13.819" fill="none" style={{
            position: "absolute",
            left: 14.484,
            top: 8.888,
            width: 6.526,
            height: 13.819,
            color: "rgb(255,41,41)",
          }}>
            <path d={"M 1.438 7.563 C 1.837 4.912 3.171 2.734 5.266 1.066 C 5.636 0.769 6.026 0.5 6.415 0.26 L 6.526 0 C 5.636 0.38 4.774 0.89 3.968 1.538 C 1.874 3.216 0.548 5.385 0.14 8.035 C -0.184 10.158 0.057 12.086 0.826 13.819 L 1.623 11.891 C 1.271 10.556 1.206 9.11 1.438 7.563 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={21.801} height={21.094} viewBox="0 0 21.801 21.094" fill="none" style={{
            position: "absolute",
            left: 15.76,
            top: 7.454,
            width: 21.801,
            height: 21.094,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 21.664 8.867 C 21.266 6.217 19.931 4.039 17.836 2.37 C 15.427 0.443 12.656 -0.271 9.597 0.09 C 8.068 0.276 6.641 0.73 5.315 1.462 C 5.315 1.462 5.158 1.546 5.074 1.601 C 4.852 1.731 4.407 2.065 4.407 2.065 C 4.314 2.129 4.222 2.204 4.129 2.278 C 1.942 4.002 0.561 6.235 0.144 8.969 C -0.051 10.267 -0.051 11.499 0.162 12.658 L 0.144 12.695 C 0.181 12.834 0.209 12.964 0.246 13.103 C 0.273 13.214 0.301 13.325 0.329 13.427 L 0.338 13.409 C 1.367 16.801 3.545 19.192 6.965 20.462 C 8.8 21.147 10.7 21.231 12.628 20.925 C 14.676 20.601 16.53 19.822 18.096 18.46 C 20.997 15.911 22.239 12.704 21.664 8.867 Z M 15.575 13.881 C 14.889 15.188 13.833 16.096 12.368 16.402 C 10.32 16.838 8.466 16.439 6.946 14.919 C 6.112 14.094 5.64 13.056 5.417 11.917 C 5.111 10.359 5.278 8.849 6.01 7.44 C 6.965 5.614 8.503 4.65 10.561 4.493 C 10.719 4.484 10.885 4.474 11.034 4.465 C 13.147 4.484 14.732 5.41 15.668 7.301 C 16.743 9.498 16.715 11.713 15.575 13.881 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={5.097} height={16.099} viewBox="0 0 5.097 16.099" fill="none" style={{
            position: "absolute",
            left: 5.672,
            top: 7.424,
            width: 5.097,
            height: 16.099,
            color: "rgb(255,41,41)",
          }}>
            <path d={"M 3.16 16.099 C 3.133 16.163 5.079 11.891 5.097 11.854 L 0 0 C 0.009 0 3.346 11.261 3.16 16.099 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 38.333,
            top: 15.033,
            width: 4.375,
            height: 8.832,
            overflow: "hidden",
          }}>
            <svg width={4.375} height={8.832} viewBox="0 0 4.375 8.832" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 4.375,
              height: 8.832,
              color: "rgb(223,220,220)",
            }}>
              <path d={"M 4.375 8.832 C 4.375 8.721 4.375 8.629 4.375 8.527 C 4.375 7.414 4.375 6.302 4.375 5.19 C 4.375 5.051 4.356 4.94 4.254 4.829 C 2.882 3.262 1.511 1.687 0.139 0.12 C 0.102 0.083 0.065 0.056 0 0 C 0 0.019 0 0.028 0 0.046 C 0.862 1.279 3.077 4.671 4.375 8.832 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 56.776,
            top: 15.033,
            width: 4.375,
            height: 8.832,
            overflow: "hidden",
          }}>
            <svg width={4.375} height={8.832} viewBox="0 0 4.375 8.832" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 4.375,
              height: 8.832,
              color: "rgb(223,220,220)",
            }}>
              <path d={"M 4.375 8.832 C 4.375 8.721 4.375 8.629 4.375 8.527 C 4.375 7.414 4.375 6.302 4.375 5.19 C 4.375 5.051 4.356 4.94 4.254 4.829 C 2.882 3.262 1.511 1.687 0.139 0.12 C 0.102 0.083 0.065 0.056 0 0 C 0 0.019 0 0.028 0 0.046 C 0.871 1.279 3.086 4.671 4.375 8.832 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 73.264,
            top: 24.718,
            width: 6.043,
            height: 4.523,
            overflow: "hidden",
          }}>
            <svg width={6.043} height={4.523} viewBox="0 0 6.043 4.523" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 6.043,
              height: 4.523,
              color: "rgb(223,220,220)",
            }}>
              <path d={"M 6.043 0 C 5.375 0 4.717 0 4.05 0 C 3.893 0 3.772 0.037 3.661 0.167 C 2.484 1.557 1.307 2.947 0.13 4.328 C 0.093 4.375 0.065 4.43 0 4.523 C 1.196 3.42 3.336 1.613 6.043 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <LiveGames2
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            property1={"default"}
          />
          <div style={{
            position: "relative",
            borderRadius: 10,
            backgroundColor: "rgb(36,43,53)",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "4px 20px 4px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 27,
                height: 27,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 27,
                  height: 27,
                  borderRadius: "50%",
                  backgroundColor: "rgb(36,43,53)",
                }} />
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                  position: "absolute",
                  left: 7,
                  top: 7,
                  width: 13,
                  height: 13,
                  color: "rgb(255,255,255)",
                }}>
                  <path d={"M 6.5 0 C 2.916 0 0 2.916 0 6.5 C 0 10.084 2.916 13 6.5 13 C 10.084 13 13 10.084 13 6.5 C 13 2.916 10.084 0 6.5 0 Z M 6.913 2.112 L 8.584 1.213 C 9.509 1.58 10.317 2.18 10.931 2.944 L 10.533 4.782 L 9.258 5.406 L 6.913 3.698 L 6.913 2.112 Z M 4.43 1.208 L 6.101 2.11 L 6.101 3.698 L 3.757 5.406 L 2.476 4.781 L 2.078 2.932 C 2.693 2.169 3.503 1.572 4.43 1.208 Z M 1.812 9.713 C 1.281 8.941 0.936 8.033 0.841 7.052 L 2.216 5.558 L 3.471 6.172 L 4.416 8.855 L 3.617 9.812 L 1.812 9.713 Z M 7.949 11.993 C 7.485 12.116 7.001 12.188 6.5 12.188 C 5.894 12.188 5.31 12.09 4.762 11.914 L 4.251 10.323 L 5.066 9.344 L 7.937 9.344 L 8.738 10.291 L 7.949 11.993 Z M 9.371 9.785 L 8.586 8.855 L 9.544 6.172 L 10.792 5.56 L 12.16 7.053 C 12.078 7.899 11.806 8.688 11.392 9.386 L 9.371 9.785 Z"} fill="currentColor" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>{props.text1 ?? "Sports"}</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 10,
            backgroundColor: "rgb(36,43,53)",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "4px 20px 4px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 27,
                  height: 27,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 27,
                    height: 27,
                    borderRadius: "50%",
                    backgroundColor: "rgb(36,43,53)",
                  }} />
                  <div style={{
                    position: "absolute",
                    left: 7,
                    top: 7,
                    width: 13,
                    height: 13,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 1.444,
                      width: 13,
                      height: 9.389,
                      overflow: "hidden",
                    }}>
                      <svg width={13} height={9.389} viewBox="0 0 13 9.389" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 13,
                        height: 9.389,
                        color: "rgb(255,255,255)",
                      }}>
                        <path d={"M 11.349 1.577 C 11.338 1.547 11.327 1.498 11.313 1.442 C 11.224 1.092 11.14 0.762 10.808 0.64 L 9.233 0.062 C 9.083 0.007 8.921 -0.012 8.761 0.008 C 8.601 0.027 8.448 0.083 8.316 0.172 L 8.219 0.256 C 8.14 0.343 8.033 0.452 7.956 0.522 L 5.054 0.522 C 4.99 0.457 4.904 0.361 4.832 0.275 L 4.719 0.173 C 4.45 -0.009 4.106 -0.05 3.803 0.062 L 2.226 0.64 C 1.896 0.761 1.813 1.088 1.725 1.435 C 1.711 1.487 1.7 1.535 1.704 1.535 C 1.704 1.535 1.705 1.535 1.705 1.535 C 1.168 2.555 -1.385 7.719 1.005 9.243 C 1.347 9.461 1.803 9.427 2.114 9.159 L 3.988 7.54 C 4.153 7.397 4.363 7.318 4.578 7.318 L 8.457 7.318 C 8.672 7.318 8.881 7.397 9.047 7.54 L 10.921 9.159 C 11.097 9.311 11.317 9.389 11.537 9.389 C 11.718 9.389 11.894 9.335 12.041 9.235 C 14.151 7.809 12.25 3.382 11.349 1.577 Z M 8.664 2.086 C 8.963 2.086 9.205 2.32 9.205 2.608 C 9.205 2.896 8.963 3.129 8.664 3.129 C 8.365 3.129 8.123 2.896 8.123 2.608 C 8.123 2.32 8.365 2.086 8.664 2.086 Z M 5.416 4.694 L 4.875 4.694 L 4.875 5.216 C 4.875 5.503 4.633 5.737 4.334 5.737 C 4.034 5.737 3.792 5.503 3.792 5.216 L 3.792 4.694 L 3.251 4.694 C 2.952 4.694 2.71 4.46 2.71 4.173 C 2.71 3.885 2.952 3.651 3.251 3.651 L 3.792 3.651 L 3.792 3.13 C 3.792 2.842 4.034 2.608 4.334 2.608 C 4.633 2.608 4.875 2.842 4.875 3.13 L 4.875 3.651 L 5.416 3.651 C 5.716 3.651 5.957 3.885 5.957 4.173 C 5.957 4.46 5.716 4.694 5.416 4.694 Z M 7.581 4.173 C 7.283 4.173 7.04 3.939 7.04 3.651 C 7.04 3.363 7.283 3.13 7.581 3.13 C 7.88 3.13 8.123 3.363 8.123 3.651 C 8.123 3.939 7.88 4.173 7.581 4.173 Z M 8.664 5.216 C 8.365 5.216 8.123 4.982 8.123 4.694 C 8.123 4.406 8.365 4.173 8.664 4.173 C 8.963 4.173 9.205 4.406 9.205 4.694 C 9.205 4.982 8.963 5.216 8.664 5.216 Z M 9.746 4.173 C 9.448 4.173 9.205 3.939 9.205 3.651 C 9.205 3.363 9.448 3.13 9.746 3.13 C 10.045 3.13 10.288 3.363 10.288 3.651 C 10.288 3.939 10.045 4.173 9.746 4.173 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>{props.text2 ?? "Esports"}</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 10,
            backgroundColor: "rgb(36,43,53)",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "4px 20px 4px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 27,
              height: 27,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 27,
                height: 27,
                borderRadius: "50%",
                backgroundColor: "rgb(36,43,53)",
              }} />
              <svg width={13} height={9} viewBox="0 0 13 9" fill="none" style={{
                position: "absolute",
                left: 7,
                top: 9,
                width: 13,
                height: 9,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1 0 C 0.448 0 0 0.448 0 1 L 0 8 C 0 8.552 0.448 9 1 9 L 12 9 C 12.552 9 13 8.552 13 8 L 13 1 C 13 0.448 12.552 0 12 0 L 1 0 Z M 3.444 3.702 L 2.302 5.963 L 3.115 5.963 L 4.263 3.685 L 4.263 3.054 L 2.103 3.054 L 2.103 3.685 L 3.444 3.685 L 3.444 3.702 Z M 6.683 3.702 L 5.541 5.963 L 6.353 5.963 L 7.501 3.685 L 7.501 3.054 L 5.342 3.054 L 5.342 3.685 L 6.683 3.685 L 6.683 3.702 Z M 9.921 3.702 L 8.779 5.963 L 9.591 5.963 L 10.739 3.685 L 10.739 3.054 L 8.58 3.054 L 8.58 3.685 L 9.921 3.685 L 9.921 3.702 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>{props.text3 ?? "Casino"}</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 10.000001907348633,
        backgroundColor: "rgb(255,41,41)",
        boxShadow: "0px 0px 30px 0px rgb(248,27,27)",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        padding: "10px 20px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 55.793,
          height: 49.549,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={27.871} height={39.742} viewBox="0 0 27.871 39.742" fill="none" style={{
            position: "absolute",
            left: 27.922,
            top: 4.129,
            width: 27.871,
            height: 39.742,
            borderRadius: 80,
            color: "rgba(4,4,4,0.3)",
          }}>
            <path d={"M 9.08 4.319 L 8.335 1.339 C 8.285 1.138 8.181 0.955 8.034 0.808 C 7.588 0.362 6.864 0.362 6.418 0.808 L 3.525 3.701 C 2.905 4.321 2.451 5.086 2.204 5.926 L 1.87 7.061 C 0.739 10.907 2.045 15.055 5.175 17.56 L 8.848 20.498 C 11.411 22.548 12.903 25.653 12.903 28.936 L 12.903 37.249 C 12.903 38.626 14.02 39.742 15.397 39.742 C 16.39 39.742 17.289 39.154 17.684 38.243 L 21.769 28.849 C 22.037 28.232 22.576 27.776 23.228 27.613 C 23.878 27.45 24.416 26.996 24.684 26.382 L 27.632 19.644 C 27.79 19.283 27.871 18.894 27.871 18.5 C 27.871 17.579 27.426 16.715 26.677 16.179 L 24.258 14.452 L 23.759 14.119 C 23.332 13.834 23.419 13.183 23.906 13.021 C 24.123 12.949 24.282 12.762 24.319 12.537 L 24.712 10.181 C 24.754 9.932 24.775 9.68 24.775 9.427 L 24.775 8.896 C 24.775 8.137 24.598 7.389 24.258 6.71 L 24.125 6.443 C 23.873 5.94 23.508 5.502 23.058 5.164 C 22.185 4.509 21.063 4.283 20.004 4.547 L 19.613 4.645 L 15.484 5.161 L 12.903 5.677 L 11.802 5.953 C 11.189 6.106 10.539 5.994 10.013 5.643 C 9.548 5.333 9.215 4.861 9.08 4.319 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div className="fig-asset-a123f6758a2f6381" style={{
            position: "absolute",
            left: 7.276,
            top: 0,
            width: 47.485,
            height: 49.549,
          }} />
          <div className="fig-asset-e40e15720d603462" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0.966,0.259,-0.259,0.966,7.495,3.327)",
            transformOrigin: "0 0",
            width: 6.028,
            height: 6.421,
            boxShadow: "1.200px 1.600px 4px 0px rgba(0,0,0,0.25)",
          }} />
          <div className="fig-asset-f6b3fc4dfc8ef7a9" style={{
            position: "absolute",
            left: 44.746,
            top: 29.936,
            width: 10.581,
            height: 10.581,
            boxShadow: "0px 1.600px 3.200px 0px rgba(0,0,0,0.25)",
          }} />
          <div className="fig-asset-e40e15720d603462" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0.966,0.259,-0.259,0.966,3.768,24.040)",
            transformOrigin: "0 0",
            width: 13.667,
            height: 14.558,
            boxShadow: "1.200px 1.600px 4px 0px rgba(0,0,0,0.25)",
          }} />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Gunterz, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "12px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}>{props.text4 ?? "PROMO"}</span>
        <div style={{
            position: "relative",
            width: 20,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <ArrowForward />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 18,
          alignItems: "flex-end",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 13,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              borderRadius: 10,
              backgroundColor: "rgb(36,43,53)",
              boxShadow: "0px 2px 5px 0px rgb(36,43,53)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 20px 8px 20px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 5,
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  lineHeight: 1.2999999523162842,
                  color: "rgb(20,228,15)",
                  flexShrink: 0,
                }}>Sign In</span>
                <div style={{
                    position: "relative",
                    width: 20,
                    height: 20,
                    flexShrink: 0,
                  }}>{props.icon3 ?? <BasicLogOut2 />}</div>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                borderRadius: 10,
                backgroundColor: "rgb(255,41,41)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "10px 20px 10px 20px",
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
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>Register</span>
                <div style={{
                  position: "relative",
                  width: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <svg width={16.667} height={12.500} viewBox="0 0 16.667 12.500" fill="none" style={{
                    position: "absolute",
                    left: 1.667,
                    top: 3.333,
                    width: 16.667,
                    height: 12.5,
                    color: "rgb(255,255,255)",
                  }}>
                    <path d={"M 1.667 12.5 L 0 12.5 C 0 9.739 2.239 7.5 5 7.5 C 7.761 7.5 10 9.739 10 12.5 L 8.333 12.5 C 8.333 10.659 6.841 9.167 5 9.167 C 3.159 9.167 1.667 10.659 1.667 12.5 Z M 14.167 10 L 12.5 10 L 12.5 7.5 L 10 7.5 L 10 5.833 L 12.5 5.833 L 12.5 3.333 L 14.167 3.333 L 14.167 5.833 L 16.667 5.833 L 16.667 7.5 L 14.167 7.5 L 14.167 10 Z M 5 6.667 C 3.159 6.667 1.667 5.174 1.667 3.333 C 1.667 1.492 3.159 0 5 0 C 6.841 0 8.333 1.492 8.333 3.333 C 8.331 5.173 6.84 6.664 5 6.667 Z M 5 1.667 C 4.089 1.668 3.348 2.399 3.335 3.309 C 3.322 4.22 4.042 4.972 4.952 4.999 C 5.862 5.026 6.626 4.318 6.667 3.408 L 6.667 3.742 L 6.667 3.333 C 6.667 2.413 5.92 1.667 5 1.667 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              width: 40,
              borderRadius: 10,
              backgroundColor: "rgb(36,43,53)",
              boxShadow: "0px 2px 5px 0px rgb(36,43,53)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 10px 8px 10px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 32,
                height: 32,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={23.070} height={26.667} viewBox="0 0 23.070 26.667" fill="none" style={{
                  position: "absolute",
                  left: 4.465,
                  top: 2.667,
                  width: 23.07,
                  height: 26.667,
                }}>
                  <path d={"M 23.07 6.667 L 0 6.667 C 2.307 2.685 6.603 0 11.535 0 C 16.467 0 20.764 2.685 23.07 6.667 Z M 11.535 26.667 C 16.467 26.667 20.764 23.981 23.07 20 L 0.001 20 C 2.307 23.981 6.603 26.667 11.535 26.667 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={26.667} height={13.333} viewBox="0 0 26.667 13.333" fill="none" style={{
                  position: "absolute",
                  left: 2.667,
                  top: 9.333,
                  width: 26.667,
                  height: 13.333,
                }}>
                  <path d={"M 26.667 6.667 C 26.667 4.235 26.005 1.963 24.869 0 L 1.798 0 C 0.661 1.963 0 4.235 0 6.667 C 0 9.098 0.661 11.371 1.799 13.333 L 24.869 13.333 C 26.005 11.371 26.667 9.098 26.667 6.667 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1728,
      borderRadius: "0px 0px 5px 5px",
      backgroundColor: "rgb(45,54,63)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 50px 12px 50px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 30,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", height: 20, flexShrink: 0 }}>{props.icon1 ?? <Hamburger />}</div>
        <div style={{
          position: "relative",
          width: 90.892,
          height: 29.241,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 24.607,
            height: 27.897,
            overflow: "hidden",
            boxShadow: "0px 0px 10px 0px rgba(255,41,41,0.7)",
          }}>
            <svg width={16.488} height={27.897} viewBox="0 0 16.488 27.897" fill="none" style={{
              position: "absolute",
              left: 8.119,
              top: 0,
              width: 16.488,
              height: 27.897,
              color: "rgb(255,41,41)",
            }}>
              <path d={"M 10.417 0 L 5.459 12.456 L 5.459 12.447 L 2.66 19.259 L 2.66 19.268 L 2.604 19.389 L 2.614 19.407 L 0 27.897 L 5.06 27.878 L 14.783 4.291 L 16.488 0 L 10.417 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={10.769} height={20.473} viewBox="0 0 10.769 20.473" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 7.424,
              width: 10.769,
              height: 20.473,
              color: "rgb(255,41,41)",
            }}>
              <path d={"M 10.723 11.965 L 10.769 11.854 L 5.681 0 L 0 0 L 7.952 19.945 L 8.119 20.473 L 10.732 11.984 L 10.723 11.965 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <svg width={17.624} height={21.181} viewBox="0 0 17.624 21.181" fill="none" style={{
            position: "absolute",
            left: 38.333,
            top: 7.398,
            width: 17.624,
            height: 21.181,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 0 21.175 C 0 16.662 0 12.167 0 7.635 C 0.065 7.69 0.111 7.718 0.139 7.755 C 1.511 9.321 2.882 10.897 4.254 12.463 C 4.347 12.574 4.375 12.686 4.375 12.825 C 4.375 13.937 4.375 15.049 4.375 16.161 C 4.375 16.263 4.375 16.365 4.375 16.476 C 4.467 16.486 4.523 16.495 4.588 16.495 C 5.468 16.495 6.339 16.504 7.22 16.495 C 7.859 16.486 8.499 16.411 9.12 16.226 C 9.769 16.031 10.315 15.679 10.751 15.16 C 11.668 14.057 12.206 12.788 12.382 11.37 C 12.512 10.322 12.428 9.275 12.15 8.255 C 11.622 6.318 10.343 5.206 8.397 4.826 C 7.831 4.715 7.257 4.687 6.682 4.687 C 4.588 4.687 2.493 4.687 0.399 4.687 C 0.278 4.687 0.158 4.687 0.019 4.687 C 0.019 3.121 0.019 1.592 0.019 0.035 C 0.093 0.025 0.167 0.007 0.232 0.007 C 2.725 0.007 5.209 -0.021 7.702 0.035 C 9.537 0.072 11.307 0.48 12.938 1.388 C 14.931 2.491 16.228 4.168 16.961 6.309 C 17.331 7.384 17.517 8.496 17.591 9.627 C 17.665 10.823 17.619 12.018 17.415 13.205 C 17.164 14.669 16.599 16.004 15.691 17.181 C 15.209 17.811 14.708 18.423 14.106 18.942 C 12.845 20.026 11.372 20.656 9.741 20.943 C 8.897 21.092 8.035 21.166 7.183 21.166 C 4.875 21.175 2.558 21.166 0.25 21.166 C 0.158 21.184 0.093 21.184 0 21.175 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={17.609} height={21.176} viewBox="0 0 17.609 21.176" fill="none" style={{
            position: "absolute",
            left: 56.785,
            top: 7.42,
            width: 17.609,
            height: 21.176,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 0 4.675 C 0 3.099 0 1.579 0 0.031 C 0.074 0.022 0.148 0.004 0.213 0.004 C 2.716 0.004 5.209 -0.015 7.711 0.031 C 9.148 0.059 10.556 0.337 11.9 0.893 C 14.393 1.922 16.052 3.739 16.933 6.269 C 17.313 7.353 17.498 8.475 17.572 9.615 C 17.646 10.699 17.609 11.783 17.452 12.858 C 17.22 14.443 16.664 15.898 15.672 17.177 C 15.255 17.715 14.838 18.252 14.338 18.716 C 13.031 19.93 11.474 20.634 9.722 20.949 C 8.879 21.098 8.017 21.172 7.164 21.172 C 4.866 21.181 2.558 21.172 0.26 21.172 C 0.176 21.172 0.093 21.163 0 21.153 C 0 16.649 0 12.154 0 7.622 C 0.065 7.678 0.12 7.705 0.158 7.752 C 1.52 9.318 2.882 10.875 4.254 12.441 C 4.347 12.553 4.384 12.664 4.375 12.803 C 4.375 13.915 4.375 15.027 4.375 16.139 C 4.375 16.241 4.375 16.343 4.375 16.464 C 4.467 16.473 4.541 16.491 4.606 16.491 C 5.487 16.491 6.358 16.501 7.238 16.482 C 7.878 16.473 8.517 16.399 9.138 16.213 C 9.769 16.019 10.297 15.685 10.723 15.175 C 11.659 14.073 12.197 12.794 12.373 11.366 C 12.503 10.319 12.419 9.272 12.141 8.252 C 11.622 6.315 10.343 5.194 8.388 4.814 C 7.813 4.703 7.229 4.675 6.645 4.675 C 4.56 4.675 2.475 4.675 0.389 4.675 C 0.269 4.675 0.148 4.675 0 4.675 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={17.637} height={21.171} viewBox="0 0 17.637 21.171" fill="none" style={{
            position: "absolute",
            left: 73.255,
            top: 8.042,
            width: 17.637,
            height: 21.171,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 17.637 0.039 C 17.554 0.151 17.498 0.215 17.442 0.28 C 16.275 1.652 15.107 3.024 13.948 4.395 C 13.828 4.534 13.707 4.599 13.513 4.59 C 12.067 4.581 10.63 4.59 9.185 4.59 C 8.87 4.59 8.564 4.627 8.276 4.748 C 7.405 5.1 6.932 6.166 7.257 7.046 C 7.35 7.306 7.507 7.509 7.73 7.667 C 7.989 7.843 8.267 8.028 8.554 8.158 C 9.036 8.381 9.537 8.594 10.037 8.779 C 10.899 9.094 11.743 9.446 12.558 9.845 C 13.031 10.077 13.485 10.345 13.939 10.605 C 14.032 10.651 14.106 10.735 14.18 10.8 C 15.088 11.624 15.635 12.635 15.765 13.867 C 15.895 15.1 15.774 16.296 15.264 17.435 C 14.495 19.169 13.161 20.244 11.372 20.8 C 10.566 21.05 9.741 21.171 8.897 21.171 C 6.071 21.161 3.235 21.171 0.408 21.171 C 0.287 21.171 0.167 21.171 0 21.171 C 0.065 21.078 0.093 21.022 0.13 20.976 C 1.307 19.586 2.484 18.205 3.661 16.815 C 3.772 16.685 3.893 16.648 4.05 16.648 C 5.487 16.648 6.914 16.657 8.35 16.648 C 8.629 16.648 8.916 16.62 9.185 16.536 C 10.111 16.24 10.64 15.193 10.343 14.257 C 10.25 13.979 10.093 13.747 9.852 13.58 C 9.574 13.385 9.287 13.2 8.981 13.061 C 8.249 12.746 7.498 12.468 6.756 12.162 C 5.691 11.717 4.634 11.282 3.661 10.651 C 3.494 10.54 3.336 10.392 3.188 10.243 C 2.298 9.372 1.854 8.297 1.77 7.065 C 1.705 6.091 1.798 5.146 2.132 4.219 C 2.817 2.31 4.171 1.096 6.08 0.456 C 7.007 0.151 7.971 0.021 8.944 0.012 C 11.761 -0.007 14.588 0.002 17.405 0.002 C 17.47 0.03 17.526 0.03 17.637 0.039 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={6.526} height={13.819} viewBox="0 0 6.526 13.819" fill="none" style={{
            position: "absolute",
            left: 14.484,
            top: 8.888,
            width: 6.526,
            height: 13.819,
            color: "rgb(255,41,41)",
          }}>
            <path d={"M 1.438 7.563 C 1.837 4.912 3.171 2.734 5.266 1.066 C 5.636 0.769 6.026 0.5 6.415 0.26 L 6.526 0 C 5.636 0.38 4.774 0.89 3.968 1.538 C 1.874 3.216 0.548 5.385 0.14 8.035 C -0.184 10.158 0.057 12.086 0.826 13.819 L 1.623 11.891 C 1.271 10.556 1.206 9.11 1.438 7.563 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={21.801} height={21.094} viewBox="0 0 21.801 21.094" fill="none" style={{
            position: "absolute",
            left: 15.76,
            top: 7.454,
            width: 21.801,
            height: 21.094,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 21.664 8.867 C 21.266 6.217 19.931 4.039 17.836 2.37 C 15.427 0.443 12.656 -0.271 9.597 0.09 C 8.068 0.276 6.641 0.73 5.315 1.462 C 5.315 1.462 5.158 1.546 5.074 1.601 C 4.852 1.731 4.407 2.065 4.407 2.065 C 4.314 2.129 4.222 2.204 4.129 2.278 C 1.942 4.002 0.561 6.235 0.144 8.969 C -0.051 10.267 -0.051 11.499 0.162 12.658 L 0.144 12.695 C 0.181 12.834 0.209 12.964 0.246 13.103 C 0.273 13.214 0.301 13.325 0.329 13.427 L 0.338 13.409 C 1.367 16.801 3.545 19.192 6.965 20.462 C 8.8 21.147 10.7 21.231 12.628 20.925 C 14.676 20.601 16.53 19.822 18.096 18.46 C 20.997 15.911 22.239 12.704 21.664 8.867 Z M 15.575 13.881 C 14.889 15.188 13.833 16.096 12.368 16.402 C 10.32 16.838 8.466 16.439 6.946 14.919 C 6.112 14.094 5.64 13.056 5.417 11.917 C 5.111 10.359 5.278 8.849 6.01 7.44 C 6.965 5.614 8.503 4.65 10.561 4.493 C 10.719 4.484 10.885 4.474 11.034 4.465 C 13.147 4.484 14.732 5.41 15.668 7.301 C 16.743 9.498 16.715 11.713 15.575 13.881 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={5.097} height={16.099} viewBox="0 0 5.097 16.099" fill="none" style={{
            position: "absolute",
            left: 5.672,
            top: 7.424,
            width: 5.097,
            height: 16.099,
            color: "rgb(255,41,41)",
          }}>
            <path d={"M 3.16 16.099 C 3.133 16.163 5.079 11.891 5.097 11.854 L 0 0 C 0.009 0 3.346 11.261 3.16 16.099 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 38.333,
            top: 15.033,
            width: 4.375,
            height: 8.832,
            overflow: "hidden",
          }}>
            <svg width={4.375} height={8.832} viewBox="0 0 4.375 8.832" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 4.375,
              height: 8.832,
              color: "rgb(223,220,220)",
            }}>
              <path d={"M 4.375 8.832 C 4.375 8.721 4.375 8.629 4.375 8.527 C 4.375 7.414 4.375 6.302 4.375 5.19 C 4.375 5.051 4.356 4.94 4.254 4.829 C 2.882 3.262 1.511 1.687 0.139 0.12 C 0.102 0.083 0.065 0.056 0 0 C 0 0.019 0 0.028 0 0.046 C 0.862 1.279 3.077 4.671 4.375 8.832 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 56.776,
            top: 15.033,
            width: 4.375,
            height: 8.832,
            overflow: "hidden",
          }}>
            <svg width={4.375} height={8.832} viewBox="0 0 4.375 8.832" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 4.375,
              height: 8.832,
              color: "rgb(223,220,220)",
            }}>
              <path d={"M 4.375 8.832 C 4.375 8.721 4.375 8.629 4.375 8.527 C 4.375 7.414 4.375 6.302 4.375 5.19 C 4.375 5.051 4.356 4.94 4.254 4.829 C 2.882 3.262 1.511 1.687 0.139 0.12 C 0.102 0.083 0.065 0.056 0 0 C 0 0.019 0 0.028 0 0.046 C 0.871 1.279 3.086 4.671 4.375 8.832 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 73.264,
            top: 24.718,
            width: 6.043,
            height: 4.523,
            overflow: "hidden",
          }}>
            <svg width={6.043} height={4.523} viewBox="0 0 6.043 4.523" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 6.043,
              height: 4.523,
              color: "rgb(223,220,220)",
            }}>
              <path d={"M 6.043 0 C 5.375 0 4.717 0 4.05 0 C 3.893 0 3.772 0.037 3.661 0.167 C 2.484 1.557 1.307 2.947 0.13 4.328 C 0.093 4.375 0.065 4.43 0 4.523 C 1.196 3.42 3.336 1.613 6.043 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <LiveGames2
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            property1={"default"}
          />
          <div style={{
            position: "relative",
            borderRadius: 10,
            backgroundColor: "rgb(36,43,53)",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "4px 20px 4px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 27,
                height: 27,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 27,
                  height: 27,
                  borderRadius: "50%",
                  backgroundColor: "rgb(36,43,53)",
                }} />
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{
                  position: "absolute",
                  left: 7,
                  top: 7,
                  width: 13,
                  height: 13,
                  color: "rgb(255,255,255)",
                }}>
                  <path d={"M 6.5 0 C 2.916 0 0 2.916 0 6.5 C 0 10.084 2.916 13 6.5 13 C 10.084 13 13 10.084 13 6.5 C 13 2.916 10.084 0 6.5 0 Z M 6.913 2.112 L 8.584 1.213 C 9.509 1.58 10.317 2.18 10.931 2.944 L 10.533 4.782 L 9.258 5.406 L 6.913 3.698 L 6.913 2.112 Z M 4.43 1.208 L 6.101 2.11 L 6.101 3.698 L 3.757 5.406 L 2.476 4.781 L 2.078 2.932 C 2.693 2.169 3.503 1.572 4.43 1.208 Z M 1.812 9.713 C 1.281 8.941 0.936 8.033 0.841 7.052 L 2.216 5.558 L 3.471 6.172 L 4.416 8.855 L 3.617 9.812 L 1.812 9.713 Z M 7.949 11.993 C 7.485 12.116 7.001 12.188 6.5 12.188 C 5.894 12.188 5.31 12.09 4.762 11.914 L 4.251 10.323 L 5.066 9.344 L 7.937 9.344 L 8.738 10.291 L 7.949 11.993 Z M 9.371 9.785 L 8.586 8.855 L 9.544 6.172 L 10.792 5.56 L 12.16 7.053 C 12.078 7.899 11.806 8.688 11.392 9.386 L 9.371 9.785 Z"} fill="currentColor" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>{props.text1 ?? "Sports"}</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 10,
            backgroundColor: "rgb(36,43,53)",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "4px 20px 4px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 27,
                  height: 27,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 27,
                    height: 27,
                    borderRadius: "50%",
                    backgroundColor: "rgb(36,43,53)",
                  }} />
                  <div style={{
                    position: "absolute",
                    left: 7,
                    top: 7,
                    width: 13,
                    height: 13,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 1.444,
                      width: 13,
                      height: 9.389,
                      overflow: "hidden",
                    }}>
                      <svg width={13} height={9.389} viewBox="0 0 13 9.389" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 13,
                        height: 9.389,
                        color: "rgb(255,255,255)",
                      }}>
                        <path d={"M 11.349 1.577 C 11.338 1.547 11.327 1.498 11.313 1.442 C 11.224 1.092 11.14 0.762 10.808 0.64 L 9.233 0.062 C 9.083 0.007 8.921 -0.012 8.761 0.008 C 8.601 0.027 8.448 0.083 8.316 0.172 L 8.219 0.256 C 8.14 0.343 8.033 0.452 7.956 0.522 L 5.054 0.522 C 4.99 0.457 4.904 0.361 4.832 0.275 L 4.719 0.173 C 4.45 -0.009 4.106 -0.05 3.803 0.062 L 2.226 0.64 C 1.896 0.761 1.813 1.088 1.725 1.435 C 1.711 1.487 1.7 1.535 1.704 1.535 C 1.704 1.535 1.705 1.535 1.705 1.535 C 1.168 2.555 -1.385 7.719 1.005 9.243 C 1.347 9.461 1.803 9.427 2.114 9.159 L 3.988 7.54 C 4.153 7.397 4.363 7.318 4.578 7.318 L 8.457 7.318 C 8.672 7.318 8.881 7.397 9.047 7.54 L 10.921 9.159 C 11.097 9.311 11.317 9.389 11.537 9.389 C 11.718 9.389 11.894 9.335 12.041 9.235 C 14.151 7.809 12.25 3.382 11.349 1.577 Z M 8.664 2.086 C 8.963 2.086 9.205 2.32 9.205 2.608 C 9.205 2.896 8.963 3.129 8.664 3.129 C 8.365 3.129 8.123 2.896 8.123 2.608 C 8.123 2.32 8.365 2.086 8.664 2.086 Z M 5.416 4.694 L 4.875 4.694 L 4.875 5.216 C 4.875 5.503 4.633 5.737 4.334 5.737 C 4.034 5.737 3.792 5.503 3.792 5.216 L 3.792 4.694 L 3.251 4.694 C 2.952 4.694 2.71 4.46 2.71 4.173 C 2.71 3.885 2.952 3.651 3.251 3.651 L 3.792 3.651 L 3.792 3.13 C 3.792 2.842 4.034 2.608 4.334 2.608 C 4.633 2.608 4.875 2.842 4.875 3.13 L 4.875 3.651 L 5.416 3.651 C 5.716 3.651 5.957 3.885 5.957 4.173 C 5.957 4.46 5.716 4.694 5.416 4.694 Z M 7.581 4.173 C 7.283 4.173 7.04 3.939 7.04 3.651 C 7.04 3.363 7.283 3.13 7.581 3.13 C 7.88 3.13 8.123 3.363 8.123 3.651 C 8.123 3.939 7.88 4.173 7.581 4.173 Z M 8.664 5.216 C 8.365 5.216 8.123 4.982 8.123 4.694 C 8.123 4.406 8.365 4.173 8.664 4.173 C 8.963 4.173 9.205 4.406 9.205 4.694 C 9.205 4.982 8.963 5.216 8.664 5.216 Z M 9.746 4.173 C 9.448 4.173 9.205 3.939 9.205 3.651 C 9.205 3.363 9.448 3.13 9.746 3.13 C 10.045 3.13 10.288 3.363 10.288 3.651 C 10.288 3.939 10.045 4.173 9.746 4.173 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>{props.text2 ?? "Esports"}</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 10,
            backgroundColor: "rgb(36,43,53)",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "4px 20px 4px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 27,
              height: 27,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 27,
                height: 27,
                borderRadius: "50%",
                backgroundColor: "rgb(36,43,53)",
              }} />
              <svg width={13} height={9} viewBox="0 0 13 9" fill="none" style={{
                position: "absolute",
                left: 7,
                top: 9,
                width: 13,
                height: 9,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1 0 C 0.448 0 0 0.448 0 1 L 0 8 C 0 8.552 0.448 9 1 9 L 12 9 C 12.552 9 13 8.552 13 8 L 13 1 C 13 0.448 12.552 0 12 0 L 1 0 Z M 3.444 3.702 L 2.302 5.963 L 3.115 5.963 L 4.263 3.685 L 4.263 3.054 L 2.103 3.054 L 2.103 3.685 L 3.444 3.685 L 3.444 3.702 Z M 6.683 3.702 L 5.541 5.963 L 6.353 5.963 L 7.501 3.685 L 7.501 3.054 L 5.342 3.054 L 5.342 3.685 L 6.683 3.685 L 6.683 3.702 Z M 9.921 3.702 L 8.779 5.963 L 9.591 5.963 L 10.739 3.685 L 10.739 3.054 L 8.58 3.054 L 8.58 3.685 L 9.921 3.685 L 9.921 3.702 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>{props.text3 ?? "Casino"}</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 10.000001907348633,
        backgroundColor: "rgb(255,41,41)",
        boxShadow: "0px 0px 30px 0px rgb(248,27,27)",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        padding: "10px 20px 10px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 55.793,
          height: 49.549,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={27.871} height={39.742} viewBox="0 0 27.871 39.742" fill="none" style={{
            position: "absolute",
            left: 27.922,
            top: 4.129,
            width: 27.871,
            height: 39.742,
            borderRadius: 80,
            color: "rgba(4,4,4,0.3)",
          }}>
            <path d={"M 9.08 4.319 L 8.335 1.339 C 8.285 1.138 8.181 0.955 8.034 0.808 C 7.588 0.362 6.864 0.362 6.418 0.808 L 3.525 3.701 C 2.905 4.321 2.451 5.086 2.204 5.926 L 1.87 7.061 C 0.739 10.907 2.045 15.055 5.175 17.56 L 8.848 20.498 C 11.411 22.548 12.903 25.653 12.903 28.936 L 12.903 37.249 C 12.903 38.626 14.02 39.742 15.397 39.742 C 16.39 39.742 17.289 39.154 17.684 38.243 L 21.769 28.849 C 22.037 28.232 22.576 27.776 23.228 27.613 C 23.878 27.45 24.416 26.996 24.684 26.382 L 27.632 19.644 C 27.79 19.283 27.871 18.894 27.871 18.5 C 27.871 17.579 27.426 16.715 26.677 16.179 L 24.258 14.452 L 23.759 14.119 C 23.332 13.834 23.419 13.183 23.906 13.021 C 24.123 12.949 24.282 12.762 24.319 12.537 L 24.712 10.181 C 24.754 9.932 24.775 9.68 24.775 9.427 L 24.775 8.896 C 24.775 8.137 24.598 7.389 24.258 6.71 L 24.125 6.443 C 23.873 5.94 23.508 5.502 23.058 5.164 C 22.185 4.509 21.063 4.283 20.004 4.547 L 19.613 4.645 L 15.484 5.161 L 12.903 5.677 L 11.802 5.953 C 11.189 6.106 10.539 5.994 10.013 5.643 C 9.548 5.333 9.215 4.861 9.08 4.319 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div className="fig-asset-a123f6758a2f6381" style={{
            position: "absolute",
            left: 7.276,
            top: 0,
            width: 47.485,
            height: 49.549,
          }} />
          <div className="fig-asset-e40e15720d603462" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0.966,0.259,-0.259,0.966,7.495,3.327)",
            transformOrigin: "0 0",
            width: 6.028,
            height: 6.421,
            boxShadow: "1.200px 1.600px 4px 0px rgba(0,0,0,0.25)",
          }} />
          <div className="fig-asset-f6b3fc4dfc8ef7a9" style={{
            position: "absolute",
            left: 44.746,
            top: 29.936,
            width: 10.581,
            height: 10.581,
            boxShadow: "0px 1.600px 3.200px 0px rgba(0,0,0,0.25)",
          }} />
          <div className="fig-asset-e40e15720d603462" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0.966,0.259,-0.259,0.966,3.768,24.040)",
            transformOrigin: "0 0",
            width: 13.667,
            height: 14.558,
            boxShadow: "1.200px 1.600px 4px 0px rgba(0,0,0,0.25)",
          }} />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Gunterz, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "12px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}>{props.text4 ?? "PROMO"}</span>
        <div style={{
            position: "relative",
            width: 20,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <ArrowForward />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 40,
          alignItems: "flex-end",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 13,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <Component483
              style={{ position: "relative", flexShrink: 0 }}
              property1={"default"}
            />
            <div style={{
              position: "relative",
              width: 36,
              height: 36,
              borderRadius: 10,
              backgroundColor: "rgb(36,43,53)",
              boxShadow: "0px 2px 5px 0px rgb(36,43,53)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 10px 8px 10px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 27,
                height: 27,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={19.465} height={22.500} viewBox="0 0 19.465 22.500" fill="none" style={{
                  position: "absolute",
                  left: 3.768,
                  top: 2.25,
                  width: 19.465,
                  height: 22.5,
                }}>
                  <path d={"M 19.465 5.625 L 0 5.625 C 1.946 2.266 5.572 0 9.733 0 C 13.894 0 17.52 2.266 19.465 5.625 Z M 9.733 22.5 C 13.894 22.5 17.52 20.234 19.465 16.875 L 0.001 16.875 C 1.947 20.234 5.572 22.5 9.733 22.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={22.500} height={11.250} viewBox="0 0 22.500 11.250" fill="none" style={{
                  position: "absolute",
                  left: 2.25,
                  top: 7.875,
                  width: 22.5,
                  height: 11.25,
                }}>
                  <path d={"M 22.5 5.625 C 22.5 3.574 21.942 1.656 20.983 0 L 1.517 0 C 0.558 1.656 0 3.574 0 5.625 C 0 7.676 0.558 9.594 1.518 11.25 L 20.983 11.25 C 21.942 9.594 22.5 7.676 22.5 5.625 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DesktopHeader;
