"use client";

import Link from "next/link";
import { NotFoundImage } from "@/assets/icons";
import { Box, Button, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      py={5}
    >
      <Typography variant={"h1"}>404 Error</Typography>
      <Typography variant={"h2"}>URL does not exist!</Typography>
      <Typography variant={"h6"} my={2}>
        Oops! 😖 Looks like the page that you are looking for does not exist.
        Please enter a valid URL and try again
      </Typography>
      <Link href="/">
        <Button
          variant={"contained"}
          sx={{
            color: "grey.100",
            width: 164,
            height: 54,
            borderRadius: 25,
            border: "1px solid",
            borderColor: "primary.main",
            background: "primary.main",
            fontSize: "18px",
            mb: 4,
          }}
          disableElevation
        >
          Back to Home
        </Button>
      </Link>
      <NotFoundImage />
    </Box>
  );
}
