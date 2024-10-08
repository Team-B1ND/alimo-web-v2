import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

const CheckCircleFill = ({
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
      <StyledPath
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12ZM18.0872 9.14308C18.3872 8.85742 18.3988 8.38268 18.1131 8.08274C17.8274 7.78279 17.3527 7.77121 17.0528 8.05687L10.4293 14.3649L6.94656 11.0562C6.64625 10.7709 6.17153 10.7831 5.88624 11.0834C5.60096 11.3837 5.61313 11.8584 5.91343 12.1437L9.91343 15.9437C10.2032 16.219 10.6578 16.2187 10.9472 15.9431L18.0872 9.14308Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default CheckCircleFill;
