import styled, { css, CSSObject } from "styled-components";
import color from "../../../foundation/color/color";
import font from "../../../foundation/typography/typography";
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

  background: ${color.Color.Light.background.normal};

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
    color: ${color.Color.Light.label.normal};
    font-size: ${font.Typograhpy.HeadLine1};
    font-weight: ${font.Typograhpy.FontWeight.Bold};
    width: fit-content;
    height: fit-content;
  }

  span {
    color: ${color.Color.Light.label.em};
    font-size: ${font.Typograhpy.Body};
    font-weight: ${font.Typograhpy.FontWeight.Medium};
    width: fit-content;
    height: fit-content;
  }
`;

export const ButtonWrap = styled.div<{ customStyle?: CSSObject }>`
  width: 293px;
  height: 56px;

  display: flex;
  align-items: center;
  gap: 8px;

  ${({ customStyle }) => customStyle}
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
