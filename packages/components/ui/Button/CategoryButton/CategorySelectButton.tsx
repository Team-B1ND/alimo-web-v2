import React, { useState } from "react";
import * as S from "../style";
import { ButtonProps } from "../types";

export const CategorySelectButton = ({ children }: ButtonProps) => {
  const [select, setSelect] = useState<boolean>(false);
  const handleSelect = () => {
    setSelect((prev) => !prev);
  };
  return (
    <S.CategorySelectButtonWrap selected={select} onClick={handleSelect}>
      <span>{children}</span>
    </S.CategorySelectButtonWrap>
  );
};
