import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";

const Avatar = ({ size = 36, svgStyle, pathStyle, ...props }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={svgStyle!}
      {...props}>
      <g clip-path="url(#clip0_1_713)">
        <circle cx="18" cy="18" r="18" fill="#2E2E32" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.5019 13.4688C14.5019 12.4742 14.897 11.5204 15.6003 10.8171C16.3036 10.1138 17.2574 9.8125 18.2519 9.8125C19.2465 9.8125 20.2003 10.1138 20.9036 10.8171C21.6069 11.5204 22.0019 12.4742 22.0019 13.4688C22.0019 14.4633 21.6069 15.4171 20.9036 16.1204C20.2003 16.8237 19.2465 17.2188 18.2519 17.2188C17.2574 17.2188 16.3036 16.8237 15.6003 16.1204C14.897 15.4171 14.5019 14.4633 14.5019 13.4688ZM14.5019 18.4844C12.6269 18.7187 12.0665 19.2126 11.1874 20.0917C10.3083 20.9708 9.81445 22.163 9.81445 23.4062C9.81445 24.1522 9.75575 25.2226 10.2832 25.75C10.8106 26.2774 11.881 26.2188 12.6269 26.2188H23.8769C24.6229 26.2188 25.6932 26.2774 26.2207 25.75C26.7481 25.2226 26.6894 24.1522 26.6894 23.4062C26.6894 22.163 26.1956 20.9708 25.3165 20.0917C24.4374 19.2126 23.8769 18.7187 22.0019 18.4844C20.1269 18.25 19.7278 18.25 18.2519 18.25C16.7761 18.25 16.3769 18.25 14.5019 18.4844Z"
          fill="#666674"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_713">
          <path
            d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </StyledSvg>
  );
};

export default Avatar;