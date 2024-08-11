import { useCallback, useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import { AUTH, STRIPE } from "@/constants/routes";
import { useRouter, useSearchParams } from "next/navigation";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import {
  usePostForgotOtpVerificationMutation,
  usePostOtpVerificationMutation,
} from "@/services/auth";
import Cookies from "js-cookie";
import { useAppDispatch } from "@/store/store";
import { logIn } from "@/store/auth";
import { CLICK_EVENTS } from "@/constants";

export default function useOtp() {
  const [otp, setOtp] = useState<any>();

  const dispatch: any = useAppDispatch();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const forgot = searchParams.get("forgot");
  const router: any = useRouter();

  const theme: any = useTheme();

  const [postOtpVerificationTrigger, postOtpVerificationStatus] =
    usePostOtpVerificationMutation();

  const [postForgotOtpVerificationTrigger, postForgotOtpVerificationStatus] =
    usePostForgotOtpVerificationMutation();

  const onSubmit = useCallback(
    async (data: any) => {
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
            const encryptedToken = resOtp.session.authentication_token;
            Cookies.set("authentication_token", encryptedToken);
            dispatch(logIn(encryptedToken));
            successSnackbar("Verification Successful! Please Buy Plan");
            router.push(`${STRIPE?.PLANS}?email=${email}`);
          }
        } catch (error: any) {
          errorSnackbar(error?.data?.message);
          setOtp(null);
        }
      }
    },
    [
      email,
      forgot,
      postForgotOtpVerificationTrigger,
      postOtpVerificationTrigger,
      router,
      setOtp,
      dispatch,
    ]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === CLICK_EVENTS.ENTER) {
        event.preventDefault();
        onSubmit(otp);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [otp, onSubmit]);

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
