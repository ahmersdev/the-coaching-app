"use client";

import { GlobalStyles } from "@mui/material";
import useLoader from "./use-loader";

const Loader = () => {
  const { theme } = useLoader();

  return (
    <GlobalStyles
      styles={{
        "#nprogress": {
          "& .bar": {
            top: 0,
            left: 0,
            height: 2,
            width: "100%",
            position: "fixed",
            zIndex: 9999,
            backgroundColor: theme?.palette?.primary?.main,
          },
        },
      }}
    />
  );
};

export default Loader;
