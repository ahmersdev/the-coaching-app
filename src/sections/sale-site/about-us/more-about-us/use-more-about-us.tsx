import { useTheme } from "@mui/material";
import { useInView, useSpring } from "react-spring";

export default function useMoreAboutUs() {
  const theme: any = useTheme();

  const [refVideo, inViewVideo] = useInView({ once: true });
  const bounceVideo: any = useSpring({
    from: { transform: "scale(0.8)", opacity: 0 },
    to: {
      transform: inViewVideo ? "scale(1)" : "scale(0.8)",
      opacity: inViewVideo ? 1 : 0,
    },
    config: { tension: 200, friction: 12 },
  });

  const [refHead, inViewHead] = useInView({
    once: true,
  });
  const slideInLeft: any = useSpring({
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: {
      transform: inViewHead ? "translateX(0)" : "translateX(-100%)",
      opacity: inViewHead ? 1 : 0,
    },
    config: { duration: 500 },
  });

  const [refText, inViewText] = useInView({ once: true });
  const fadeIn: any = useSpring({
    from: { opacity: 0 },
    to: { opacity: inViewText ? 1 : 0 },
    config: { duration: 800, delay: 300 },
  });

  const [refButton, inViewButton] = useInView({ once: true });
  const bounce: any = useSpring({
    from: { transform: "scale(0.8)", opacity: 0 },
    to: {
      transform: inViewButton ? "scale(1)" : "scale(0.8)",
      opacity: inViewButton ? 1 : 0,
    },
    config: { tension: 200, friction: 12 },
  });

  const [refImg, inViewImg] = useInView({ once: true });
  const slideInRight: any = useSpring({
    from: { transform: "translateX(100%)", opacity: 0 },
    to: {
      transform: inViewImg ? "translateX(0)" : "translateX(100%)",
      opacity: inViewImg ? 1 : 0,
    },
    config: { duration: 500 },
  });

  return {
    theme,
    bounceVideo,
    refVideo,
    slideInLeft,
    refHead,
    fadeIn,
    refText,
    bounce,
    refButton,
    slideInRight,
    refImg,
  };
}
