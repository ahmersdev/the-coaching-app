import { useInView, useSpring } from "react-spring";

export default function useFeatures() {
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

  const [ref1, inView1] = useInView({
    once: true,
  });
  const slideInLeft1: any = useSpring({
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: {
      transform: inView1 ? "translateX(0)" : "translateX(-100%)",
      opacity: inView1 ? 1 : 0,
    },
    config: { duration: 500 },
  });

  const [ref2, inView2] = useInView({
    once: true,
  });
  const slideInRight2: any = useSpring({
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: {
      transform: inView2 ? "translateX(0)" : "translateX(100%)",
      opacity: inView2 ? 1 : 0,
    },
    config: { duration: 500 },
  });

  const [ref3, inView3] = useInView({
    once: true,
  });
  const slideInLeft3: any = useSpring({
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: {
      transform: inView3 ? "translateX(0)" : "translateX(-100%)",
      opacity: inView3 ? 1 : 0,
    },
    config: { duration: 500 },
  });

  const [ref4, inView4] = useInView({
    once: true,
  });
  const slideInRight4: any = useSpring({
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: {
      transform: inView4 ? "translateX(0)" : "translateX(100%)",
      opacity: inView4 ? 1 : 0,
    },
    config: { duration: 500 },
  });

  return {
    fadeInBottomToTop,
    refHead,
    slideInLeft1,
    ref1,
    slideInRight2,
    ref2,
    slideInLeft3,
    ref3,
    slideInRight4,
    ref4,
  };
}
