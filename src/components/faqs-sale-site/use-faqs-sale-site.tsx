import { useGetAdminFaqsQuery } from "@/services/admin/faqs";
import { useInView, useSpring } from "react-spring";

export default function useFaqsSaleSite() {
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

  const { data, isLoading, isFetching, isError } = useGetAdminFaqsQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  const transformedData = Array.isArray(data)
    ? data.map(({ question, answer, ...rest }: any) => ({
        summary: question,
        details: answer,
        ...rest,
      }))
    : [];

  return {
    fadeInBottomToTop,
    refHead,
    transformedData,
    isLoading,
    isFetching,
    isError,
  };
}
