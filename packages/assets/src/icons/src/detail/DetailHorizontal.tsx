import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

const DetailHorizontal = ({
  size = 24,
  svgStyle,
  pathStyle,
  ...props
}: IconProps) => {
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
        d="M17.55 13.5C16.7216 13.5 16.05 12.8284 16.05 12C16.05 11.1716 16.7216 10.5 17.55 10.5C18.3784 10.5 19.05 11.1716 19.05 12C19.05 12.8284 18.3784 13.5 17.55 13.5Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
      <StyledPath
        d="M11.55 13.5C10.7216 13.5 10.05 12.8284 10.05 12C10.05 11.1716 10.7216 10.5 11.55 10.5C12.3784 10.5 13.05 11.1716 13.05 12C13.05 12.8284 12.3784 13.5 11.55 13.5Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
      <StyledPath
        d="M5.55 13.5C4.72158 13.5 4.05 12.8284 4.05 12C4.05 11.1716 4.72158 10.5 5.55 10.5C6.37843 10.5 7.05 11.1716 7.05 12C7.05 12.8284 6.37843 13.5 5.55 13.5Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default DetailHorizontal;
