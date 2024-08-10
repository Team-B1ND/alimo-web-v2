import styled from "styled-components";
import { AlimoColor } from "../../../foundation/src/token/colorToken";
import { AlimoTypography } from "../../../styles/src/AlimoTypography";
import { AlimoThemelight } from "../../../styles/src/AlimoTheme/AlimoTheme";

export const FileContainer = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${AlimoThemelight.backgroundSub};
  padding: 0 12px;
`;

export const FileWrap = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FileImg = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background: ${AlimoColor.Primary60};
`;

export const FileInfo = styled.div`
  width: calc(100% - 68px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FileTitle = styled.span`
  color: ${AlimoThemelight.labelNormal};
  ${AlimoTypography.Label.Medium};
`;

export const FileSize = styled.span`
  color: ${AlimoThemelight.labelEm};
  ${AlimoTypography.Caption.Medium};
`;

export const DownLoadBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
