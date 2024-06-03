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

export default function useForgotPassword() {
  const router: any = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(forgotPasswordFormValidationSchema),
    defaultValues: forgotPasswordFormDefaultValues,
  });

  const { handleSubmit } = methods;

  const [forgotPasswordOtpTrigger, forgotPasswordOtpStatus] =
    useLazyGetForgotPasswordOtpQuery();

  const onSubmit = async (data: any) => {
    try {
      await forgotPasswordOtpTrigger({
        email: data?.email,
      }).unwrap();
      successSnackbar("Check your email!");
      router.push(`${AUTH.OTP}?email=${data?.email}&forgot=true`);
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return { methods, handleSubmit, onSubmit, forgotPasswordOtpStatus };
}
