import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

const AddFill = ({ size = 24, svgStyle, pathStyle, ...props }: IconProps) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364ZM7.05025 11C6.49797 11 6.05025 11.4477 6.05025 12C6.05025 12.5523 6.49797 13 7.05025 13H11L11 16.9497C11 17.502 11.4477 17.9497 12 17.9497C12.5523 17.9497 13 17.502 13 16.9497V13H16.9497C17.502 13 17.9497 12.5523 17.9497 12C17.9497 11.4477 17.502 11 16.9497 11H13L13 7.05025C13 6.49797 12.5523 6.05025 12 6.05025C11.4477 6.05025 11 6.49797 11 7.05025L11 11H7.05025Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default AddFill;
