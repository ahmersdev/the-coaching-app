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

  return { slideInLeft, ref };
}
