import { useInView, useSpring } from "react-spring";

export default function useOurServices() {
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

  const [refImg, inViewImg] = useInView({ once: true });
  const fadeInFromLeft: any = useSpring({
    from: { transform: "translateX(-50%)", opacity: 0 },
    to: {
      transform: inViewImg ? "translateX(0)" : "translateX(-50%)",
      opacity: inViewImg ? 1 : 0,
    },
    config: { duration: 500, delay: 500 },
  });

  const [refBody, inViewBody] = useInView({ once: true });
  const slideInRight: any = useSpring({
    from: { transform: "translateX(100%)", opacity: 0 },
    to: {
      transform: inViewBody ? "translateX(0)" : "translateX(100%)",
      opacity: inViewBody ? 1 : 0,
    },
    config: { duration: 500 },
  });

  const [refTextBody, inViewTextBody] = useInView({ once: true });
  const fadeInBody: any = useSpring({
    from: { opacity: 0 },
    to: { opacity: inViewTextBody ? 1 : 0 },
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

  return {
    fadeInBottomToTop,
    refHead,
    fadeIn,
    refText,
    fadeInFromLeft,
    refImg,
    slideInRight,
    refBody,
    fadeInBody,
    refTextBody,
    bounce,
    refButton,
  };
}
