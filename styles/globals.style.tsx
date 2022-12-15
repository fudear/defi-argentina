import { css, GlobalStyles as Global } from "@mui/material";
import { FunctionComponent } from "react";

const GlobalStyles: FunctionComponent = () => {
  return (
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }

        body {
          transition: all 0.3s linear;
          transition: padding 0s;
        }

        .MuiBackdrop-root {
          backdrop-filter: blur(8px);
          background-color: rgb(0, 0, 0, 0.1) !important;
        }
      `}
    />
  );
};

export default GlobalStyles;
