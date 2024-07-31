import { RuleSet, css } from "styled-components";
import { ButtonSize } from "../../components/ui/Button/types";
interface ButtonStyleRule {
  cta: RuleSet<typeof ButtonSize>;
  large: RuleSet<typeof ButtonSize>;
  medium: RuleSet<typeof ButtonSize>;
  small: RuleSet<typeof ButtonSize>;
}

export const ButtonSizeStyle: ButtonStyleRule = {
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

export const ButtonTextStyle = {
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
