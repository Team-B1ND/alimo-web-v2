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
      <S.CheckBoxButton src={enable ? Checked : Disabled} onClick={handleEnable} />
    </>
  );
};
