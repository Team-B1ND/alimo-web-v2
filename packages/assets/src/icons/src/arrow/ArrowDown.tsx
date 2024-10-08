import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

const ArrowDown = ({ size = 24, svgStyle, pathStyle, ...props }: IconProps) => {
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
        d="M19.7071 12.8107C20.0976 12.4201 20.0976 11.787 19.7071 11.3964C19.3166 11.0059 18.6834 11.0059 18.2929 11.3964L12.8839 16.8055L12.8839 5C12.8839 4.5 12.5 4 12 4C11.4788 4 11.1161 4.5 11.1161 5V16.8055L5.70711 11.3964C5.31658 11.0059 4.68342 11.0059 4.29289 11.3964C3.90237 11.787 3.90237 12.4201 4.29289 12.8107L11.1161 19.6339C11.6043 20.122 12.3957 20.122 12.8839 19.6339L19.7071 12.8107Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default ArrowDown;
