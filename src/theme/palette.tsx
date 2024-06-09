const PRIMARY = {
  main: "#6927DA",
  900: "#783DDE",
  800: "#8752E1",
  700: "#9668E5",
  600: "#A57DE9",
  500: "#B493ED",
  400: "#C3A9F0",
  300: "#D2BEF4",
  200: "#E1D4F8",
  100: "#F0E9FB",
};

const SECONDARY = {
  main: "#0B0B12",
  900: "#23232A",
  800: "#3C3C41",
  700: "#545459",
  600: "#6D6D71",
  500: "#858588",
  400: "#9D9DA0",
  300: "#B6B6B8",
  200: "#CECED0",
  100: "#E7E7E7",
};

const NEUTRAL = {
  main: "#1F1F1F",
  700: "#4B4B4B",
  600: "#8E8E8E",
  500: "#CACACA",
  400: "#E1E1E1",
  300: "#EEEEEE",
  200: "#F5F5F5",
  100: "#FAFAFA",
};

const ERROR = {
  main: "#EC2D30",
  700: "#F64C4C",
  600: "#EB6F70",
  500: "#F49898",
  400: "#FFCCD2",
  300: "#FFEBEE",
  200: "#FEF2F2",
  100: "#FFFBFB",
};

const WARNING = {
  main: "#FE9B0E",
  700: "#FFAD0D",
  600: "#FFC62B",
  500: "#FFDD82",
  400: "#FFEAB3",
  300: "#FFF7E1",
  200: "#FFF9EE",
  100: "#FFFDFA",
};

const SUCCESS = {
  main: "#0C9D61",
  700: "#47B881",
  600: "#6BC497",
  500: "#97D4B4",
  400: "#C0E5D1",
  300: "#E5F5EC",
  200: "#F2FAF6",
  100: "#FBFEFC",
};

const INFO = {
  main: "#3A70E2",
  700: "#3B82F6",
  600: "#4BA1FF",
  500: "#93C8FF",
  400: "#BDDDFF",
  300: "#E4F2FF",
  200: "#F1F8FF",
  100: "#F8FCFF",
};

const GREY: any = {
  0: "#111827",
  100: "#F9FAFB",
  200: "#F3F4F6",
  300: "#E5E7EB",
  400: "#D1D5DB",
  500: "#9CA3AF",
  600: "#6B7280",
  700: "#4B5563",
  800: "#374151",
  900: "#1F2937",
};

const GRADIENTS = {
  primary: "linear-gradient(90deg, #6927DA 0%, #8843FF 100%)",
  secondary:
    "linear-gradient(89.87deg, rgba(105, 39, 218, 0.2) 0.11%, rgba(105, 39, 218, 0) 99.9%)",
  button1:
    "linear-gradient(0deg, #F0E9FB, #F0E9FB), linear-gradient(0deg, #E1D4F8, #E1D4F8)",
  button1Hover:
    "linear-gradient(0deg, #E1D4F8, #E1D4F8), linear-gradient(0deg, #D2BEF4, #D2BEF4)",
  yellowGradient: "linear-gradient(180deg, #FFDE41 0%, #FFF5C3 100%)",
};

const COMMON = {
  common: {
    black: "#000000",
    white: "#FFFFFF",
    stroke: "#EAECF0",
    footer: "#1C122C",
    bg: "#0E0824",
    text: "#0D0D12",
    stripe: "#6927DA26",
  },

  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  neutral: { ...NEUTRAL, contrastText: "#fff" },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: GREY[800] },
  info: { ...INFO, contrastText: GREY[800] },
  grey: GREY,
  gradients: GRADIENTS,

  divider: GREY[800],

  action: {
    hover: GREY[400],
    selected: GREY[400],
    disabled: GREY[400],
    disabledBackground: GREY[400],
    focus: GREY[400],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: "light",
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: "#fff", default: GREY[200], neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action },
  },

  dark: {
    ...COMMON,
    mode: "dark",
    text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600] },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: GREY[500_16],
    },

    action: { active: GREY[500], ...COMMON.action },
  },
};

export default palette;

declare module "@mui/material/styles" {
  interface Palette {
    custom: any;
    blue: any;
  }

  interface PaletteOptions {
    custom?: any;
    blue?: any;
  }
}
