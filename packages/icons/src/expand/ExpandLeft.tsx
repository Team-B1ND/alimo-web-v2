import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

const ExpandLeft = ({
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.6036 19.7071C16.213 20.0976 15.5799 20.0976 15.1893 19.7071L8.36612 12.8839C7.87796 12.3957 7.87796 11.6043 8.36612 11.1161L15.1893 4.29289C15.5799 3.90237 16.213 3.90237 16.6036 4.29289C16.9941 4.68342 16.9941 5.31658 16.6036 5.70711L10.3107 12L16.6036 18.2929C16.9941 18.6834 16.9941 19.3166 16.6036 19.7071Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default ExpandLeft;
