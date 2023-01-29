import { createTheme } from '@mui/material';

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
import button from "./components/button";

//Forms
import input from "./components/form/input";
import textField from "./components/form/textField";
import inputLabel from "./components/form/inputLabel";
import inputOutlined from "./components/form/inputOutlined";
import formControlLabel from "./components/form/formControlLabel";
import formLabel from "./components/form/formLabel";
import select from "./components/form/select";
import autocomplete from "./components/form/autocomplete";
import switchButton from "./components/form/switchButton";

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
        },
        MuiButton: {...button},
        MuiTextField: { ...textField },
        MuiInput: { ...input },
        MuiFormLabel: { ...formLabel },
        MuiInputLabel: { ...inputLabel },
        MuiOutlinedInput: { ...inputOutlined },
        MuiFormControlLabel: { ...formControlLabel },
        MuiAutocomplete: { ...autocomplete },
        MuiSelect: { ...select },
        MuiSwitch: { ...switchButton },
    }
  });
  
  export default theme;