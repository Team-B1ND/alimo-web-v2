import React from "react";
import * as S from "./style";
import { SidebarProps } from "./types";

const Sidebar = ({ isClicked }: SidebarProps) => {
  return (
    <S.DefaultSidebarWrap>
      <S.ItemWrap>
        <S.Item $isclicked={isClicked === "홈" ? true : false}>
          <img src="" alt="" />
          <span>홈</span>
        </S.Item>
        <S.Item $isclicked={isClicked === "프로필" ? true : false}>
          <img src="" alt="" />
          <span>프로필</span>
        </S.Item>
      </S.ItemWrap>
    </S.DefaultSidebarWrap>
  );
};

export default Sidebar;
