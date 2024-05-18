import {
  HomeWorkoutBgImg,
  HomeWorkoutOneImg,
  HomeWorkoutTwoImg,
} from "@/assets/images";
import { pxToRem } from "@/utils/get-font-value";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import useWorkout from "./use-workout";
import { animated } from "react-spring";

export default function Workout() {
  const {
    slideInLeft,
    refImg1,
    fadeInBottomToTop,
    refHead,
    fadeIn,
    refText,
    bounce,
    refButton,
    slideInRight,
    refImg2,
  } = useWorkout();

  return (
    <Grid
      container
      px={{ xs: 2, md: 12 }}
      py={12}
      spacing={2}
      bgcolor={"common.bg"}
      sx={{
        backgroundImage: `url(${HomeWorkoutBgImg.src})`,
        backgroundPosition: { xs: "100% 100%", md: "center bottom" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid item xs={12} md={3}>
        <animated.div style={slideInLeft} ref={refImg1}>
          <Image
            src={HomeWorkoutOneImg.src}
            alt={"The Coaching App"}
            width={270}
            height={430}
            style={{ width: "100%", height: "auto" }}
          />
        </animated.div>
      </Grid>

      <Grid item xs={12} md={6} margin={"auto"} textAlign={"center"}>
        <animated.div style={fadeInBottomToTop} ref={refHead}>
          <Typography variant={"h2"} fontSize={pxToRem(40)} color={"grey.100"}>
            Get Your Perfect Workout
            <br /> with the{" "}
            <Typography
              variant={"h2"}
              fontSize={pxToRem(40)}
              color={"primary.800"}
              component={"span"}
            >
              Perfect Trainers
            </Typography>
          </Typography>
        </animated.div>

        <animated.div style={fadeIn} ref={refText}>
          <Typography
            variant={"h5"}
            fontWeight={"normal"}
            color={"grey.400"}
            mt={1}
          >
            Explore our unique training approach that focuses on personalized
            fitness plans, motivation, and a holistic understanding of
            well-being. See how we empower our trainers to make a lasting impact
            on clients&apos; lives
          </Typography>
        </animated.div>

        <animated.div style={bounce} ref={refButton}>
          <Link href={`/`}>
            <Button
              variant={"contained"}
              sx={{
                color: "grey.100",
                borderRadius: 25,
                border: "1px solid",
                borderColor: "primary.main",
                height: 54,
                width: 212,
                fontSize: pxToRem(18),
                fontWeight: "normal",
                mt: 2,
              }}
              disableElevation
            >
              Let&rsquo;s Get Started
            </Button>
          </Link>
        </animated.div>
      </Grid>

      <Grid item xs={12} md={3}>
        <animated.div style={slideInRight} ref={refImg2}>
          <Image
            src={HomeWorkoutTwoImg.src}
            alt={"The Coaching App"}
            width={270}
            height={430}
            style={{ width: "100%", height: "auto" }}
          />
        </animated.div>
      </Grid>
    </Grid>
  );
}
