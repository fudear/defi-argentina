import { createTheme } from "@mui/material";
import { COLORS } from "./color.style";

const bodyFonts = {
  fontFamily: ["'Rubik'", "sans-serif"].join(","),
};

const CUSTOM_THEME = createTheme({
  palette: {
    primary: {
      main: COLORS.MAIN,
    },
    secondary: {
      main: COLORS.SECONDARY,
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
        },
      },
    },
  },
});

export default CUSTOM_THEME;
