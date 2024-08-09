import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";
import { BLANK_PATH_ITEMS } from "./constant";

const Blank = ({ size = 24, svgStyle, pathStyle, ...props }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={svgStyle!}
      {...props}>
      {BLANK_PATH_ITEMS.map((item, idx) => (
        <StyledPath key={idx} d={item} fill="#F5F6F8" $pathStyle={pathStyle!} />
      ))}
    </StyledSvg>
  );
};

export default Blank;
