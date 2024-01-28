import { useTheme } from "@mui/material";
import { useInView, useSpring } from "react-spring";

export default function useTestimonial() {
  const theme: any = useTheme();
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

  return { fadeInBottomToTop, refHead, theme };
}
