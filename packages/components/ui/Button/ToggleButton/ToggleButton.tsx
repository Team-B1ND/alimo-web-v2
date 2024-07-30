import React from "react";
import * as S from "../style";
import { ButtonProps } from "../types";

export const ToggleButton = ({ disabled, onclick }: ButtonProps) => {
  return (
    <S.ToggleButtonWrap disabled={disabled} onClick={onclick}>
      <span></span>
    </S.ToggleButtonWrap>
  );
};
