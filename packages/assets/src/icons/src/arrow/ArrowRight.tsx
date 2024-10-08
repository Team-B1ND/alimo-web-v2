import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

const ArrowRight = ({ size = 24, svgStyle, pathStyle, ...props }: IconProps) => {
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
        d="M12.8107 4.29289C12.4201 3.90237 11.787 3.90237 11.3964 4.29289C11.0059 4.68342 11.0059 5.31658 11.3964 5.70711L16.8055 11.1161L5 11.1161C4.5 11.1161 4 11.5 4 12C4 12.5212 4.5 12.8839 5 12.8839H16.8055L11.3964 18.2929C11.0059 18.6834 11.0059 19.3166 11.3964 19.7071C11.787 20.0976 12.4201 20.0976 12.8107 19.7071L19.6339 12.8839C20.122 12.3957 20.122 11.6043 19.6339 11.1161L12.8107 4.29289Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default ArrowRight;
