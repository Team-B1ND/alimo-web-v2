import { CSSObject } from "styled-components";

export interface TextFieldProps {
  placeholder: string;
  value: string;
  type: string;
  trailingIcon: React.ReactNode;
  shape: Shape;
  isDisabled?: boolean;
  customStyle?: CSSObject;
  count?: number;
  onchange: () => void;
  onclick: () => void;
}

export type Shape = "default" | "rounded" | "code";
