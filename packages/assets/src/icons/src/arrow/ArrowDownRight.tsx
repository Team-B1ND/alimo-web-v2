import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

const ArrowDownRight = ({ size = 18, svgStyle, pathStyle, ...props }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={svgStyle!}
      {...props}>
      <StyledPath
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 8.74228e-08C1.55228 1.35705e-07 2 0.447715 2 1L2 4C2 6.76142 4.23858 9 7 9L14.5858 9L9.92893 4.34315C9.53841 3.95262 9.53841 3.31946 9.92893 2.92893C10.3195 2.53841 10.9526 2.53841 11.3431 2.92893L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L11.3431 17.0711C10.9526 17.4616 10.3195 17.4616 9.92893 17.0711C9.53841 16.6805 9.53841 16.0474 9.92893 15.6569L14.5858 11L7 11C3.13401 11 -6.87667e-07 7.86599 -3.49691e-07 4L-8.74228e-08 1C-3.91405e-08 0.447715 0.447715 3.91405e-08 1 8.74228e-08Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default ArrowDownRight;
