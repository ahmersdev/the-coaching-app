import { HomeChooseUsBgImg, HomeChooseUsImg } from "@/assets/images";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { chooseUsArray } from "./choose-us.data";
import { animated } from "react-spring";
import useChooseUs from "./use-choose-us";

export default function ChooseUs() {
  const {
    fadeInBottomToTop,
    refHead,
    fadeIn,
    refText,
    fadeInFromLeft,
    refTextFade,
    bounce,
    refImg,
  } = useChooseUs();

  return (
    <Box
      px={{ xs: 2, md: 12 }}
      py={6}
      bgcolor={"common.bg"}
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
              src={HomeChooseUsImg.src}
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
