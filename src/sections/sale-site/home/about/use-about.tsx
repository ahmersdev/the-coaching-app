import { useSpring, useInView } from "react-spring";

export default function useAbout() {
  const [refImg, inViewImg] = useInView({ once: true });
  const fadeInFromLeft: any = useSpring({
    from: { transform: "translateX(-50%)", opacity: 0 },
    to: {
      transform: inViewImg ? "translateX(0)" : "translateX(-50%)",
      opacity: inViewImg ? 1 : 0,
    },
    config: { duration: 500, delay: 500 },
  });

  const [refText, inViewText] = useInView({ once: true });
  const slideInRight: any = useSpring({
    from: { transform: "translateX(100%)", opacity: 0 },
    to: {
      transform: inViewText ? "translateX(0)" : "translateX(100%)",
      opacity: inViewText ? 1 : 0,
    },
    config: { duration: 500 },
  });

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

  return {
    refImg,
    refText,
    refButton,
    fadeInFromLeft,
    slideInRight,
    fadeIn,
    bounce,
  };
}
