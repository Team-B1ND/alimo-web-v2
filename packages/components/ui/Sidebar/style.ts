import styled from "styled-components";
import color from "../../../foundation/color/color";
import font from "../../../foundation/typography/typography";

export const DefaultSidebarWrap = styled.div`
  width: 150px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ItemWrap = styled.div`
  width: 11%;
  height: 12%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const Item = styled.div<{ $isclicked: boolean }>`
  display: flex;
  padding: 8px 32px 8px 16px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;

  img {
    width: 28px;
    height: 26px;
  }

  span {
    color: ${({ $isclicked }) => ($isclicked ? color.Color.Primary60 : color.Color.Natural40)};

    font-size: ${font.Typograhpy.Body};
    font-weight: ${font.Typograhpy.FontWeight.Bold};
  }
`;
