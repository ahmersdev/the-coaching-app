import { ServicesChallengesBgImg } from "@/app/_assets/images";
import { Box, Typography } from "@mui/material";
import useChallenges from "./use-challenges";
import { animated } from "react-spring";

export default function Challenges() {
  const { fadeInBottomToTop, refHead, fadeIn, refText, bounce, refBounce } =
    useChallenges();

  return (
    <Box
      px={{ xs: 2, md: 12 }}
      py={6}
      bgcolor={"secondary.900"}
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
    </Box>
  );
}
