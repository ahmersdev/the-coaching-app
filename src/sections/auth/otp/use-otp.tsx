import { useState } from "react";
import { useTheme } from "@mui/material";
import { AUTH } from "@/constants/routes";
import { useRouter, useSearchParams } from "next/navigation";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import {
  usePostForgotOtpVerificationMutation,
  usePostOtpVerificationMutation,
} from "@/services/auth";

export default function useOtp() {
  const [otp, setOtp] = useState<any>();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const forgot = searchParams.get("forgot");
  const router: any = useRouter();

  const theme: any = useTheme();

  const [postOtpVerificationTrigger, postOtpVerificationStatus] =
    usePostOtpVerificationMutation();

  const [postForgotOtpVerificationTrigger, postForgotOtpVerificationStatus] =
    usePostForgotOtpVerificationMutation();

  const onSubmit = async (data: any) => {
    const updatedData = {
      code: data,
      email,
    };

    if (forgot) {
      try {
        await postForgotOtpVerificationTrigger(updatedData).unwrap();
        successSnackbar("Verification Successful! Create Password");
        router.push(`${AUTH.CREATE_PASSWORD}?email=${email}`);
      } catch (error: any) {
        errorSnackbar(error?.data?.message);
        setOtp(null);
      }
    } else {
      try {
        await postOtpVerificationTrigger(updatedData).unwrap();
        successSnackbar("Verification Successful! Please Buy Plan");
        router.push(AUTH.STRIPE);
      } catch (error: any) {
        errorSnackbar(error?.data?.message);
        setOtp(null);
      }
    }
  };

  return {
    email,
    otp,
    setOtp,
    theme,
    onSubmit,
    postOtpVerificationStatus,
    postForgotOtpVerificationStatus,
  };
}
