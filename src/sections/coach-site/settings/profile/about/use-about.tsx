import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  aboutFormValidationSchema,
  aboutFormDefaultValues,
} from "./about.data";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useCallback, useEffect, useMemo } from "react";
import { useUpdateCoachProfileAboutMutation } from "@/services/coach-site/settings/profile";

export default function useAbout({ initialValues }: any) {
  const defaultValues = useMemo(
    () => aboutFormDefaultValues({ initialValues }),
    [initialValues]
  );

  const methods: any = useForm({
    resolver: yupResolver(aboutFormValidationSchema),
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
    formData.append("bio", data?.bio);
    if (data?.media !== initialValues?.intro) {
      formData.append("intro", data?.media);
    }

    try {
      await updateCoachProfileAboutTrigger(formData).unwrap();
      successSnackbar("About Updated Successfully!");
      reset(defaultValues);
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return { methods, handleSubmit, onSubmit, updateCoachProfileAboutStatus };
}
