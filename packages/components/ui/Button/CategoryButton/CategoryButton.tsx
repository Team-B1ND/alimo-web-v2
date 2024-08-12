import React from "react";
import * as S from "../style";
import { ButtonProps } from "../types";

export const CategoryButton = ({ children, disabled, backgroundSub }: ButtonProps) => {
  return (
    <S.CategoryButtonWrap disabled={disabled} backgroundSub={backgroundSub!}>
      <span>{children}</span>
    </S.CategoryButtonWrap>
  );
};
