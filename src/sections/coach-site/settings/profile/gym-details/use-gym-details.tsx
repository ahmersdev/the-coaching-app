import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  gymDetailsFormDefaultValues,
  gymDetailsFormValidationSchema,
} from "./gym-details.data";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useCallback, useEffect, useMemo } from "react";
import { useUpdateGymDetailsMutation } from "@/services/coach-site/settings/profile";

export default function useGymDetails({ initialValues }: any) {
  const defaultValues = useMemo(
    () => gymDetailsFormDefaultValues({ initialValues }),
    [initialValues]
  );

  const methods: any = useForm({
    resolver: yupResolver(gymDetailsFormValidationSchema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  const resetForm = useCallback(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const [updateGymDetailsTrigger, updateGymDetailsStatus] =
    useUpdateGymDetailsMutation();

  const onSubmit = async (data: any) => {
    const updatedData = {
      gym_id: String(initialValues?.gym_id),
      ...data,
    };

    try {
      await updateGymDetailsTrigger(updatedData).unwrap();
      successSnackbar("Gym Details Updated Successfully!");
      reset(defaultValues);
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return { methods, handleSubmit, onSubmit, updateGymDetailsStatus };
}
