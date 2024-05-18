import { useInView, useSpring } from "react-spring";

export default function useChooseUs() {
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

  return {
    fadeInBottomToTop,
    refHead,
    fadeIn,
    refText,
    fadeInFromLeft,
    refTextFade,
    bounce,
    refImg,
  };
}
