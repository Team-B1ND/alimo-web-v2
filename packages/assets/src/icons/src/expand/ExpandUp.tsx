import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

const ExpandUp = ({ size = 24, svgStyle, pathStyle, ...props }: IconProps) => {
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
        d="M4.29289 16.6036C3.90236 16.213 3.90236 15.5799 4.29289 15.1893L11.1161 8.36612C11.6043 7.87796 12.3957 7.87796 12.8839 8.36612L19.7071 15.1893C20.0976 15.5799 20.0976 16.213 19.7071 16.6036C19.3166 16.9941 18.6834 16.9941 18.2929 16.6036L12 10.3107L5.7071 16.6036C5.31657 16.9941 4.68341 16.9941 4.29289 16.6036Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default ExpandUp;
