import { useTheme } from "@mui/material";
import {
  getSignInDataArray,
  signInFormDefaultValues,
  signInFormValidationSchema,
} from "./sign-in.data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { COACH_SITE, SYSTEM_ADMIN } from "@/constants/routes";
import { useState } from "react";
import { usePostSignInMutation } from "@/services/auth";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { ENCRYPTION_KEY } from "@/config";
import { useAppDispatch } from "@/store/store";
import { setDetails, setToken } from "@/store/auth";
import { USER_ROLES } from "@/constants/strings";

export default function useSignIn() {
  const theme: any = useTheme();
  const router: any = useRouter();

  const dispatch = useAppDispatch();

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

  const onSubmit = async (data: any) => {
    const userAgent = navigator.userAgent;
    const updatedData = {
      email_username: data?.email,
      password: data?.password,
      device_info: userAgent,
    };

    try {
      const res: any = await postSignInTrigger(updatedData).unwrap();
      if (res) {
        const encryptedToken = CryptoJS.AES.encrypt(
          res.session.authentication_token,
          ENCRYPTION_KEY
        ).toString();
        Cookies.set("authentication_token", encryptedToken);

        const userIdsDetails = {
          user_role: res.coach.user_role,
          coach_id: res.coach.coach_id,
          gym_id: res.gym.gym_id,
          gym_address: res.gym_address.address_id,
        };

        Cookies.set("authentication_details", JSON.stringify(userIdsDetails));
        dispatch(setToken(encryptedToken));
        dispatch(setDetails(userIdsDetails));

        successSnackbar("Sign In Successful!");

        if (res.session.user_type === USER_ROLES.COACH) {
          router.push(COACH_SITE.DASHBOARD);
        }
        if (res.session.user_type === USER_ROLES.ADMIN) {
          router.push(SYSTEM_ADMIN.DASHBOARD);
        }
      }
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return { methods, handleSubmit, onSubmit, signInDataArray, postSignInStatus };
}
