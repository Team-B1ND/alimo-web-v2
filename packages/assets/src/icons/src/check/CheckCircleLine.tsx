import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

const CheckCircleLine = ({
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
        d="M11.9951 3.495C7.3007 3.495 3.49512 7.30057 3.49512 11.995C3.49512 16.6894 7.3007 20.495 11.9951 20.495C16.6895 20.495 20.4951 16.6894 20.4951 11.995C20.4951 7.30057 16.6895 3.495 11.9951 3.495ZM1.99512 11.995C1.99512 6.47215 6.47227 1.995 11.9951 1.995C17.518 1.995 21.9951 6.47215 21.9951 11.995C21.9951 17.5178 17.518 21.995 11.9951 21.995C6.47227 21.995 1.99512 17.5178 1.99512 11.995Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
      <StyledPath
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.1082 8.07776C18.3939 8.37771 18.3823 8.85244 18.0824 9.13811L10.9424 15.9381C10.653 16.2137 10.1983 16.214 9.90856 15.9388L5.90856 12.1388C5.60825 11.8535 5.59608 11.3787 5.88137 11.0784C6.16666 10.7781 6.64138 10.766 6.94168 11.0513L10.4245 14.3599L17.0479 8.0519C17.3478 7.76623 17.8226 7.77781 18.1082 8.07776Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default CheckCircleLine;
