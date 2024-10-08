import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import {
  getClientDetailsDataArray,
  validationSchema,
  defaultValues,
  getQuestionsList,
} from "./client-details-dialog.data";
import { useEffect, useState } from "react";
import { usePostClientImageFeedbackMutation } from "@/services/coach-site/clients-images";

export default function useClientDetailsDialog({
  showDetails,
  setShowDetails,
}: any) {
  const theme: any = useTheme();
  const [loadingImages, setLoadingImages] = useState<boolean[]>([]);
  const [singleImageView, setSingleImageView] = useState({
    openSingle: false,
    singleImg: null,
  });

  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

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
      setShowDetails({ open: false, details: null });
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  const detailsData = getClientDetailsDataArray(showDetails.details);

  useEffect(() => {
    if (showDetails.details) {
      reset({ feedback: showDetails.details?.coach_feedback ?? "" });
    }
  }, [showDetails.details, reset]);

  const mappedAnswers = getQuestionsList(showDetails.details);

  return {
    theme,
    methods,
    handleSubmit,
    onSubmit,
    detailsData,
    loadingImages,
    setLoadingImages,
    updateClientFeedbackStatus,
    singleImageView,
    setSingleImageView,
    mappedAnswers,
  };
}
