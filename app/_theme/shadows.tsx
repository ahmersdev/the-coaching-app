import { Theme, alpha } from "@mui/material";

const CustomShadows = (theme: Theme) => {
  return {
    primary: `2px -2px 10px 21px ${alpha(theme.palette.primary.main, 0.4)}`,
  };
};
export default CustomShadows;
