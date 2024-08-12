import styled from "styled-components";
import { AlimoThemelight } from "../../../styles/src/AlimoTheme/AlimoTheme";
import { AlimoTypography } from "../../../styles/src/AlimoTypography";
import { SidebarSizeAlign, SidebarSizeStyle } from "../../../styles/Sidebar/SidebarStyle";

export const SidebarWrap = styled.div<{ screen: string }>`
  ${({ screen }) => {
    return SidebarSizeStyle[screen];
  }}
  height: calc(100vh - 32px);

  padding: 16px 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid ${AlimoThemelight.labelBack};
  border-right: 1px solid ${AlimoThemelight.labelBack};
  border-radius: 0px 16px 0px 0px;
`;

export const ItemWrap = styled.div<{ screen: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  ${({ screen }) => {
    return SidebarSizeAlign[screen];
  }}
`;

export const Item = styled.div<{ isclicked: boolean }>`
  width: 86px;
  height: 26px;
  padding: 8px 32px 8px 16px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  gap: 16px;
  margin-right: 2%;

  span {
    ${AlimoTypography.Body.Bold}
    color: ${({ isclicked }) => (isclicked ? AlimoThemelight.primary : AlimoThemelight.labelAlt)}
  }

  cursor: pointer;
`;

export const SettingWrap = styled.div`
  width: 86px;
  height: 26px;

  padding: 8px 32px 8px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  gap: 16px;
  margin-right: 2%;

  span {
    color: ${AlimoThemelight.labelAlt};
    ${AlimoTypography.Label.Medium}
  }
`;
