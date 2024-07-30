import React from "react";
import * as S from "./style";
import { ButtonProps } from "./types";
import Checked from "../../asset/Button/checked.svg";
import Disabled from "../../asset/Button/disabled.svg";

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
