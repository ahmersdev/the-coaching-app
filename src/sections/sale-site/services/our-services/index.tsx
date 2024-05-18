import { Box, Button, Grid, Typography } from "@mui/material";
import { animated } from "react-spring";
import useOurServices from "./use-our-services";
import Image from "next/image";
import { ServicesOurServicesImg } from "@/assets/images";
import Link from "next/link";
import { pxToRem } from "@/utils/get-font-value";

export default function OurServices() {
  const {
    fadeInBottomToTop,
    refHead,
    fadeIn,
    refText,
    fadeInFromLeft,
    refImg,
    slideInRight,
    refBody,
    fadeInBody,
    refTextBody,
    bounce,
    refButton,
  } = useOurServices();

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

      <animated.div style={fadeInBottomToTop} ref={refHead}>
        <Typography variant={"h1"} color={"grey.100"} textAlign={"center"}>
          <Typography variant={"h1"} color={"primary.800"} component={"span"}>
            Our&nbsp;
          </Typography>
          Services
        </Typography>
      </animated.div>

      <animated.div style={fadeIn} ref={refText}>
        <Typography
          variant={"h5"}
          fontWeight={"normal"}
          color={"grey.100"}
          textAlign={"center"}
          width={"70%"}
          margin={"auto"}
          mt={2}
        >
          Discover the ethos and values that make The coaching App the go-to
          destination for fitness enthusiasts. Learn about our commitment to
          excellence, innovation, and a holistic approach to health.
        </Typography>
      </animated.div>

      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} md={6}>
          <animated.div style={fadeInFromLeft} ref={refImg}>
            <Image
              src={ServicesOurServicesImg.src}
              alt={"The Coaching App"}
              width={539}
              height={641}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </animated.div>
        </Grid>

        <Grid item xs={12} md={6} margin={"auto 0"}>
          <animated.div style={slideInRight} ref={refBody}>
            <Typography
              variant={"h1"}
              fontWeight={900}
              fontSize={pxToRem(36)}
              color={"grey.100"}
            >
              <Typography
                component={"span"}
                color={"primary.800"}
                variant={"h1"}
                fontWeight={900}
                fontSize={pxToRem(36)}
              >
                Fitness{" "}
              </Typography>
              Program
            </Typography>
          </animated.div>

          <animated.div style={fadeInBody} ref={refTextBody}>
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
              impact on clients&apos; lives.
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
      </Grid>
    </Box>
  );
}
