import React from "react";
import { TextFieldProps } from "./types";
import * as S from "./style";

export const TextField = ({
  placeholder,
  value,
  type,
  shape,
  trailingIcon,
  isDisabled,
  customStyle,
  onchange,
  onclick,
}: TextFieldProps) => {
  return (
    <S.TextFieldWrap shape={shape} isdisabled={isDisabled!} customStyle={customStyle} htmlFor="textfield">
      <input type={type} placeholder={placeholder} value={value} onChange={onchange} id="textfield" />
      <S.TraillingIcon onClick={onclick}>{trailingIcon}</S.TraillingIcon>
    </S.TextFieldWrap>
  );
};
