import { CSSObject } from "styled-components";

export interface ButtonProps {
  buttonSize: ButtonSize;
  customStyle?: CSSObject;
  children: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled: boolean;
  onclick: () => void;
}

export type ButtonSize = "cta" | "large" | "medium" | "small";