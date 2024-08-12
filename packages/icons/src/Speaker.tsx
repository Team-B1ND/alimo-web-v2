import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";
import { SPEAKER_PATH_ITEMS } from "./constant";

const Speaker = ({ size = 24, svgStyle, pathStyle, ...props }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={svgStyle!}
      {...props}>
      {SPEAKER_PATH_ITEMS.map((item, idx) => (
        <StyledPath
          key={idx}
          fill-rule={item.fillRule}
          clip-rule={item.clipRule}
          d={item.d}
          fill="#F5F6F8"
          $pathStyle={pathStyle!}
        />
      ))}
    </StyledSvg>
  );
};

export default Speaker;
