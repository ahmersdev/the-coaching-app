import {
  ServicesNutritionalBgImg,
  ServicesNutritionalImg,
} from "@/assets/images";
import { pxToRem } from "@/utils/get-font-value";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { animated } from "react-spring";
import useNutritional from "./use-nutritional";

export default function Nutritional() {
  const {
    slideInLeft,
    refHead,
    fadeIn,
    refText,
    bounce,
    refButton,
    slideInRight,
    refImg,
  } = useNutritional();

  return (
    <Grid
      container
      spacing={2}
      px={{ xs: 2, md: 12 }}
      py={6}
      bgcolor={"common.bg"}
      sx={{
        backgroundImage: `url(${ServicesNutritionalBgImg.src})`,
        backgroundPosition: { xs: "100% 100%", md: "center bottom" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid item xs={12} md={6} margin={"auto 0"}>
        <animated.div style={slideInLeft} ref={refHead}>
          <Typography
            variant={"h1"}
            fontWeight={900}
            fontSize={pxToRem(36)}
            color={"primary.800"}
          >
            Nutritional{" "}
            <Typography
              component={"span"}
              color={"grey.100"}
              variant={"h1"}
              fontWeight={900}
              fontSize={pxToRem(36)}
            >
              Guidance
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
            src={ServicesNutritionalImg.src}
            alt={"The Coaching App"}
            width={580}
            height={611}
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
