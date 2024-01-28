import { useState } from "react";
import { useInView, useSpring } from "react-spring";

export default function useTrainers() {
  const [centeredIndex, setCenteredIndex] = useState(0);
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

  return { fadeInBottomToTop, refHead, setCenteredIndex, centeredIndex };
}
