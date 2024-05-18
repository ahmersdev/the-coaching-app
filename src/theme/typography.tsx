import { pxToRem, responsiveFontSizes } from "@/utils/get-font-value";

const typography = {
  fontFamily: "inherit",
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(48),
    letterSpacing: 2,
    ...responsiveFontSizes({ xs: 28, md: 38, lg: 48 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ xs: 20, md: 28, lg: 32 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ xs: 20, md: 22, lg: 24 }),
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ xs: 16, md: 18, lg: 20 }),
  },
  h5: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ xs: 14, md: 16, lg: 18 }),
  },
  h6: {
    fontWeight: 500,
    lineHeight: 28 / 18,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ xs: 12, md: 14, lg: 16 }),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(14),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(12),
  },
  button: {
    fontWeight: 500,
    lineHeight: "20px",
    fontSize: pxToRem(14),
    textTransform: "capitalize",
    borderRadius: "100px",
  },
};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    formTopHeading: React.CSSProperties;
    customStyle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    formTopHeading?: React.CSSProperties;
    customStyle: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    formTopHeading: true;
    customStyle: true;
    body3: true;
  }
}

export default typography;
