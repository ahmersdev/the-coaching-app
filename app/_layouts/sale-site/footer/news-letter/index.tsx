import { LayoutFooterBgImg } from "@/app/_assets/images";
import { pxToRem } from "@/app/_utils/getFontValue";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import Image from "next/image";

export default function NewsLetter() {
  const theme: any = useTheme();

  return (
    <>
      <Box
        position={"absolute"}
        top={0}
        left={0}
        bgcolor={"error.700"}
        width={212}
        height={212}
        borderRadius={"50%"}
        sx={{ opacity: 0.3, filter: "blur(100px)" }}
      />

      <Box position={"relative"}>
        <Box position={"absolute"} zIndex={0}>
          <Image
            src={LayoutFooterBgImg.src}
            alt={"The Coaching App"}
            width={1180}
            height={443}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box
          position={"relative"}
          zIndex={1}
          width={{ xs: "100%", md: "60%" }}
          pt={{ xs: 0, md: 20 }}
          px={{ xs: 0, md: 4 }}
        >
          <Typography
            component={"h1"}
            fontWeight={900}
            fontSize={pxToRem(36)}
            color={"grey.900"}
            textTransform={"uppercase"}
          >
            Subscribe to our news letter
          </Typography>

          <Typography
            variant={"h6"}
            fontWeight={"normal"}
            color={"grey.800"}
            mt={1}
          >
            Subscribe to our newsletter and receive early access to special
            offers, content, recipes and tips on how to be your best self.
          </Typography>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={2}
            mt={2}
            flexWrap={{ xs: "wrap", md: "unset" }}
          >
            <TextField
              fullWidth
              inputProps={{
                style: {
                  color: theme?.palette?.grey?.[700],
                },
                sx: {
                  "&::placeholder": {
                    color: theme?.palette?.grey?.[700],
                    opacity: 1,
                  },
                },
              }}
              placeholder="Enter Your Email Here"
              sx={{
                ".MuiInputBase-root": {
                  borderRadius: 10,
                  border: 0,
                  backgroundColor: theme?.palette?.common?.white,
                  "&:hover": {
                    borderColor: theme?.palette?.primary?.[900],
                  },
                },
              }}
              label=""
            />

            <Button
              variant={"contained"}
              sx={{
                color: "grey.100",
                borderRadius: 25,
                border: "1px solid",
                borderColor: "primary.main",
                height: 54,
                width: 172,
                fontSize: pxToRem(18),
                fontWeight: "normal",
              }}
              disableElevation
            >
              SUBSCRIBE
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
