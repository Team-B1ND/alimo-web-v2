import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";

const Ping = ({ size = 24, svgStyle, pathStyle, ...props }: IconProps) => {
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
        d="M12.001 2C7.78099 2 4.36 5.42099 4.36 9.641C4.36 10.6072 4.53933 11.5315 4.86652 12.3825C5.56532 14.1999 6.83798 15.7178 8.11312 17.2387C9.06747 18.3769 10.0232 19.5169 10.7408 20.7852L11.1538 21.5152C11.5229 22.1676 12.4654 22.16 12.8239 21.5017L12.8969 21.3676C13.6542 19.9769 14.6957 18.7321 15.7354 17.4894C17.1315 15.8208 18.5243 14.156 19.2215 12.1472C19.494 11.3621 19.642 10.5188 19.642 9.641C19.642 5.42099 16.221 2 12.001 2ZM12.001 13.4615C14.111 13.4615 15.8215 11.751 15.8215 9.641C15.8215 7.53099 14.111 5.8205 12.001 5.8205C9.89099 5.8205 8.1805 7.53099 8.1805 9.641C8.1805 11.751 9.89099 13.4615 12.001 13.4615Z"
        fill="#F5F6F8"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};

export default Ping;
