import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

const ExpandStopRight = ({
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
        d="M10.8107 4.2929C10.4201 3.90238 9.78697 3.90238 9.39645 4.2929C9.00592 4.68343 9.00592 5.31659 9.39645 5.70711L14.8055 11.1161L3 11.1161C2.5 11.1161 2 11.5 2 12C2 12.5212 2.5 12.8839 3 12.8839L14.8055 12.8839L9.39645 18.2929C9.00592 18.6834 9.00592 19.3166 9.39645 19.7071C9.78697 20.0976 10.4201 20.0976 10.8107 19.7071L17.6339 12.8839C18.122 12.3957 18.122 11.6043 17.6339 11.1161L10.8107 4.2929Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
      <StyledPath
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 19.0435C20.4477 19.0435 20 18.5763 20 18V6.00001C20 5.42371 20.4477 4.95653 21 4.95653C21.5523 4.95653 22 5.42371 22 6.00001V18C22 18.5763 21.5523 19.0435 21 19.0435Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default ExpandStopRight;
