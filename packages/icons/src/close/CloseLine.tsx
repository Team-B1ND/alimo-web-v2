import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

const CloseLine = ({ size = 24, svgStyle, pathStyle, ...props }: IconProps) => {
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
        d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
      <StyledPath
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default CloseLine;