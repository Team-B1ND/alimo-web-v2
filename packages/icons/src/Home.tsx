import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";

const Home = ({ size = 24, svgStyle, pathStyle, ...props }: IconProps) => {
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
        d="M9.99998 19.0002V16.0002C9.99998 15.4479 10.4477 15.0002 11 15.0002H13C13.5523 15.0002 14 15.4479 14 16.0002V19.0002C14 19.5502 14.45 20.0002 15 20.0002H18C18.55 20.0002 19 19.5502 19 19.0002V12.0002H20.7C21.16 12.0002 21.38 11.4302 21.03 11.1302L12.67 3.60021C12.29 3.26021 11.71 3.26021 11.33 3.60021L2.96998 11.1302C2.62998 11.4302 2.83998 12.0002 3.29998 12.0002H4.99998V19.0002C4.99998 19.5502 5.44998 20.0002 5.99998 20.0002H8.99998C9.54998 20.0002 9.99998 19.5502 9.99998 19.0002Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default Home;
