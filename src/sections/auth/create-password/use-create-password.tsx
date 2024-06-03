import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import {
  createPasswordFormDefaultValues,
  createPasswordFormValidationSchema,
  getCreatePasswordDataArray,
} from "./create-password.data";
import { AUTH } from "@/constants/routes";
import { useRouter, useSearchParams } from "next/navigation";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { usePostCreatePasswordMutation } from "@/services/auth";

export default function useCreatePassword() {
  const [passwordVisibility, setPasswordVisibility] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const searchParams = useSearchParams();
  const email = searchParams?.get("email");

  const router: any = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(createPasswordFormValidationSchema),
    defaultValues: createPasswordFormDefaultValues,
  });

  const togglePasswordVisibility = (field: any) => {
    setPasswordVisibility((prev: any) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const createPasswordDataArray = getCreatePasswordDataArray(
    togglePasswordVisibility,
    passwordVisibility
  );

  const { handleSubmit } = methods;

  const [postCreatePasswordTrigger, postCreatePasswordStatus] =
    usePostCreatePasswordMutation();

  const onSubmit = async (data: any) => {
    const updatedData = { email, new_password: data?.newPassword };
    try {
      await postCreatePasswordTrigger(updatedData).unwrap();
      successSnackbar("Password Changed Successfully! Sign In to Continue");
      router.push(AUTH.SIGN_IN);
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    createPasswordDataArray,
    postCreatePasswordStatus,
  };
}
