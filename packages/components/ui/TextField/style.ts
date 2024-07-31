import styled, { CSSObject, css } from "styled-components";
import { Shape } from "./types";
import { AlimoTypography } from "../../../styles/src/AlimoTypography";
import { AlimoColor } from "../../../foundation/src/token/colorToken";
import { AlimoThemelight } from "../../../styles/src/AlimoTheme/AlimoTheme";

export const TextFieldWrap = styled.label<{ shape: Shape; isdisabled: boolean; customStyle?: CSSObject }>`
  width: 320px;
  height: 48px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${({ isdisabled }) => (isdisabled ? AlimoThemelight.labelBack : AlimoThemelight.labelAlt)};
  border-radius: ${({ shape }) => (shape === "default" ? "12px" : "999px")};
  justify-content: center;

  input {
    width: 300px;
    height: 32px;
    padding: 8px 8px 8px 12px;

    ${AlimoTypography.Body.Medium}
    color: ${({ isdisabled }) => (isdisabled ? AlimoThemelight.labelBack : AlimoThemelight.labelNormal)};

    border: none;

    background: transparent;
  }

  input:focus {
    outline: none;
    caret-color: ${AlimoThemelight.primary};
  }

  &:focus-within {
    border-color: ${AlimoThemelight.primary};
  }

  input::placeholder {
    color: ${AlimoThemelight.labelEm};
  }

  ${({ customStyle }) => customStyle}
`;

export const TraillingIcon = styled.div`
  width: 24px;
  height: 24px;

  padding: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CodeTextFieldWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: max-content;
  gap: 10px;
`;

export const CodeTextField = styled.div<{ isdisabled: boolean; customStyle?: CSSObject }>`
  width: 42px;
  height: 47px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ isdisabled }) => (isdisabled ? AlimoThemelight.labelBack : AlimoThemelight.labelAlt)};
  border-radius: 12px;

  input {
    width: 10px;
    height: 21px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background: transparent;

    ${AlimoTypography.Body.Medium}
    color: ${AlimoThemelight.labelNormal};
  }

  input:focus {
    outline: none;
    caret-color: ${AlimoThemelight.primary};
  }

  &:focus-within {
    border-color: ${AlimoThemelight.primary};
  }

  input::placeholder {
    color: ${AlimoThemelight.labelEm};
  }

  ${({ customStyle }) => customStyle}
`;
