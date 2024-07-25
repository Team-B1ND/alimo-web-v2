import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";
import { LOGO_PATH_ITEMS } from "./constant";

const Logo = ({
  width = 618,
  height = 353,
  svgStyle,
  pathStyle,
  ...props
}: IconProps) => {
  return (
    <StyledSvg
      width={width}
      height={height}
      viewBox="0 0 618 353"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={svgStyle!}
      {...props}>
      <rect width="618" height="353" rx="10" fill="#202022" />
      {LOGO_PATH_ITEMS.map((item, idx) => (
        <StyledPath
          key={idx}
          d={item.d}
          fill={item.fill}
          $pathStyle={pathStyle!}></StyledPath>
      ))}
    </StyledSvg>
  );
};

export default Logo;
