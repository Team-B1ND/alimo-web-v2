import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";

const Chat = ({ size = 24, svgStyle, pathStyle, ...props }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={svgStyle!}
      {...props}>
      <g filter="url(#filter0_b_1_331)">
        <StyledPath
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.5 3C7.25329 3 3 7.25329 3 12.5C3 17.7467 7.25329 22 12.5 22H19.1246C20.2288 22 20.8639 20.7444 20.2096 19.8549L19.5837 19.0041C21.3905 17.291 22 15.1313 22 12.5C22 7.25329 17.7467 3 12.5 3ZM7.5 11C7.5 10.4477 7.94421 10 8.49216 10H15.7846C16.3325 10 16.7767 10.4477 16.7767 11C16.7767 11.5523 16.3325 12 15.7846 12H8.49217C7.94421 12 7.5 11.5523 7.5 11ZM9.77415 14C9.22619 14 8.78198 14.4477 8.78198 15C8.78198 15.5523 9.22619 16 9.77415 16H15.7846C16.3325 16 16.7767 15.5523 16.7767 15C16.7767 14.4477 16.3325 14 15.7846 14H9.77415Z"
          fill="#F5F6F8"
          $pathStyle={pathStyle!}
        />
      </g>
      <defs>
        <filter
          id="filter0_b_1_331"
          x="-1"
          y="-1"
          width="27"
          height="27"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1_331"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_331"
            result="shape"
          />
        </filter>
      </defs>
    </StyledSvg>
  );
};

export default Chat;
