import { createTheme } from "@mui/material/styles";
import { Colors } from "../src/components/themes/colors";

// Create a theme instance.
const theme = createTheme({
  "@global": {
    "&::-webkit-scrollbar": {
      width: "0.1px !important",
      height: "0.1px !important",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: `${Colors.primary} !important`,
      borderRadius: "30px !important",
      boxShadow: `inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),inset -2px -2px 2px rgba(0, 0, 0, 0.25) !important`,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: `${Colors.stroke} !important`,
    },
  },
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    error: {
      main: Colors.buttonError,
    },
    success: {
      main: Colors.buttonSuccess,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          "&::-webkit-scrollbar": {
            width: "0.1px !important",
            height: "0.1px !important",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `${Colors.primary} !important`,
            borderRadius: "30px !important",
            boxShadow: `inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),inset -2px -2px 2px rgba(0, 0, 0, 0.25) !important`,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: `${Colors.stroke} !important`,
          },
        },
      },
    },
  },
});

export default theme;
