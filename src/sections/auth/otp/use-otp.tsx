import { useState } from "react";
import { useTheme } from "@mui/material";
import { AUTH } from "@/constants/routes";
import { useRouter, useSearchParams } from "next/navigation";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import {
  usePostCreateStripeCustomerMutation,
  usePostForgotOtpVerificationMutation,
  usePostOtpVerificationMutation,
  useUpdateStripeIdMutation,
} from "@/services/auth";

export default function useOtp() {
  const [otp, setOtp] = useState<any>();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const name = searchParams.get("name");
  const forgot = searchParams.get("forgot");
  const router: any = useRouter();

  const theme: any = useTheme();

  const [postOtpVerificationTrigger, postOtpVerificationStatus] =
    usePostOtpVerificationMutation();

  const [postForgotOtpVerificationTrigger, postForgotOtpVerificationStatus] =
    usePostForgotOtpVerificationMutation();

  const [postCreateStripeCustomerTrigger, postCreateStripeCustomerStatus] =
    usePostCreateStripeCustomerMutation();

  const [updateStripeIdTrigger, updateStripeIdStatus] =
    useUpdateStripeIdMutation();

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
        const resOtp: any = await postOtpVerificationTrigger(
          updatedData
        ).unwrap();
        if (resOtp) {
          const updatedDataCreateStripe = {
            email,
            name,
          };
          try {
            const response = await postCreateStripeCustomerTrigger(
              updatedDataCreateStripe
            ).unwrap();
            if (response) {
              const stripeData = { stripe_id: response?.id, user_email: email };
              try {
                await updateStripeIdTrigger(stripeData).unwrap();
              } catch (errorUpdate: any) {
                errorSnackbar(errorUpdate?.data?.message);
              }
            }
          } catch (errorCreate: any) {
            errorSnackbar(errorCreate?.data?.message);
          }
          successSnackbar("Verification Successful! Please Buy Plan");
          router.push(`${AUTH.STRIPE}?email=${email}&name=${name}`);
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
    postCreateStripeCustomerStatus,
    updateStripeIdStatus,
  };
}
