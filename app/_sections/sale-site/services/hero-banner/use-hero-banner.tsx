import { useInView, useSpring } from "react-spring";

export default function useHeroBanner() {
  const [ref, inView] = useInView({
    once: true,
  });

  const slideInLeft: any = useSpring({
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: {
      transform: inView ? "translateX(0)" : "translateX(-100%)",
      opacity: inView ? 1 : 0,
    },
    config: { duration: 500 },
  });

  const fadeIn: any = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 800, delay: 300 },
  });

  const bounce: any = useSpring({
    from: { transform: "scale(0.8)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
    config: { tension: 200, friction: 12 },
  });

  return { slideInLeft, fadeIn, bounce, ref };
}
