"use client";

import { ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import CustomShadows from "./shadows";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const themeOptions: any = {
    palette: palette.light,
    typography,
    breakpoints,
    CustomShadows: CustomShadows,
    spacing: 10,
    shape: { borderRadius: 4 },
  };

  const theme = createTheme(themeOptions);
  return (
    <MUIThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          "&::-webkit-scrollbar": {
            width: 0,
            height: 6,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
          },
        }}
      />
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
