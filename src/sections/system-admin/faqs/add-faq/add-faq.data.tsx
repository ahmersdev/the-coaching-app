import { RHFTextField } from "@/components/react-hook-form";
import * as Yup from "yup";

export const addFaqFormValidationSchema = Yup?.object()?.shape({
  question: Yup?.string()?.trim()?.required("Required"),
  answer: Yup?.string()?.trim()?.required("Required"),
});

export const addFaqFormDefaultValues = {
  question: "",
  answer: "",
};

export const addFaqDataArray = [
  {
    id: 1,
    componentProps: {
      name: "question",
      label: "Write Question",
      placeholder: "Enter question for FAQ",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 2,
    componentProps: {
      name: "answer",
      label: "Write Answer",
      placeholder: "Write answer...",
      multiline: true,
      minRows: 4,
    },
    component: RHFTextField,
    md: 5,
  },
];
