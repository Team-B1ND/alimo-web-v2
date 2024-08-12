import { RuleSet, css } from "styled-components";

interface SidebarSizeRule {
  desktop: RuleSet;
  tablet: RuleSet;
}

export const SidebarSizeStyle: SidebarSizeRule = {
  desktop: css`
    width: 134px;
  `,
  tablet: css`
    width: 60px;
  `,
};

export const SidebarSizeAlign: SidebarSizeRule = {
  desktop: css`
    flex-direction: column;
    align-items: flex-start;
  `,
  tablet: css`
    flex-direction: column;
    align-items: center;
    justify-items: center;
  `,
};
