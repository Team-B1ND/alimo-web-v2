import React, { ReactNode } from "react";
import {  AlimoTheme,ThemeProvider } from "styled-components";

export interface AlimoThemeProviderProps {
  children: ReactNode;
  theme: AlimoTheme;
}

export const AlimoThemeProvider = ({
  children,
  theme,
}: AlimoThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};