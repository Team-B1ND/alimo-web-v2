import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

const ArrowUp = ({ size = 24, svgStyle, pathStyle, ...props }: IconProps) => {
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
        d="M4.29289 11.1893C3.90237 11.5799 3.90237 12.213 4.29289 12.6036C4.68342 12.9941 5.31658 12.9941 5.70711 12.6036L11.1161 7.19454L11.1161 19C11.1161 19.5 11.5 20 12 20C12.5212 20 12.8839 19.5 12.8839 19V7.19454L18.2929 12.6036C18.6834 12.9941 19.3166 12.9941 19.7071 12.6036C20.0976 12.213 20.0976 11.5799 19.7071 11.1893L12.8839 4.36612C12.3957 3.87796 11.6043 3.87796 11.1161 4.36612L4.29289 11.1893Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default ArrowUp;
