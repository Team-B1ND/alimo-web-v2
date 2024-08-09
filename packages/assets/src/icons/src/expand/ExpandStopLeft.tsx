import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

const ExpandStopLeft = ({
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
        d="M13.1893 19.7071C13.5798 20.0976 14.213 20.0976 14.6035 19.7071C14.9941 19.3166 14.9941 18.6834 14.6035 18.2929L9.19453 12.8839L21 12.8839C21.5 12.8839 22 12.5 22 12C22 11.4788 21.5 11.1161 21 11.1161L9.19453 11.1161L14.6035 5.70711C14.9941 5.31658 14.9941 4.68342 14.6035 4.29289C14.213 3.90237 13.5798 3.90237 13.1893 4.29289L6.3661 11.1161C5.87794 11.6043 5.87795 12.3957 6.3661 12.8839L13.1893 19.7071Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
      <StyledPath
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 4.95652C3.55228 4.95652 4 5.4237 4 6V18C4 18.5763 3.55228 19.0435 3 19.0435C2.44772 19.0435 2 18.5763 2 18L2 6C2 5.4237 2.44772 4.95652 3 4.95652Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default ExpandStopLeft;