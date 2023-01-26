import { createTheme } from "@mui/material/styles";

//base
import colors from "./base/colors";
import breakpoints from "./base/breakpoints";
import typography from "./base/typography";
import globals from "./base/globals";

//Function
import boxShadow from "./functions/boxShadow";
import hexToRgb from "./functions/hexToRgb";
import linearGradient from "./functions/linearGradient";
import pxToRem from "./functions/pxToRem";
import rgba from "./functions/rgba";

//components
import container from "./components/container";

// A custom theme for this app
const theme = createTheme({
    breakpoints: { ...breakpoints },
    palette: { ...colors },
    typography: { ...typography },

    components: {
        MuiCssBaseline: {
          styleOverrides: {
            ...globals,
            ...container,
          },
        }
    }
  });
  
  export default theme;