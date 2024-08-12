import React from "react";
import * as S from "./style";
import Home from "../../../assets/src/icons/src/Home";
import { AlimoThemelight } from "../../../styles/src/AlimoTheme/AlimoTheme";
import Manage from "../../../assets/src/icons/src/Manage";
import Setting from "../../../assets/src/icons/src/Setting";
import Person from "../../../assets/src/icons/src/Person";
import Write from "../../../assets/src/icons/src/Write";
import { SidebarProps } from "./types";
import { css } from "styled-components";
import { useSidebar } from "../../../hooks/Sidebar/useSidebar";
import { Route } from "react-router-dom";
import { useState } from "react";
import { Button } from "../Button/Button";

const Sidebar = ({ screen, isAdmin }: SidebarProps) => {
  // const { isClicked, handleItemClick } = useSidebar();
  const [isClicked, setIsClicked] = useState<string>("홈");
  const handleItemClick = (item: string) => {
    setIsClicked(item);
  };
  return (
    // <Route>
    <S.SidebarWrap screen={screen}>
      <S.ItemWrap screen={screen}>
        <S.Item isclicked={isClicked === "홈" ? true : false} onClick={() => handleItemClick("홈")}>
          <Home
            size={28}
            pathStyle={css`
              fill: ${isClicked === "홈" ? AlimoThemelight.primary : AlimoThemelight.labelAlt};
            `}
          />
          {screen === "desktop" && <span>홈</span>}
        </S.Item>
        <S.Item isclicked={isClicked === "프로필" ? true : false} onClick={() => handleItemClick("프로필")}>
          <Person
            size={28}
            pathStyle={css`
              fill: ${isClicked === "프로필" ? AlimoThemelight.primary : AlimoThemelight.labelAlt};
            `}
          />
          {screen === "desktop" && <span>프로필</span>}
        </S.Item>
        {isAdmin && (
          <>
            <S.Item isclicked={isClicked === "관리" ? true : false} onClick={() => handleItemClick("관리")}>
              <Manage
                size={28}
                pathStyle={css`
                  fill: ${isClicked === "관리" ? AlimoThemelight.primary : AlimoThemelight.labelAlt};
                `}
              />
              {screen === "desktop" && <span>관리</span>}
            </S.Item>
            <Button
              buttonSize="medium"
              leftIcon={
                <Write
                  pathStyle={css`
                    fill: ${AlimoThemelight.neutral90};
                  `}
                />
              }
              onclick={() => handleItemClick("글쓰기")}
              disabled={false}
              customStyle={{
                width: "90px",
                borderRadius: "12px",
                display: "flex",
                alignSelf: "center",
                marginRight: "2%",
              }}
            >
              글쓰기
            </Button>
          </>
        )}
      </S.ItemWrap>
      <S.SettingWrap>
        <Setting size={28} />
        {screen === "desktop" && <span>설정</span>}
      </S.SettingWrap>
    </S.SidebarWrap>
    // </Route>
  );
};

export default Sidebar;
