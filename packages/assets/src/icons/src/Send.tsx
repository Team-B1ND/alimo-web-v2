import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";

const Send = ({ size = 18, svgStyle, pathStyle, ...props }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={svgStyle!}
      {...props}>
      <StyledPath
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.429213 17.1759C0.337881 17.5869 0.764342 17.9198 1.14091 17.7316L17.3069 9.64856C17.6754 9.46429 17.6754 8.93839 17.3069 8.75413L1.14091 0.671134C0.764345 0.482849 0.337882 0.815821 0.429214 1.22681L1.82569 7.01097C1.91764 7.42471 2.26041 7.73556 2.68115 7.78673L9.87736 9.10066C9.88252 9.1016 9.88815 9.10214 9.8934 9.10228C10.4979 9.11786 10.0018 9.28642 9.88512 9.30061L2.68115 10.616C2.26041 10.6671 1.91764 10.978 1.82569 11.3917L0.429213 17.1759Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default Send;
