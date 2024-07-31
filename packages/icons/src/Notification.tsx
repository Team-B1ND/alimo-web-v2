import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";

const Notification = ({
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
        d="M12 3C11.0726 3 10.2771 3.66129 10.1076 4.57306L10 5.15217L9.20848 5.221C7.33695 5.38374 5.83332 6.8316 5.6 8.69565V14.8103C5.6 14.8623 5.5798 14.9122 5.54367 14.9495L4.60439 15.9194C4.21675 16.3197 4 16.855 4 17.4123C4 18.3012 4.72058 19.0217 5.60947 19.0217H9.56245C9.58319 19.0217 9.6 19.0385 9.6 19.0593V19.1C9.6 20.4255 10.6745 21.5 12 21.5C13.3255 21.5 14.4 20.4255 14.4 19.1V19.0593C14.4 19.0385 14.4168 19.0217 14.4376 19.0217H19.0539C19.5764 19.0217 20 18.5981 20 18.0756C20 17.0929 19.6178 16.1488 18.9341 15.4429L18.4563 14.9495C18.4202 14.9122 18.4 14.8623 18.4 14.8103V8.69565C18.1667 6.8316 16.6631 5.38374 14.7915 5.221L14 5.15217L13.8924 4.57306C13.7229 3.66129 12.9274 3 12 3Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default Notification;