import { useState } from "react";
import { useTheme } from "@mui/material";
import { AUTH, STRIPE } from "@/constants/routes";
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

    if (!!forgot) {
      try {
        await postForgotOtpVerificationTrigger(updatedData).unwrap();
        successSnackbar("Verification Successful! Create Password");
        router.push(`${AUTH.CREATE_PASSWORD}?email=${email}`);
      } catch (error: any) {
        errorSnackbar(error?.data?.message);
        setOtp(null);
      }
      return;
    } else {
      try {
        const resOtp: any = await postOtpVerificationTrigger(
          updatedData
        ).unwrap();
        if (resOtp) {
          successSnackbar("Verification Successful! Please Buy Plan");
          router.push(`${STRIPE?.PLANS}?email=${email}`);
        }
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
