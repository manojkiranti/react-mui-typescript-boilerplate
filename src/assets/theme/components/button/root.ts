
import typography from "../../base/typography";
import borders from "../../base/borders";


import pxToRem from "../../functions/pxToRem";

const { fontWeightBold, size } = typography;
const { borderRadius } = borders;

const root = {
  fontWeight: 'bold',
  // textTransform: 'capitalize',
  paddingLeft: 16,
  paddingRight: 16,

  "&:disabled": {
    pointerEvent: "none",
    opacity: 0.65,
  },

  "& .material-icons": {
    fontSize: pxToRem(15),
    marginTop: pxToRem(-2),
  },
};

export default root;
