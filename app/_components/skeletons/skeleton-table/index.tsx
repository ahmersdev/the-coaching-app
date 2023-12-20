import React from "react";
import { Box, Skeleton, useTheme } from "@mui/material";
import { styles } from "./skeleton-table.style";

const SkeletonTable = () => {
  const theme: any = useTheme();

  return (
    <Box>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={50}
        sx={styles?.root(theme)}
      />
      <br />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={50}
        sx={styles?.root(theme)}
      />
      <br />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={50}
        sx={styles?.root(theme)}
      />
      <br />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={50}
        sx={styles?.root(theme)}
      />
    </Box>
  );
};

export default SkeletonTable;
