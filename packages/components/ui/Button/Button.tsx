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

export const ToggleButton = ({ disabled, onclick }: ButtonProps) => {
  return (
    <S.ToggleButtonWrap disabled={disabled} onClick={() => !disabled}>
      <span></span>
    </S.ToggleButtonWrap>
  );
};
