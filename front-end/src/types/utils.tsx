import { ReactNode } from "react";

export interface Utils {
  text: string;
  onClick: () => void;
  icon: ReactNode;
}

export interface ScrollProp {
  scrollMove: string;
}
