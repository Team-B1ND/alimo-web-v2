import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";
import { TEACHER_PATH_ITEMS } from "./constant";

const Teacher = ({
  width = 540,
  height = 480,
  svgStyle,
  pathStyle,
  ...props
}: IconProps) => {
  return (
    <StyledSvg
      width={width}
      height={height}
      viewBox="0 0 540 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={svgStyle!}
      {...props}>
      <g clip-path="url(#clip0_40_247)">
        {TEACHER_PATH_ITEMS.map((item, idx) => (
          <StyledPath
            key={idx}
            d={item.d}
            fill={item.fill}
            opacity={item.opacity}
            $pathStyle={pathStyle!}
          />
        ))}
      </g>
      <defs>
        <clipPath id="clip0_40_247">
          <rect width="540" height="480" fill="white" />
        </clipPath>
      </defs>
    </StyledSvg>
  );
};

export default Teacher;
