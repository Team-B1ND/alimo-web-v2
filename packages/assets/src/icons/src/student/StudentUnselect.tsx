import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";
import { STUDENT_UNSELECT_PATH_ITEMS } from "./constant";

const StudentUnselect = ({
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
      $svgStyle={svgStyle}
      {...props}>
      {STUDENT_UNSELECT_PATH_ITEMS.map((item, idx) => (
        <StyledPath
          key={idx}
          d={item.d}
          fill={item.fill}
          $pathStyle={pathStyle!}
        />
      ))}
    </StyledSvg>
  );
};

export default StudentUnselect;
