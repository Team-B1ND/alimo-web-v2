import styled, { css, CSSObject } from "styled-components";
import font from "../../../foundation/typography/typography";
import color from "../../../foundation/color/color";

export const ButtonWrap = styled.button<{ buttonSize: string; customStyle?: CSSObject; disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ disabled }) => (!disabled ? color.Color.Primary60 : color.Color.Natural10)};
  border: none;
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
      color: ${({ disabled }) => (!disabled ? color.Color.Natural90 : color.Color.Natural40)};
      font-size: 16px;
      font-weight: ${({ buttonSize }) =>
        buttonSize === "small" ? font.Typograhpy.FontWeight.Medium : font.Typograhpy.FontWeight.Bold};
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

export const TextButtontWrap = styled.div<{ buttonSize: string; disabled: boolean }>`
  padding: 10px 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 20px;
      height: 20px;
    }

    span {
      color: ${({ disabled }) => (!disabled ? color.Color.Primary60 : color.Color.Light.label.alt)};
      font-size: 16px;
    }
  }

  ${({ buttonSize }) => {
    return TextButtonStyle[buttonSize];
  }}
`;

export const ToggleButtonWrap = styled.div<{ disabled: boolean }>`
  width: 50px;
  height: 30px;
  border-radius: 50px;

  display: flex;
  justify-content: ${({ disabled }) => (!disabled ? "flex-end" : "flex-start")};
  align-items: center;
  padding-left: 1.5px;
  padding-right: 1.5px;

  background: ${({ disabled }) => (!disabled ? color.Color.Primary60 : color.Color.Light.label.alt)};

  cursor: pointer;

  span {
    width: 27px;
    height: 27px;

    border: none;
    border-radius: 50%;
    background: ${color.Color.Natural00};
  }
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

const TextButtonStyle = {
  cta: css``,
  large: css``,
  medium: css`
    width: 104px;
    height: 21px;
    font-weight: ${font.Typograhpy.FontWeight.Bold};

    div {
      gap: 4px;
    }
  `,
  small: css`
    width: 102px;
    height: 21px;
    font-weight: ${font.Typograhpy.FontWeight.Medium};

    div {
      gap: 3px;
    }
  `,
};
