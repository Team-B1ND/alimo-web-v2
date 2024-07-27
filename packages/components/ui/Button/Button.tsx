import React from "react";
import * as S from "./style";
import { ButtonProps } from "./types";

export const Button = ({ buttonSize, customStyle, children, leftIcon, rightIcon, disabled, onclick }: ButtonProps) => {
  return (
    <S.ButtonWrap buttonSize={buttonSize} customStyle={customStyle} onClick={onclick} disabled={disabled}>
      <div>
        {leftIcon}
        <span>{children}</span>
        {rightIcon}
      </div>
    </S.ButtonWrap>
  );
};

export const TextButton = ({ buttonSize, disabled, leftIcon, rightIcon, onclick, children }: ButtonProps) => {
  return (
    <S.TextButtontWrap buttonSize={buttonSize} disabled={disabled} onClick={onclick}>
      <div>
        {leftIcon}
        <span>{children}</span>
        {rightIcon}
      </div>
    </S.TextButtontWrap>
  );
};

export const ToggleButton = ({ disabled }: ButtonProps) => {
  return (
    <S.ToggleButtonWrap disabled={disabled} onClick={(prev) => !prev}>
      <span></span>
    </S.ToggleButtonWrap>
  );
};
