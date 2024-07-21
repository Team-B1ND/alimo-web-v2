import React, { ReactNode } from "react";
import GlobalStyles from "./gloal";

interface Props {
  children: ReactNode;
}

export const AlimoThemeProvider = ({ children }: Props) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};
