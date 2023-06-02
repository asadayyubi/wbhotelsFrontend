import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const MaterialUi = (props) => {
  const { children } = props;
  // Override the default size of material ui
  const theme = createTheme({
    typography: {
      htmlFontSize: "inherit",
      fontFamily: "inherit",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          html: {
            fontSize: "inherit",
          },
        },
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialUi;
