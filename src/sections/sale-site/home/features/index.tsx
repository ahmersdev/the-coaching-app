import { Box, Grid, Typography } from "@mui/material";
import { animated } from "react-spring";
import useFeatures from "./use-features";
import { HomeFeaturesBgImg } from "@/assets/images";

export default function Features() {
  const {
    fadeInBottomToTop,
    refHead,
    slideInLeft1,
    ref1,
    slideInRight2,
    ref2,
    slideInLeft3,
    ref3,
    slideInRight4,
    ref4,
  } = useFeatures();
  return (
    <Box
      px={{ xs: 2, md: 12 }}
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

      <animated.div style={fadeInBottomToTop} ref={refHead}>
        <Typography variant={"h1"} color={"grey.100"} textAlign={"center"}>
          The Coaching App
          <br />
          <Typography variant={"h1"} color={"primary.800"} component={"span"}>
            Features
          </Typography>
        </Typography>
      </animated.div>

      <Grid
        container
        justifyContent={"space-between"}
        mt={4}
        sx={{
          backgroundImage: `url(${HomeFeaturesBgImg.src})`,
          backgroundPosition: "center center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid item xs={12} md={4} textAlign={{ xs: "unset", md: "right" }}>
          <animated.div style={slideInLeft1} ref={ref1}>
            <Typography variant={"h1"} fontWeight={800} color={"primary.800"}>
              01
            </Typography>
            <Typography variant={"h3"} fontWeight={900} color={"common.white"}>
              Boost your Creativity
            </Typography>
            <Typography
              variant={"h5"}
              fontWeight={"normal"}
              color={"common.white"}
            >
              Power Coffee is designed to sharpen your mental focus, helping you
              stay alert and productive throughout the day.
            </Typography>
          </animated.div>
        </Grid>

        <Grid item xs={0} md={4} />

        <Grid item xs={12} md={4} mt={{ xs: 0, md: 8 }}>
          <animated.div style={slideInRight2} ref={ref2}>
            <Typography variant={"h1"} fontWeight={800} color={"primary.800"}>
              02
            </Typography>
            <Typography variant={"h3"} fontWeight={900} color={"common.white"}>
              Activate your Body
            </Typography>
            <Typography
              variant={"h5"}
              fontWeight={"normal"}
              color={"common.white"}
            >
              Fuel your workouts and optimize your physical performance. Power
              coffee provides the energy and endurance needed to take your
              fitness routine to the next level.
            </Typography>
          </animated.div>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          textAlign={{ xs: "unset", md: "right" }}
          mt={{ xs: 0, md: 4 }}
        >
          <animated.div style={slideInLeft3} ref={ref3}>
            <Typography variant={"h1"} fontWeight={800} color={"primary.800"}>
              03
            </Typography>
            <Typography variant={"h3"} fontWeight={900} color={"common.white"}>
              Boost your Creativity
            </Typography>
            <Typography
              variant={"h5"}
              fontWeight={"normal"}
              color={"common.white"}
            >
              Power Coffee is designed to sharpen your mental focus, helping you
              stay alert and productive throughout the day.
            </Typography>
          </animated.div>
        </Grid>

        <Grid item xs={0} md={4} />

        <Grid item xs={12} md={4} mt={{ xs: 0, md: 10 }}>
          <animated.div style={slideInRight4} ref={ref4}>
            <Typography variant={"h1"} fontWeight={800} color={"primary.800"}>
              04
            </Typography>
            <Typography variant={"h3"} fontWeight={900} color={"common.white"}>
              Activate your Body
            </Typography>
            <Typography
              variant={"h5"}
              fontWeight={"normal"}
              color={"common.white"}
            >
              Fuel your workouts and optimize your physical performance. Power
              coffee provides the energy and endurance needed to take your
              fitness routine to the next level.
            </Typography>
          </animated.div>
        </Grid>
      </Grid>
    </Box>
  );
}
