import React, { useState } from "react";
import * as S from "../style";
import { ButtonProps } from "../types";
import Checked from "../../../asset/Button/checked.svg";
import Disabled from "../../../asset/Button/disabled.svg";

export const CheckBoxButton = ({ onclick }: ButtonProps) => {
  const [enable, setEnable] = useState<boolean>(false);
  const handleEnable = () => {
    setEnable((prev) => !prev);
    onclick();
  };
  return (
    <>
      {enable ? (
        <S.CheckBoxButton src={Disabled} onClick={handleEnable} />
      ) : (
        <S.CheckBoxButton src={Checked} onClick={handleEnable} />
      )}
    </>
  );
};
