import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  getPasswordDataArray,
  passwordFormDefaultValues,
  passwordFormValidationSchema,
} from "./password.data";
import { useState } from "react";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useUpdateAdminPasswordMutation } from "@/services/admin/settings";

export default function usePassword({ initialValues }: any) {
  const [passwordVisibility, setPasswordVisibility] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const methods: any = useForm({
    resolver: yupResolver(passwordFormValidationSchema),
    defaultValues: passwordFormDefaultValues,
  });

  const togglePasswordVisibility = (field: any) => {
    setPasswordVisibility((prev: any) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const passwordDataArray = getPasswordDataArray(
    togglePasswordVisibility,
    passwordVisibility
  );

  const { handleSubmit, reset } = methods;

  const [updateAdminPasswordTrigger, updateAdminPasswordStatus] =
    useUpdateAdminPasswordMutation();

  const onSubmit = async (data: any) => {
    const updatedData = {
      coach_id: String(initialValues?.coach_id),
      current_password: data?.currentPassword,
      new_password: data?.newPassword,
    };

    try {
      await updateAdminPasswordTrigger(updatedData).unwrap();
      successSnackbar("Password Updated Successfully!");
      reset(passwordFormDefaultValues);
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    passwordDataArray,
    updateAdminPasswordStatus,
  };
}
