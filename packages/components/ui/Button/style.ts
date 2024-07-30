import styled, { css, CSSObject } from "styled-components";
import { AlimoTypography } from "../../../styles/src/AlimoTypography";
import { AlimoColor } from "../../../foundation/src/token/colorToken";
import { AlimoThemelight } from "../../../styles/src/AlimoTheme/AlimoTheme";

export const ButtonWrap = styled.button<{ buttonSize: string; customStyle?: CSSObject; disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ disabled }) => (!disabled ? AlimoColor.Primary60 : AlimoColor.Netural10)};
  border: none;
  cursor: pointer;
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 21px;

    img {
      width: 20px;
      height: 20px;
    }

    span {
      color: ${({ disabled }) => (!disabled ? AlimoColor.Netural90 : AlimoColor.Netural40)};
      ${({ buttonSize }) => (buttonSize === "small" ? AlimoTypography.Body.Medium : AlimoTypography.Body.Bold)};
    }

    ${({ buttonSize }) => {
      return ButtonTextStyle[buttonSize];
    }}
  }

  ${({ buttonSize }) => {
    return ButtonSizeStyle[buttonSize];
  }}

  ${({ customStyle }) => customStyle}
`;

export const ToggleButtonWrap = styled.div<{ disabled: boolean }>`
  width: 50px;
  height: 30px;
  border-radius: 50px;

  display: flex;
  transition: 2s justify-content;
  justify-content: ${({ disabled }) => (!disabled ? "flex-end" : "flex-start")};
  align-items: center;
  padding-left: 1.5px;
  padding-right: 1.5px;

  background: ${({ disabled }) => (!disabled ? AlimoColor.Primary60 : AlimoThemelight.labelAlt)};

  cursor: pointer;

  span {
    width: 27px;
    height: 27px;

    border: none;
    border-radius: 50%;
    background: ${AlimoColor.Netural00};
  }
`;

export const CheckBoxButton = styled.img`
  width: 28px;
  height: 28px;

  cursor: pointer;
`;

export const TextButtonWrap = styled.div<{ customStyle?: CSSObject; disabled: boolean }>`
  width: 102px;
  height: 21px;

  padding: 8px 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 3px;

  cursor: pointer;

  color: ${({ disabled }) => (disabled ? AlimoThemelight.labelAlt : AlimoThemelight.neturalPrimary)};

  span {
    ${AlimoTypography.Body.Medium}
  }

  img {
    width: 20px;
    height: 20px;
  }

  ${({ customStyle }) => customStyle}
`;

const ButtonSizeStyle = {
  cta: css`
    width: 320px;
    height: 56px;
    border-radius: 12px;
  `,

  large: css`
    width: 146px;
    height: 45px;
    border-radius: 10px;
  `,

  medium: css`
    width: 128px;
    height: 41px;
    border-radius: 8px;
  `,

  small: css`
    width: 122px;
    height: 37px;
    border-radius: 6px;
  `,
};

const ButtonTextStyle = {
  cta: css`
    width: 108px;
    gap: 6px;
  `,

  large: css`
    width: 106px;
    gap: 5px;
  `,

  medium: css`
    width: 104px;
    gap: 4px;
  `,

  small: css`
    width: 102px;
    gap: 3px;
  `,
};
