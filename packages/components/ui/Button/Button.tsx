import React from "react";
import * as S from "./style";
import { ButtonProps } from "./types";
import Checked from "../../asset/Button/checked.svg";
import Disabled from "../../asset/Button/disabled.svg";

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
    <S.ToggleButtonWrap disabled={disabled} onClick={onclick}>
      <span></span>
    </S.ToggleButtonWrap>
  );
};

export const CheckBoxButton = ({ disabled, onclick }: ButtonProps) => {
  return (
    <>
      {disabled ? (
        <S.CheckBoxButton src={Disabled} onClick={onclick} />
      ) : (
        <S.CheckBoxButton src={Checked} onClick={onclick} />
      )}
    </>
  );
};

export const TextButton = ({ customStyle, disabled, leftIcon, rightIcon, children, onclick }: ButtonProps) => {
  return (
    <S.TextButtonWrap customStyle={customStyle} disabled={disabled} onClick={onclick}>
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </S.TextButtonWrap>
  );
};
