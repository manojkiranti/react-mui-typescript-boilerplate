
import colors from "./colors";


import pxToRem from "../functions/pxToRem";

const { dark } = colors;

const baseProperties = {
  fontFamily: "'Roboto', sans-serif",
  fontWeightLighter: 100,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeXXS: pxToRem(10.4),
  fontSizeXS: pxToRem(12),
  fontSizeSM: pxToRem(14),
  fontSizeMD: pxToRem(16),
  fontSizeLG: pxToRem(18),
  fontSizeXL: pxToRem(20),
  fontSize2XL: pxToRem(24),
  fontSize3XL: pxToRem(30),
};

const baseHeadingProperties = {
  fontFamily: "'Roboto', sans-serif",
  color: dark.main,
  fontWeight: baseProperties.fontWeightMedium,
};

const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightRegular,
  lineHeight: 1.2,
  fontSize: baseProperties.fontSizeSM
};

const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLighter: baseProperties.fontWeightLighter,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,

  h1: {
    fontSize: pxToRem(36),
    lineHeight: 1.5,
    ...baseHeadingProperties,
  },

  h2: {
    fontSize: pxToRem(30),
    lineHeight: 1.5,
    ...baseHeadingProperties,
  },

  h3: {
    fontSize: pxToRem(24),
    lineHeight: 1.5,
    ...baseHeadingProperties,
  },

  h4: {
    fontSize: pxToRem(18),
    lineHeight: 1.5,
    ...baseHeadingProperties,
  },

  h5: {
    fontSize: pxToRem(15),
    lineHeight: 1.5,
    ...baseHeadingProperties,
  },

  h6: {
    fontSize: pxToRem(14.4),
    lineHeight: 1.5,
    ...baseHeadingProperties,
  },

  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.625,
  },

  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.6,
  },

  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.5,
  },

  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.5,
  },

  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.5,
    textTransform: "uppercase" as const
  },

  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.25,
  },

  overline: {
    fontFamily: baseProperties.fontFamily,
  },

  d1: {
    ...baseDisplayProperties,
    fontSize: pxToRem(80),
  },

  d2: {
    
    ...baseDisplayProperties,
    fontSize: pxToRem(72),
  },

  d3: {
    
    ...baseDisplayProperties,
    fontSize: pxToRem(64),
  },

  d4: {
    
    ...baseDisplayProperties,
    fontSize: pxToRem(56),
  },

  d5: {
    
    ...baseDisplayProperties,
    fontSize: pxToRem(48),
  },

  d6: {
    
    ...baseDisplayProperties,
    fontSize: pxToRem(40),
  },

  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    md: baseProperties.fontSizeMD,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL,
    "2xl": baseProperties.fontSize2XL,
    "3xl": baseProperties.fontSize3XL,
  },

  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2,
  },
};

export default typography;
