import { useTheme } from "@mui/material";
import {
  INVOICE_STATUSES,
  getSignInDataArray,
  signInFormDefaultValues,
  signInFormValidationSchema,
} from "./sign-in.data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import {
  useLazyGetResendOtpQuery,
  usePostSignInMutation,
} from "@/services/auth";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useAppDispatch } from "@/store/store";
import { logIn } from "@/store/auth";
import { STATUS_CODES, USER_ROLES } from "@/constants/strings";
import { AUTH, COACH_SITE, STRIPE, SYSTEM_ADMIN } from "@/constants/routes";

export default function useSignIn() {
  const theme: any = useTheme();
  const router: any = useRouter();

  const dispatch: any = useAppDispatch();

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
  });

  const togglePasswordVisibility = (field: any) => {
    setPasswordVisibility((prev: any) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const signInDataArray = getSignInDataArray(
    togglePasswordVisibility,
    passwordVisibility,
    theme
  );

  const methods: any = useForm({
    resolver: yupResolver(signInFormValidationSchema),
    defaultValues: signInFormDefaultValues,
  });

  const { handleSubmit } = methods;

  const [postSignInTrigger, postSignInStatus] = usePostSignInMutation();

  const [resendOtpTrigger] = useLazyGetResendOtpQuery();

  const onSubmit = async (data: any) => {
    const userAgent = navigator.userAgent;
    const updatedData = {
      email_username: data?.email,
      password: data?.password,
      device_info: userAgent,
    };

    try {
      const responseSignIn: any = await postSignInTrigger(updatedData).unwrap();
      if (responseSignIn) {
        const encryptedToken = responseSignIn.session.authentication_token;
        if (responseSignIn?.latest_invoice?.status === INVOICE_STATUSES.PAID) {
          Cookies.set("authentication_token", encryptedToken);
          dispatch(logIn(encryptedToken));
          successSnackbar("Sign In Successful!");
          if (responseSignIn?.session?.user_type === USER_ROLES.COACH) {
            if (!responseSignIn.coach.intro) {
              successSnackbar("Please Complete Your Profile!");
              router.push(COACH_SITE.SETTINGS);
            } else {
              router.push(COACH_SITE.DASHBOARD);
            }
          }
          if (responseSignIn.session.user_type === USER_ROLES.ADMIN) {
            router.push(SYSTEM_ADMIN.DASHBOARD);
          }
        } else if (
          responseSignIn?.latest_invoice?.status === INVOICE_STATUSES.OPEN
        ) {
          Cookies.set(
            "clientSecret",
            responseSignIn?.latest_invoice?.client_secret
          );
          Cookies.set("authentication_token", encryptedToken);
          dispatch(logIn(encryptedToken));
          errorSnackbar("Please Make Payment First");
          router.push(`${STRIPE.PLANS}?email=${data?.email}`);
          return;
        } else {
          Cookies.set("authentication_token", encryptedToken);
          dispatch(logIn(encryptedToken));
          errorSnackbar("Please Make Payment First");
          router.push(`${STRIPE.PLANS}?email=${data?.email}`);
          return;
        }
      }
    } catch (error: any) {
      if (error?.status === STATUS_CODES.CODE_403) {
        errorSnackbar("Please Verify Your Email First");
        try {
          await resendOtpTrigger({
            email: data?.email,
          }).unwrap();
          router.push(`${AUTH.OTP}?email=${data?.email}`);
        } catch (e: any) {
          errorSnackbar(e?.data?.message);
        }
        return;
      }
      if (error?.status === STATUS_CODES.CODE_422) {
        errorSnackbar("Please Make Payment First");
        router.push(`${STRIPE.PLANS}?email=${data?.email}`);
        return;
      }
      errorSnackbar(error?.data?.message);
    }
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    signInDataArray,
    postSignInStatus,
  };
}
