import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";

const Moon = ({ size = 24, svgStyle, pathStyle, ...props }: IconProps) => {
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
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C12.709 3 13.3693 3.0816 14 3.2362C14.5315 3.36649 14.4163 4.22433 13.9188 4.45237C12.1964 5.24191 11 6.98124 11 9C11 11.7614 13.2386 14 16 14C17.7051 14 19.2108 13.1465 20.1133 11.8435C20.3529 11.4975 21 11.5792 21 12Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default Moon;