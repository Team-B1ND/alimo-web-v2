import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";

const Logout = ({ size = 24, svgStyle, pathStyle, ...props }: IconProps) => {
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
        d="M4 3.75C4 3.33579 4.33579 3 4.75 3H14.25C14.6642 3 15 3.33579 15 3.75V3.88636C15 4.30058 14.6642 4.63636 14.25 4.63636H6.28488C5.87067 4.63636 5.53488 4.97215 5.53488 5.38636V18.6136C5.53488 19.0278 5.87067 19.3636 6.28488 19.3636H14.25C14.6642 19.3636 15 19.6994 15 20.1136V20.25C15 20.6642 14.6642 21 14.25 21H4.75C4.33579 21 4 20.6642 4 20.25V3.75Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
      <StyledPath
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.7574 6.69672L19.5303 11.4697C19.8232 11.7626 19.8232 12.2375 19.5303 12.5304L14.7574 17.3033C14.4645 17.5962 13.9896 17.5962 13.6967 17.3033C13.4038 17.0104 13.4038 16.5356 13.6967 16.2427L17.1893 12.75H9.75C9.33579 12.75 9 12.4142 9 12C9 11.5858 9.33579 11.25 9.75 11.25H17.1893L13.6967 7.75738C13.4038 7.46449 13.4038 6.98961 13.6967 6.69672C13.9896 6.40383 14.4645 6.40383 14.7574 6.69672Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default Logout;