import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AUTH } from "@/constants/routes";
import {
  forgotPasswordFormDefaultValues,
  forgotPasswordFormValidationSchema,
} from "./forgot-password.data";
import { useRouter } from "next/navigation";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useLazyGetForgotPasswordOtpQuery } from "@/services/auth";
import { useCallback, useEffect } from "react";
import { CLICK_EVENTS } from "@/constants";

export default function useForgotPassword() {
  const router: any = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(forgotPasswordFormValidationSchema),
    defaultValues: forgotPasswordFormDefaultValues,
  });

  const { handleSubmit } = methods;

  const [forgotPasswordOtpTrigger, forgotPasswordOtpStatus] =
    useLazyGetForgotPasswordOtpQuery();

  const onSubmit = useCallback(
    async (data: any) => {
      try {
        await forgotPasswordOtpTrigger({
          email: data?.email,
        }).unwrap();
        successSnackbar("Check your email!");
        router.push(`${AUTH.OTP}?email=${data?.email}&forgot=true`);
      } catch (error: any) {
        errorSnackbar(error?.data?.message);
      }
    },
    [forgotPasswordOtpTrigger, router]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === CLICK_EVENTS.ENTER) {
        event.preventDefault();
        handleSubmit(onSubmit)?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSubmit, onSubmit]);

  return { methods, handleSubmit, onSubmit, forgotPasswordOtpStatus };
}
