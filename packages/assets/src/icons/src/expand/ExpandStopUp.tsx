import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

const ExpandStopUp = ({
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
        d="M4.29289 13.1893C3.90236 13.5799 3.90236 14.213 4.29289 14.6036C4.68341 14.9941 5.31657 14.9941 5.7071 14.6036L11.1161 9.19454L11.1161 21C11.1161 21.5 11.5 22 12 22C12.5212 22 12.8839 21.5 12.8839 21L12.8839 9.19454L18.2929 14.6036C18.6834 14.9941 19.3166 14.9941 19.7071 14.6036C20.0976 14.213 20.0976 13.5799 19.7071 13.1893L12.8839 6.36612C12.3957 5.87796 11.6043 5.87796 11.1161 6.36612L4.29289 13.1893Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
      <StyledPath
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.0435 3.00002C19.0435 3.5523 18.5763 4.00002 18 4.00002L5.99999 4.00002C5.4237 4.00002 4.95651 3.5523 4.95651 3.00002C4.95651 2.44773 5.4237 2.00002 5.99999 2.00002L18 2.00002C18.5763 2.00002 19.0435 2.44773 19.0435 3.00002Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default ExpandStopUp;
