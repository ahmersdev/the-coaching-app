import { Box, Button, Grid, Typography } from "@mui/material";
import useMoreAboutUs from "./use-more-about-us";
import { animated } from "react-spring";
import { pxToRem } from "@/utils/get-font-value";
import Link from "next/link";
import Image from "next/image";
import { AboutUsMoreAboutUsImg } from "@/assets/images";

export default function MoreAboutUs() {
  const {
    theme,
    bounceVideo,
    refVideo,
    slideInLeft,
    refHead,
    fadeIn,
    refText,
    bounce,
    refButton,
    slideInRight,
    refImg,
  } = useMoreAboutUs();

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
        right={0}
        bgcolor={"error.700"}
        width={212}
        height={212}
        borderRadius={"50%"}
        sx={{ opacity: 0.3, filter: "blur(100px)" }}
      />

      <video
        width={"100%"}
        height={"100%"}
        autoPlay
        muted
        playsInline
        loop
        style={{
          borderRadius: 24,
          boxShadow: `30px -30px ${theme.palette.primary.main}`,
        }}
      >
        <source src={"/fitness.mp4"} type="video/mp4" />
      </video>

      <animated.div style={bounceVideo} ref={refVideo}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          mt={4}
        >
          <Typography variant={"h5"} fontWeight={"normal"} color={"grey.100"}>
            Interested in working with us? Join our team 🎉
          </Typography>
          <Link href={"/"}>
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
              }}
              disableElevation
            >
              Let&rsquo;s Get Started
            </Button>
          </Link>
        </Box>
      </animated.div>

      <Grid container spacing={2} mt={6}>
        <Grid item xs={12} md={6} margin={"auto 0"}>
          <animated.div style={slideInLeft} ref={refHead}>
            <Typography
              variant={"h1"}
              fontWeight={900}
              fontSize={pxToRem(36)}
              color={"primary.800"}
            >
              More{" "}
              <Typography
                component={"span"}
                color={"grey.100"}
                variant={"h1"}
                fontWeight={900}
                fontSize={pxToRem(36)}
              >
                About Us
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
              well-being. See how we empower our trainers to make a lasting
              impact on clients&apos; lives
            </Typography>
          </animated.div>

          <animated.div style={bounce} ref={refButton}>
            <Link href={"/"}>
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
                  mt: 5,
                }}
                disableElevation
              >
                Explore Now
              </Button>
            </Link>
          </animated.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <animated.div style={slideInRight} ref={refImg}>
            <Image
              src={AboutUsMoreAboutUsImg.src}
              alt={"The Coaching App"}
              width={554}
              height={670}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </animated.div>
        </Grid>
      </Grid>
    </Box>
  );
}
