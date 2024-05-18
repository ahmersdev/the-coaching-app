import {
  ServicesChallengesBgImg,
  ServicesChallengesFiveImg,
  ServicesChallengesFourImg,
  ServicesChallengesOneImg,
  ServicesChallengesSevenImg,
  ServicesChallengesSixImg,
  ServicesChallengesThreeImg,
  ServicesChallengesTwoImg,
} from "@/assets/images";
import { Box, Grid, Typography } from "@mui/material";
import useChallenges from "./use-challenges";
import { animated } from "react-spring";
import Image from "next/image";

export default function Challenges() {
  const { fadeInBottomToTop, refHead, fadeIn, refText, bounce, refBounce } =
    useChallenges();

  return (
    <Box
      px={{ xs: 2, md: 12 }}
      py={6}
      bgcolor={"common.bg"}
      position={"relative"}
      sx={{
        backgroundImage: `url(${ServicesChallengesBgImg.src})`,
        backgroundPosition: { xs: "100% 100%", md: "center bottom" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        position={"absolute"}
        top={"50%"}
        right={0}
        bgcolor={"success.700"}
        width={212}
        height={212}
        borderRadius={"50%"}
        sx={{
          opacity: 0.3,
          filter: "blur(100px)",
          transform: "translateY(-50%)",
        }}
      />

      <animated.div style={fadeInBottomToTop} ref={refHead}>
        <Typography variant={"h1"} color={"grey.100"} textAlign={"center"}>
          Challenges{" "}
          <Typography variant={"h1"} color={"primary.800"} component={"span"}>
            &{" "}
          </Typography>
          Competitions
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
          Witness the incredible transformations achieved by our clients under
          the guidance of our skilled trainers. See firsthand the impact you can
          make as a part of{" "}
          <Typography
            variant={"h5"}
            fontWeight={900}
            color={"grey.100"}
            component={"span"}
          >
            The Coaching App!
          </Typography>
        </Typography>
      </animated.div>

      <animated.div style={bounce} ref={refBounce}>
        <Grid container spacing={2} mt={4} position={"relative"} zIndex={9}>
          <Grid item xs={12} md={5}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Image
                  src={ServicesChallengesOneImg.src}
                  alt={"The Coaching App"}
                  width={148}
                  height={240}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Image
                  src={ServicesChallengesTwoImg.src}
                  alt={"The Coaching App"}
                  width={336}
                  height={240}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Image
                  src={ServicesChallengesFiveImg.src}
                  alt={"The Coaching App"}
                  width={508}
                  height={240}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <Image
              src={ServicesChallengesThreeImg.src}
              alt={"The Coaching App"}
              width={306}
              height={506}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Image
                  src={ServicesChallengesFourImg.src}
                  alt={"The Coaching App"}
                  width={398}
                  height={240}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Image
                  src={ServicesChallengesSixImg.src}
                  alt={"The Coaching App"}
                  width={148}
                  height={240}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Image
                  src={ServicesChallengesSevenImg.src}
                  alt={"The Coaching App"}
                  width={224}
                  height={240}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </animated.div>
    </Box>
  );
}
