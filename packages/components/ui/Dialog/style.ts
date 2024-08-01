import styled, { css, CSSObject } from "styled-components";
import { AlimoTypography } from "../../../styles/src/AlimoTypography";
import { AlimoThemelight } from "../../../styles/src/AlimoTheme/AlimoTheme";
import { DialogType } from "./types";

export const DialogWrap = styled.div<{ type: DialogType }>`
  width: 293px;
  padding: 18px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px;
  gap: 18px;

  border: none;
  border-radius: 16px;

  background: ${AlimoThemelight.backgroundNormal};

  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.04);

  ${({ type }) => {
    return DialogHeightStyle[type];
  }}
`;

export const TextWrap = styled.div`
  width: 285px;
  height: 55px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    color: ${AlimoThemelight.labelNormal};
    ${AlimoTypography.Headline1.Bold}
    width: fit-content;
    height: fit-content;
  }

  span {
    color: ${AlimoThemelight.labelEm};
    ${AlimoTypography.Body.Medium}
    width: fit-content;
    height: fit-content;
  }
`;

export const ButtonWrap = styled.div`
  width: 293px;
  height: 56px;

  display: flex;
  align-items: center;
  gap: 8px;
`;

const DialogHeightStyle = {
  choosing: css`
    height: 137px;
  `,

  dismiss: css`
    height: 122px;
  `,

  content: css`
    height: 203px;
  `,
};
