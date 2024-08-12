import styled, { css, CSSObject, RuleSet } from "styled-components";
import { AlimoTypography } from "../../../styles/src/AlimoTypography";
import { AlimoColor } from "../../../foundation/src/token/colorToken";
import { AlimoThemelight } from "../../../styles/src/AlimoTheme/AlimoTheme";
import { ButtonSizeStyle, ButtonTextStyle } from "../../../styles/Button/ButtonStyle";

export const ButtonWrap = styled.button<{ buttonSize: string; disabled: boolean }>`
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

  &:active {
    scale: 0.97;
  }

  transition: scale 0.4s;

  ${({ buttonSize }) => {
    return ButtonSizeStyle[buttonSize];
  }}
`;

export const ToggleButtonWrap = styled.div<{ disabled: boolean }>`
  width: 50px;
  height: 30px;
  border-radius: 50px;
  position: relative;

  display: flex;
  /* justify-content: ${({ disabled }) => (!disabled ? "flex-end" : "flex-start")}; */
  align-items: center;
  padding-left: 1.5px;
  padding-right: 1.5px;

  background: ${({ disabled }) => (!disabled ? AlimoColor.Primary60 : AlimoThemelight.labelAlt)};

  cursor: pointer;

  span {
    position: absolute;
    width: 27px;
    height: 27px;
    border: none;
    border-radius: 50%;
    background: ${AlimoColor.Netural00};

    transition: left 0.3s ease-out; /* 애니메이션 추가 */
    left: ${({ disabled }) => (disabled ? "3%" : "45%")};
  }
`;

export const CheckBoxButton = styled.img`
  width: 28px;
  height: 28px;

  cursor: pointer;
`;

export const TextButtonWrap = styled.div<{ disabled: boolean }>`
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
`;