import { ServicesHeroBannerBgImg, HomeAboutImg } from "@/assets/images";
import { pxToRem } from "@/utils/get-font-value";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { animated } from "react-spring";
import useHeroBanner from "./use-hero-banner";

export default function HeroBanner() {
  const { slideInLeft, fadeIn, bounce, ref } = useHeroBanner();

  return (
    <Grid
      container
      columnSpacing={2}
      px={{ xs: 2, md: 12 }}
      py={6}
      sx={{
        backgroundImage: `url(${ServicesHeroBannerBgImg.src})`,
        backgroundPosition: { xs: "100% 100%", md: "center bottom" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
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
            <Typography
              component={"span"}
              color={"primary.800"}
              variant={"h1"}
              fontWeight={1000}
              fontSize={pxToRem(72)}
            >
              Join{" "}
            </Typography>
            Our Team of
            <br /> Expert Gym Trainers
          </Typography>
        </animated.div>

        <animated.div style={fadeIn}>
          <Typography
            variant={"h5"}
            fontWeight={500}
            color={"grey.400"}
            textAlign={"justify"}
            mt={2}
          >
            Unlock your potential with a career at{" "}
            <Typography
              component={"span"}
              color={"grey.100"}
              variant={"h5"}
              fontWeight={800}
            >
              The Coaching App,
            </Typography>
            &nbsp;where fitness meets passion. We&rsquo;re on the lookout for
            dedicated and skilled gym trainers to inspire and transform lives.
          </Typography>
        </animated.div>

        <animated.div style={bounce}>
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
                mt: 5,
              }}
              disableElevation
            >
              Let&rsquo;s Get Started
            </Button>
          </Link>
        </animated.div>
      </Grid>

      <Grid item xs={0} md={6} py={2}>
        <Avatar
          src={HomeAboutImg.src}
          alt={"The Coaching App"}
          sx={{
            width: { xs: "100%", md: 539 },
            height: { xs: "auto", md: 1000 },
            opacity: 0,
          }}
        />
      </Grid>
    </Grid>
  );
}
