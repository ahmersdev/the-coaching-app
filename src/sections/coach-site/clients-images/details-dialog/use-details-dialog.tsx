import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import {
  detailsDataArray,
  validationSchema,
  defaultValues,
} from "./details-dialog.data";
import { useState } from "react";
import { usePostClientImageFeedbackMutation } from "@/services/coach-site/clients-images";

export default function useDetailsDialog({ showDetails, setShowDetails }: any) {
  const theme: any = useTheme();
  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;
  const [loadingImages, setLoadingImages] = useState<boolean[]>([]);

  const [updateClientFeedbackTrigger, updateClientFeedbackStatus] =
    usePostClientImageFeedbackMutation();

  const onSubmit = async (data: any) => {
    const updatedData = {
      details_id: showDetails?.details?.details_id,
      feedback: data?.feedback,
    };
    try {
      await updateClientFeedbackTrigger(updatedData).unwrap();
      successSnackbar("Feedback Added Successfully!");
      reset();
      setShowDetails({ open: false, details: null });
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  const detailsData = detailsDataArray(showDetails.details);

  return {
    theme,
    methods,
    handleSubmit,
    onSubmit,
    detailsData,
    loadingImages,
    setLoadingImages,
    updateClientFeedbackStatus,
  };
}
