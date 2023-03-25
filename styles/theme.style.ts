import { createTheme } from "@mui/material";
import { COLORS } from "./color.style";

const bodyFonts = {
  fontFamily: ["'Rubik'", "sans-serif"].join(","),
};

const CUSTOM_THEME = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: COLORS.MAIN,
    },
    secondary: {
      main: COLORS.SECONDARY,
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    ...bodyFonts,
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "normal",
          fontSize: "1rem",
        },
      },
    },
  },
});

export default CUSTOM_THEME;
