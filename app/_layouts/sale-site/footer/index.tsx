import { Box } from "@mui/material";
import LowerFooter from "./lower-footer";
import NewsLetter from "./news-letter";

export default function Footer() {
  return (
    <>
      <Box
        px={{ xs: 2, md: 12 }}
        pt={8}
        bgcolor={"secondary.900"}
        position={"relative"}
      >
        <NewsLetter />
      </Box>

      <Box px={{ xs: 2, md: 12 }} pb={6} pt={15} bgcolor={"common.footer"}>
        <LowerFooter />
      </Box>
    </>
  );
}
