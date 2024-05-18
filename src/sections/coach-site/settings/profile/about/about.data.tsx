import { RHFTextField, RHFUploadFile } from "@/components/react-hook-form";
import * as Yup from "yup";

export const aboutFormValidationSchema: any = Yup?.object()?.shape({
  bio: Yup?.string()?.trim()?.required("Required"),
  media: Yup?.mixed()?.nullable()?.required("Required"),
});

export const aboutFormDefaultValues: any = {
  bio: "",
  media: null,
};

export const aboutDataArray = [
  {
    id: 1,
    componentProps: {
      name: "bio",
      label: "Add Bio",
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 10,
  },
  {
    id: 2,
    componentProps: {
      name: "media",
    },
    component: RHFUploadFile,
    md: 5,
  },
];
