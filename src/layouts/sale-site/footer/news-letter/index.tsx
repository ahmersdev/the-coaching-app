import { pxToRem } from "@/utils/get-font-value";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { animated } from "react-spring";
import useNewsLetter from "./use-news-letter";
import { LayoutNewsLetterImg } from "@/assets/images";

export default function NewsLetter() {
  const {
    theme,
    email,
    error,
    handleEmailChange,
    handleSubscribeClick,
    slideInLeft,
    refHead,
    fadeIn,
    refText,
    bounce,
    refButton,
    slideInRight,
    refImg,
  } = useNewsLetter();

  return (
    <Grid
      container
      spacing={2}
      py={6}
      bgcolor={"common.bg"}
      position={"relative"}
    >
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
      <Grid item xs={12} md={6} margin={"auto 0"}>
        <animated.div style={slideInLeft} ref={refHead}>
          <Typography
            variant={"h1"}
            fontWeight={900}
            fontSize={pxToRem(36)}
            color={"grey.100"}
            textTransform={"uppercase"}
          >
            Subscribe to our news letter
          </Typography>
        </animated.div>
        <animated.div style={fadeIn} ref={refText}>
          <Typography
            variant={"h6"}
            fontWeight={"normal"}
            color={"grey.100"}
            mt={1}
          >
            Subscribe to our newsletter and receive early access to special
            offers, content, recipes and tips on how to be your best self.
          </Typography>
        </animated.div>

        <animated.div style={bounce} ref={refButton}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={2}
            mt={2}
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
              helperText={
                <Typography
                  variant={"body2"}
                  component={"span"}
                  sx={{ display: "block", textAlign: "center" }}
                  color={"error.700"}
                >
                  {error}
                </Typography>
              }
              value={email}
              onChange={handleEmailChange}
              error={Boolean(error)}
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
              onClick={handleSubscribeClick}
            >
              SUBSCRIBE
            </Button>
          </Box>
        </animated.div>
      </Grid>

      <Grid item xs={12} md={6} position={"relative"}>
        <animated.div style={slideInRight} ref={refImg}>
          <Image
            src={LayoutNewsLetterImg.src}
            alt={"The Coaching App"}
            width={538}
            height={642}
            style={{
              zIndex: 9,
              position: "relative",
              width: "100%",
              height: "auto",
            }}
          />
        </animated.div>
      </Grid>
    </Grid>
  );
}
