import { ServicesProgressTrackerImg } from "@/assets/images";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { animated } from "react-spring";
import useProgressTracking from "./use-progress-tracking";
import { pxToRem } from "@/utils/get-font-value";
import Link from "next/link";

export default function ProgressTracking() {
  const {
    refImg,
    refText,
    refButton,
    fadeInFromLeft,
    slideInRight,
    fadeIn,
    bounce,
  } = useProgressTracking();

  return (
    <Grid
      container
      spacing={2}
      px={{ xs: 2, md: 12 }}
      py={6}
      bgcolor={"common.bg"}
      position={"relative"}
    >
      <Box
        position={"absolute"}
        top={0}
        right={0}
        bgcolor={"success.700"}
        width={212}
        height={212}
        borderRadius={"50%"}
        sx={{ opacity: 0.3, filter: "blur(100px)" }}
      />

      <Grid item xs={12} md={8}>
        <animated.div style={fadeInFromLeft} ref={refImg}>
          <Image
            src={ServicesProgressTrackerImg.src}
            alt={"The Coaching App"}
            width={710}
            height={625}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </animated.div>
      </Grid>

      <Grid item xs={12} md={4} margin={"auto 0"}>
        <animated.div style={slideInRight} ref={refImg}>
          <Typography
            variant={"h1"}
            fontWeight={900}
            fontSize={pxToRem(36)}
            color={"grey.100"}
          >
            Progress{" "}
            <Typography
              component={"span"}
              color={"primary.800"}
              variant={"h1"}
              fontWeight={900}
              fontSize={pxToRem(36)}
            >
              Tracking
            </Typography>
          </Typography>
        </animated.div>

        <animated.div style={fadeIn} ref={refText}>
          <Typography
            variant={"h5"}
            fontWeight={"normal"}
            color={"grey.100"}
            textAlign={"justify"}
            mt={2}
          >
            Explore our unique training approach that focuses on personalized
            fitness plans, motivation, and a holistic understanding of
            well-being. See how we empower our trainers to make a lasting impact
            on clients&apos; lives
          </Typography>
        </animated.div>

        <animated.div style={bounce} ref={refButton}>
          <Link href={"/"}>
            <Button
              variant={"contained"}
              sx={{
                color: "grey.100",
                borderRadius: 25,
                border: "1px dashed",
                borderColor: "grey.100",
                background: "transparent",
                height: 54,
                width: 148,
                fontSize: pxToRem(18),
                fontWeight: "normal",
                mt: 5,
                ":hover": {
                  backgroundColor: "grey.100",
                  color: "grey.900",
                },
              }}
              disableElevation
            >
              Learn More
            </Button>
          </Link>
        </animated.div>
      </Grid>
    </Grid>
  );
}
