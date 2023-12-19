import { Box } from "@mui/material";
import { LoadingIcon } from "./_assets";

export default function Loading() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <LoadingIcon />
    </Box>
  );
}
