import { useState } from "react";
import { useTheme } from "@mui/material";
import { AUTH } from "@/constants/routes";
import { useRouter, useSearchParams } from "next/navigation";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { usePostOtpVerificationMutation } from "@/services/auth";

export default function useOtp() {
  const [otp, setOtp] = useState<any>();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const router: any = useRouter();

  const theme: any = useTheme();

  const [postOtpVerificationTrigger, postOtpVerificationStatus] =
    usePostOtpVerificationMutation();

  const onSubmit = async (data: any) => {
    const updatedData = {
      code: data,
      email,
    };

    try {
      await postOtpVerificationTrigger(updatedData).unwrap();
      successSnackbar("Please, Enter Gym Address!");
      router.push(`${AUTH.GYM_ADDRESS}?email=${email}`);
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return { email, otp, setOtp, theme, onSubmit, postOtpVerificationStatus };
}
