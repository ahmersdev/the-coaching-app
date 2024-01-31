import { Grid, Typography } from "@mui/material";
import { animated } from "react-spring";
import useHeroBanner from "./use-hero-banner";
import Image from "next/image";
import { ContactUsHeroBannerBgImg, HomeAboutImg } from "@/app/_assets/images";
import { pxToRem } from "@/app/_utils/getFontValue";

export default function HeroBanner() {
  const { slideInLeft, ref } = useHeroBanner();

  return (
    <Grid
      container
      columnSpacing={2}
      px={{ xs: 2, md: 12 }}
      py={6}
      sx={{
        backgroundImage: `url(${ContactUsHeroBannerBgImg.src})`,
        backgroundPosition: { xs: "100% 100%", md: "center bottom" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      ref={ref}
    >
      <Grid item xs={12} md={6} margin={"auto 0"}>
        <animated.div style={slideInLeft}>
          <Typography variant={"h2"} color={"grey.100"} fontSize={pxToRem(40)}>
            Let&rsquo;s Contact with experts
          </Typography>
          <Typography
            variant={"h5"}
            color={"grey.100"}
            fontWeight={"normal"}
            mt={2}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </Typography>
        </animated.div>
      </Grid>

      <Grid item xs={0} md={6} py={2}>
        <Image
          src={HomeAboutImg.src}
          alt={"The Coaching App"}
          width={539}
          height={641}
          style={{
            width: "100%",
            height: "auto",
            opacity: 0,
          }}
        />
      </Grid>
    </Grid>
  );
}
