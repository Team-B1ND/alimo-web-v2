import React, { useState } from "react";
import * as S from "../style";
import { ButtonProps } from "../types";

export const ToggleButton = ({ disabled }: ButtonProps) => {
  const [enable, setEnable] = useState<boolean>(false);
  const handleAble = () => {
    setEnable((prev) => !prev);
  };
  return (
    <S.ToggleButtonWrap disabled={!enable || disabled} onClick={handleAble} role="button">
      <span></span>
    </S.ToggleButtonWrap>
  );
};
