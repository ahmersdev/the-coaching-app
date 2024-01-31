import { useInView, useSpring } from "react-spring";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enqueueSnackbar } from "notistack";
import {
  contactUsDefaultValues,
  contactUsValidationSchema,
} from "./hero-banner.data";

export default function useHeroBanner() {
  const methods: any = useForm({
    resolver: yupResolver(contactUsValidationSchema),
    defaultValues: contactUsDefaultValues,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
    enqueueSnackbar("Message Sent Successfully!", {
      variant: "success",
    });
    reset(contactUsDefaultValues);
  };

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

  return { methods, handleSubmit, onSubmit, slideInLeft, ref };
}
