import styled, { CSSObject, css } from "styled-components";
import { Shape } from "./types";
import color from "../../../foundation/color/color";
import font from "../../../foundation/typography/typography";

export const TextFieldWrap = styled.label<{ shape: Shape; isdisabled: boolean; customStyle?: CSSObject }>`
  width: 320px;
  height: 48px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${({ isdisabled }) => (isdisabled ? color.Color.Light.label.back : color.Color.Light.label.alt)};
  border-radius: ${({ shape }) => (shape === "default" ? "12px" : "999px")};
  justify-content: center;

  input {
    width: 300px;
    height: 32px;
    padding: 8px 8px 8px 12px;

    font-size: ${font.Typograhpy.Body};
    font-weight: ${font.Typograhpy.FontWeight.Medium};
    color: ${({ isdisabled }) => (isdisabled ? color.Color.Light.label.normal : color.Color.Light.label.normal)};

    border: none;

    background: transparent;
  }

  input:focus {
    outline: none;
    caret-color: ${color.Color.Primary60};
  }

  &:focus-within {
    border-color: ${color.Color.Primary60};
  }

  input::placeholder {
    color: ${color.Color.Light.label.em};
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

  border: 1px solid ${({ isdisabled }) => (isdisabled ? color.Color.Light.label.back : color.Color.Light.label.alt)};
  border-radius: 12px;

  input {
    width: 10px;
    height: 21px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background: transparent;

    font-size: ${font.Typograhpy.Body};
    font-weight: ${font.Typograhpy.FontWeight.Medium};
    color: ${color.Color.Light.label.normal};
  }

  input:focus {
    outline: none;
    caret-color: ${color.Color.Primary60};
  }

  &:focus-within {
    border-color: ${color.Color.Primary60};
  }

  input::placeholder {
    color: ${color.Color.Light.label.em};
  }

  ${({ customStyle }) => customStyle}
`;
