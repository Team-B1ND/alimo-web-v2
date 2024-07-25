import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";

const Manage = ({ size = 24, svgStyle, pathStyle, ...props }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={svgStyle!}
      {...props}>
      <StyledPath
        d="M4.66666 7.33334C4.66666 5.86058 5.86057 4.66667 7.33333 4.66667H12.6667V12.6667H4.66666V7.33334Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
      <StyledPath
        d="M15.3333 4.66667H20.6667C22.1394 4.66667 23.3333 5.86058 23.3333 7.33334V12.6667H15.3333V4.66667Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
      <StyledPath
        d="M4.66666 15.3333H12.6667V23.3333H7.33333C5.86057 23.3333 4.66666 22.1394 4.66666 20.6667V15.3333Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
      <StyledPath
        d="M15.3333 19.3333C15.3333 17.1242 17.1242 15.3333 19.3333 15.3333C21.5425 15.3333 23.3333 17.1242 23.3333 19.3333C23.3333 21.5425 21.5425 23.3333 19.3333 23.3333C17.1242 23.3333 15.3333 21.5425 15.3333 19.3333Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default Manage;
