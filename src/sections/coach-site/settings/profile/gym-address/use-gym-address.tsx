import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  gymAddressFormValidationSchema,
  gymAddressFormDefaultValues,
} from "./gym-address.data";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useCallback, useEffect, useMemo } from "react";
import { useUpdateGymAddressMutation } from "@/services/coach-site/settings/profile";

export default function useGymAddress({ initialValues }: any) {
  const defaultValues = useMemo(
    () => gymAddressFormDefaultValues({ initialValues }),
    [initialValues]
  );

  const methods: any = useForm({
    resolver: yupResolver(gymAddressFormValidationSchema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  const resetForm = useCallback(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const [updateGymAddressTrigger, updateGymAddressStatus] =
    useUpdateGymAddressMutation();

  const onSubmit = async (data: any) => {
    const updatedData = {
      address_id: String(initialValues?.address_id),
      ...data,
    };

    try {
      await updateGymAddressTrigger(updatedData).unwrap();
      successSnackbar("Gym Address Updated Successfully!");
      reset(defaultValues);
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return { methods, handleSubmit, onSubmit, updateGymAddressStatus };
}
