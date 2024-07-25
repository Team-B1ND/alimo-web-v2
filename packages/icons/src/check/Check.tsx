import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

const Check = ({ size = 24, svgStyle, pathStyle, ...props }: IconProps) => {
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
        d="M20.687 8.02534C21.0904 7.57792 21.1059 6.83436 20.7217 6.36456C20.3375 5.89477 19.699 5.87663 19.2956 6.32406L10.3876 16.2041L5.70345 11.0218C5.29956 10.575 4.66109 10.5941 4.2774 11.0644C3.8937 11.5348 3.91007 12.2783 4.31396 12.7252L9.69371 18.677C10.0834 19.1081 10.6949 19.1076 11.0841 18.6759L20.687 8.02534Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default Check;
