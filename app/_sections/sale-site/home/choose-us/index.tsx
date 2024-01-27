"use client";

import { HomeChooseUsBgImg, HomeChooseUsImg } from "@/app/_assets/images";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { chooseUsArray } from "./choose-us.data";
import { useInView, useSpring } from "react-spring";
import { animated } from "react-spring";

export default function ChooseUs() {
  const [refHead, inViewHead] = useInView({
    once: true,
  });

  const fadeInBottomToTop = useSpring({
    from: { transform: "translateY(100%)", opacity: 0 },
    to: {
      transform: inViewHead ? "translateY(0)" : "translateY(100%)",
      opacity: inViewHead ? 1 : 0,
    },
    config: { duration: 800, delay: 300 },
  });

  const [refText, inViewText] = useInView({ once: true });
  const fadeIn: any = useSpring({
    from: { opacity: 0 },
    to: { opacity: inViewText ? 1 : 0 },
    config: { duration: 800, delay: 300 },
  });

  const [refTextFade, inViewTextFade] = useInView({ once: true });
  const fadeInFromLeft: any = useSpring({
    from: { transform: "translateX(-50%)", opacity: 0 },
    to: {
      transform: inViewTextFade ? "translateX(0)" : "translateX(-50%)",
      opacity: inViewTextFade ? 1 : 0,
    },
    config: { duration: 500, delay: 500 },
  });

  const [refImg, inViewImg] = useInView({ once: true });
  const bounce: any = useSpring({
    from: { transform: "scale(0.8)", opacity: 0 },
    to: {
      transform: inViewImg ? "scale(1)" : "scale(0.8)",
      opacity: inViewImg ? 1 : 0,
    },
    config: { tension: 200, friction: 12 },
  });

  return (
    <Box
      px={{ xs: 2, md: 12 }}
      py={6}
      sx={{
        backgroundImage: `url(${HomeChooseUsBgImg.src})`,
        backgroundPosition: { xs: "100% 100%", md: "center bottom" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <animated.div style={fadeInBottomToTop} ref={refHead}>
        <Typography variant={"h1"} color={"grey.100"} textAlign={"center"}>
          <Typography variant={"h1"} color={"primary.800"} component={"span"}>
            Why&nbsp;
          </Typography>
          Choose Us?
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

      <Grid container bgcolor={"secondary.main"} borderRadius={6} mt={6}>
        <Grid item xs={12} md={6} px={4} margin={"auto 0"}>
          <animated.div style={fadeInFromLeft} ref={refTextFade}>
            {chooseUsArray?.map((item: any, index: number) => (
              <Box pt={4} key={index}>
                <Typography variant={"h3"} color={"grey.100"}>
                  {item.title}
                </Typography>
                <Typography
                  variant={"h6"}
                  fontWeight={"normal"}
                  color={"grey.100"}
                  mt={1}
                >
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </animated.div>
        </Grid>
        <Grid item xs={12} md={6} mt={{ xs: 2, md: 0 }}>
          <animated.div style={bounce} ref={refImg}>
            <Image
              src={HomeChooseUsImg?.src}
              alt={"The Coaching App"}
              width={532}
              height={689}
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
