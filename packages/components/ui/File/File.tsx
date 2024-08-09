import React from "react";
import { css } from "styled-components";
import * as S from "./style";
import { FileProps } from "./types";
import { AlimoColor } from "../../../foundation/src/token/colorToken";
import { AlimoThemelight } from "../../../styles/src/AlimoTheme/AlimoTheme";
import FileImg from "../../../icons/src/File";
import DownLoadImg from "../../../icons/src/expand/ExpandStopDown";

export const File = ({ size, title, width, onclick }: FileProps) => {
  return (
    <S.FileContainer width={width}>
      <S.FileWrap>
        <S.FileImg>
          <FileImg
            pathStyle={css`
              fill: ${AlimoColor.Netural00};
            `}
          />
        </S.FileImg>
        <S.FileInfo>
          <S.FileTitle>{title}</S.FileTitle>
          <S.FileSize>{size}</S.FileSize>
        </S.FileInfo>
        <S.DownLoadBtn onClick={onclick}>
          <DownLoadImg
            pathStyle={css`
              fill: ${AlimoThemelight.labelEm};
            `}
          />
        </S.DownLoadBtn>
      </S.FileWrap>
    </S.FileContainer>
  );
};
