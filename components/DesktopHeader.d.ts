import * as React from 'react';
export interface DesktopHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Sports". */
  text1?: string;
  /** Text content; defaults to "Esports". */
  text2?: string;
  /** Text content; defaults to "Casino". */
  text3?: string;
  /** Text content; defaults to "PROMO". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const DesktopHeader: React.FC<DesktopHeaderProps>;
export default DesktopHeader;
