import { RHFTextField } from "@/components/react-hook-form";
import * as Yup from "yup";

export const replyFormValidationSchema = Yup?.object()?.shape({
  reply: Yup?.string()?.trim()?.required("Required"),
});

export const replyFormDefaultValues = {
  reply: "",
};

export const replyDataArray = [
  {
    id: 1,
    componentProps: {
      name: "reply",
      label: "Add Reply",
      placeholder: "Enter your reply",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
    md: 5,
  },
];
