import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  myProfileFormValidationSchema,
  myProfileFormDefaultValues,
} from "./my-profile.data";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useCallback, useEffect, useMemo } from "react";
import { useUpdateCoachProfileAboutMutation } from "@/services/coach-site/settings/profile";

export default function useMyProfile({ initialValues }: any) {
  const defaultValues = useMemo(
    () => myProfileFormDefaultValues({ initialValues }),
    [initialValues]
  );

  const methods: any = useForm({
    resolver: yupResolver(myProfileFormValidationSchema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  const resetForm = useCallback(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const [updateCoachProfileAboutTrigger, updateCoachProfileAboutStatus] =
    useUpdateCoachProfileAboutMutation();

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("coach_id", initialValues?.coach_id);
    formData.append("full_name", data?.name);
    formData.append("phone", data?.phone);

    try {
      await updateCoachProfileAboutTrigger(formData).unwrap();
      successSnackbar("Profile Updated Successfully!");
      reset(defaultValues);
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return { methods, handleSubmit, onSubmit, updateCoachProfileAboutStatus };
}
