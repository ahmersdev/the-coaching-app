export function createGradient(color1: string, color2: string) {
  return `linear-gradient(90deg, ${color1} 10.76%, ${color2} 133.7%)`;
}

const PRIMARY = {
  lighter: "#A57DE9",
  light: "#9668E5",
  main: "#6927DA",
  dark: "#8752E1",
  darker: "#783DDE",
};

const SECONDARY = {
  lighter: "#9D9DA0",
  light: "#545459",
  main: "#0B0B12",
  dark: "#3C3C41",
  darker: "#23232A",
};

const NEUTRAL = {
  lighter: "#E1E1E1",
  light: "#CACACA",
  main: "#1F1F1F",
  dark: "#8E8E8E",
  darker: "#4B4B4B",
};

const SUCCESS = {
  lighter: "#C0E5D1",
  light: "#97D4B4",
  main: "#0C9D61",
  dark: "#6BC497",
  darker: "#47B881",
};

const WARNING = {
  lighter: "#FFEAB3",
  light: "#FFDD82",
  main: "#FE9B0E",
  dark: "#FFC62B",
  darker: "#FFAD0D",
};

const ERROR = {
  lighter: "#FFEBEE",
  light: "#F49898",
  main: "#EC2D30",
  dark: "#EB6F70",
  darker: "#F64C4C",
};

const INFO = {
  lighter: "#BDDDFF",
  light: "#93C8FF",
  main: "#3A70E2",
  dark: "#4BA1FF",
  darker: "#3B82F6",
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
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const COMMON = {
  common: {
    black: "#000000",
    white: "#FFFFFF",
    stroke: "#EAECF0",
    main: "#2B2B33",
    light: "#6B7280",
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

  divider: GREY[400],
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
