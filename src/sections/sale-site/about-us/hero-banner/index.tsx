import { Grid, Typography } from "@mui/material";
import useHeroBanner from "./use-hero-banner";
import { AboutUsHeroBannerBgImg } from "@/assets/images";
import { animated } from "react-spring";
import { pxToRem } from "@/utils/get-font-value";

export default function HeroBanner() {
  const { slideInLeft, bounce, ref } = useHeroBanner();

  return (
    <Grid
      container
      spacing={2}
      px={{ xs: 2, md: 12 }}
      pb={6}
      sx={{
        backgroundImage: `url(${AboutUsHeroBannerBgImg.src})`,
        backgroundPosition: { xs: "center center", md: "center bottom" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      height={{ xs: "auto", md: 1000 }}
      ref={ref}
    >
      <Grid item xs={12} md={6} margin={"auto 0"}>
        <animated.div style={slideInLeft}>
          <Typography
            variant={"h1"}
            fontWeight={1000}
            fontSize={pxToRem(72)}
            color={"grey.100"}
          >
            We are building
            <br />
            Best{" "}
            <Typography
              component={"span"}
              color={"primary.800"}
              variant={"h1"}
              fontWeight={1000}
              fontSize={pxToRem(72)}
            >
              Relation{" "}
            </Typography>
            with
            <br /> trainers
          </Typography>
        </animated.div>
      </Grid>

      <Grid item xs={0} md={6} py={2} margin={"auto 0"}>
        <animated.div style={bounce}>
          <Typography
            variant={"h5"}
            fontWeight={500}
            color={"grey.400"}
            textAlign={"justify"}
            mt={2}
          >
            Discover the ethos and values that make The coaching App the go-to
            destination for fitness enthusiasts. Learn about our commitment to
            excellence, innovation, and a holistic approach to health.
          </Typography>
        </animated.div>
      </Grid>
    </Grid>
  );
}
