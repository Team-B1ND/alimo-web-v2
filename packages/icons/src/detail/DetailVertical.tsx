import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

const DetailVertical = ({
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
        d="M13.5 6.45001C13.5 7.27844 12.8284 7.95001 12 7.95001C11.1716 7.95001 10.5 7.27844 10.5 6.45001C10.5 5.62159 11.1716 4.95001 12 4.95001C12.8284 4.95001 13.5 5.62159 13.5 6.45001Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
      <StyledPath
        d="M13.5 12.45C13.5 13.2784 12.8284 13.95 12 13.95C11.1716 13.95 10.5 13.2784 10.5 12.45C10.5 11.6216 11.1716 10.95 12 10.95C12.8284 10.95 13.5 11.6216 13.5 12.45Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
      <StyledPath
        d="M13.5 18.45C13.5 19.2784 12.8284 19.95 12 19.95C11.1716 19.95 10.5 19.2784 10.5 18.45C10.5 17.6216 11.1716 16.95 12 16.95C12.8284 16.95 13.5 17.6216 13.5 18.45Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default DetailVertical;
