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
    <S.TextFieldWrap shape={shape} isdisabled={isDisabled!} style={customStyle} htmlFor="textfield">
      <input type={type} placeholder={placeholder} value={value} onChange={onchange} id="textfield" />
      <S.TraillingIcon onClick={onclick}>{trailingIcon}</S.TraillingIcon>
    </S.TextFieldWrap>
  );
};

export const CodeTextField = ({ value, count, isDisabled, customStyle, onchange }: TextFieldProps) => {
  const handleSectionChange = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length === 1) {
      const nextInput = document.querySelectorAll("input")[idx + 1];
      if (nextInput) {
        nextInput.focus();
      }
    } else if (value.length < 0) {
      const prevInput = document.querySelectorAll("input")[idx - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace") {
      const currentInput = document.querySelectorAll("input")[index];
      const prevInput = document.querySelectorAll("input")[index - 1];

      if (currentInput.value.length === 0 && prevInput) {
        prevInput.focus();
      }
    } else {
      handleSectionChange(index, event);
    }
  };

  const COUNT_OF_CODE = Array(count!)
    .fill("")
    .map((_, idx) => (
      <S.CodeTextField isdisabled={isDisabled!} style={customStyle}>
        <input
          type="text"
          value={value}
          onChange={(e) => handleSectionChange(idx, e)}
          onKeyDown={(e) => handleKeyDown(idx, e)}
          minLength={1}
          maxLength={1}
          placeholder="B"
        />
      </S.CodeTextField>
    ));
  return <S.CodeTextFieldWrap>{COUNT_OF_CODE}</S.CodeTextFieldWrap>;
};
