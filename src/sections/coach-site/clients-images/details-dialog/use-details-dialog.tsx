import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { successSnackbar } from "@/utils/api";
import {
  detailsDataArray,
  validationSchema,
  defaultValues,
} from "./details-dialog.data";
import { useState } from "react";

export default function useDetailsDialog({ showDetails, setShowDetails }: any) {
  const theme: any = useTheme();
  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;
  const [loadingImages, setLoadingImages] = useState<boolean[]>([]);

  const onSubmit = async (data: any) => {
    successSnackbar("Feedback Added Successfully!");
    reset();
    setShowDetails({ open: false, details: null });
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
  };
}
