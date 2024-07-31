import { CSSObject } from "styled-components";

export interface ButtonProps {
  buttonSize?: ButtonSize;
  customStyle?: CSSObject;
  children: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled: boolean;
  selected: boolean;
  backgroundSub?: string;
  onclick: () => void;
}

export enum ButtonSize {
  cta,
  large,
  medium,
  small
}
