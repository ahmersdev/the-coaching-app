import { HomeAboutBgImg, HomeAboutImg } from "@/assets/images";
import { SALE_SITE } from "@/constants/routes";
import { pxToRem } from "@/utils/get-font-value";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { animated } from "react-spring";
import useAbout from "./use-about";

export default function About() {
  const {
    refImg,
    refText,
    refButton,
    fadeInFromLeft,
    slideInRight,
    fadeIn,
    bounce,
  } = useAbout();

  return (
    <Grid
      container
      columnSpacing={2}
      px={{ xs: 2, md: 12 }}
      py={6}
      bgcolor={"common.bg"}
      sx={{
        backgroundImage: `url(${HomeAboutBgImg.src})`,
        backgroundPosition: { xs: "100% 100%", md: "center bottom" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid item xs={12} md={6} position={"relative"}>
        <animated.div style={fadeInFromLeft} ref={refImg}>
          <Image
            src={HomeAboutImg.src}
            alt={"The Coaching App"}
            width={539}
            height={641}
            style={{
              zIndex: 9,
              position: "relative",
              width: "100%",
              height: "auto",
            }}
          />
        </animated.div>

        <Box
          position={"absolute"}
          left={-100}
          top={"50%"}
          bgcolor={"error.700"}
          width={212}
          height={212}
          borderRadius={"50%"}
          zIndex={1}
          sx={{
            opacity: 0.3,
            filter: "blur(100px)",
            transform: "translateY(-50%)",
          }}
        />
      </Grid>
      <Grid item xs={12} md={6} margin={"auto 0"}>
        <animated.div style={slideInRight} ref={refImg}>
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
              About{" "}
            </Typography>
            The
            <br /> Coaching App?
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
            Discover the ethos and values that make The coaching App the go-to
            destination for fitness enthusiasts. Learn about our commitment to
            excellence, innovation, and a holistic approach to health.
          </Typography>
        </animated.div>

        <animated.div style={bounce} ref={refButton}>
          <Link href={SALE_SITE?.ABOUT_US}>
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
