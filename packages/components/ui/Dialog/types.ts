import { CSSObject } from "styled-components";

export interface DialogProps {
  title: string;
  content: string;
  type: DialogType;
  confirmContent: string;
  denyContent: string;
  customStyle?: CSSObject;
  placeholder?: string;
  value: string;
  trailingIcon?: React.ReactNode;
  onchange?: () => void;
  onclick?: () => void;
  onConfirm: () => void;
  onDeny: () => void;
}

export type DialogType = "choosing" | "dismiss" | "content";
