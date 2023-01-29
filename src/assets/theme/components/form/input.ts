
import colors from "../../base/colors";
import typography from "../../base/typography";
import borders from "../../base/borders";

const { info, primary, inputBorderColor, dark } = colors;
const { size } = typography;
const { borderWidth } = borders;

const input = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${inputBorderColor}`,
      },

      "&:before": {
        borderColor: inputBorderColor,
      },

      "&:after": {
        borderColor: primary.main,
      },
    },
  },
};

export default input;
