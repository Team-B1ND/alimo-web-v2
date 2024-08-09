import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";

const App = ({size = 520, svgStyle, pathStyle, ...props}: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={svgStyle!}
      {...props}>
      <g filter="url(#filter0_d_20_332)">
        <rect
          width="512"
          height="512"
          transform="translate(4)"
          fill="url(#paint0_linear_20_332)"
        />
        <g filter="url(#filter1_d_20_332)">
          <path
            d="M225.314 327.521L211.518 403L268.923 355.184L225.314 327.521Z"
            fill="url(#paint1_linear_20_332)"
          />
          <path
            d="M438 108L89.1752 235.045C82.0236 237.54 80.777 247.145 87.0536 251.392L163.808 303.322L438 108Z"
            fill="white"
          />
          <path
            d="M339.383 398.324C344.318 401.346 350.777 399.107 352.796 393.676L438 108L225.314 327.521L268.923 355.184L339.383 398.324Z"
            fill="white"
          />
          <path
            d="M438 108L163.808 303.322L211.518 403L225.314 327.521L438 108Z"
            fill="url(#paint2_linear_20_332)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_20_332"
          x="0"
          y="0"
          width="520"
          height="520"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_20_332"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_20_332"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_20_332"
          x="65"
          y="94"
          width="391"
          height="331"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="9" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_20_332"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_20_332"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_20_332"
          x1="446.5"
          y1="87.5"
          x2="83.5"
          y2="416"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFD600" />
          <stop offset="1" stop-color="#FFBB00" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_20_332"
          x1="250.606"
          y1="385.715"
          x2="208.498"
          y2="314.356"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#C7C7C7" />
          <stop offset="1" stop-color="#9B9B9B" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_20_332"
          x1="175.369"
          y1="284.085"
          x2="197.043"
          y2="419.803"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#EBEBEB" />
          <stop offset="1" stop-color="#DDDDDD" />
        </linearGradient>
      </defs>
    </StyledSvg>
  );
};

export default App;
