import * as React from 'react';
export interface LiveGames2Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "hover" | "active" | "variant4";
  /** Text content; defaults to "Odds Scanner". */
  text1?: string;
}
export declare const LiveGames2: React.FC<LiveGames2Props>;
export default LiveGames2;
