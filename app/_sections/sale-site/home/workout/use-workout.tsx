import { useInView, useSpring } from "react-spring";

export default function useWorkout() {
  const [refImg1, inViewImg1] = useInView({
    once: true,
  });
  const slideInLeft: any = useSpring({
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: {
      transform: inViewImg1 ? "translateX(0)" : "translateX(-100%)",
      opacity: inViewImg1 ? 1 : 0,
    },
    config: { duration: 500 },
  });

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

  const [refButton, inViewButton] = useInView({ once: true });
  const bounce: any = useSpring({
    from: { transform: "scale(0.8)", opacity: 0 },
    to: {
      transform: inViewButton ? "scale(1)" : "scale(0.8)",
      opacity: inViewButton ? 1 : 0,
    },
    config: { tension: 200, friction: 12 },
  });

  const [refImg2, inViewImg2] = useInView({
    once: true,
  });
  const slideInRight: any = useSpring({
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: {
      transform: inViewImg2 ? "translateX(0)" : "translateX(100%)",
      opacity: inViewImg2 ? 1 : 0,
    },
    config: { duration: 500 },
  });

  return {
    slideInLeft,
    refImg1,
    fadeInBottomToTop,
    refHead,
    fadeIn,
    refText,
    bounce,
    refButton,
    slideInRight,
    refImg2,
  };
}
