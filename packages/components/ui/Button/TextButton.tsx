import React from "react";
import * as S from "./style";
import { ButtonProps } from "./types";

export const TextButton = ({ customStyle, disabled, leftIcon, rightIcon, children, onclick }: ButtonProps) => {
  return (
    <S.TextButtonWrap customStyle={customStyle} disabled={disabled} onClick={onclick}>
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </S.TextButtonWrap>
  );
};
