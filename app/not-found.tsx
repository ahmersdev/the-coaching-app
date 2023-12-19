import { Box, Button } from "@mui/material";
import Link from "next/link";
import { LoadingIcon } from "./_assets";

export default function NotFound() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      height={"100vh"}
    >
      <LoadingIcon />
      <Button variant={"contained"} color={"primary"}>
        <Link href="/">Return Home</Link>
      </Button>
    </Box>
  );
}
