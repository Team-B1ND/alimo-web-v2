import React from "react";
import * as S from "./style";
import { ButtonProps } from "./types";

const Button = ({ buttonSize, customStyle, children, leftIcon, rightIcon, disabled, onclick }: ButtonProps) => {
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

export default Button;
