import { RHFTextField } from "@/components/react-hook-form";
import * as Yup from "yup";

export const contactUsValidationSchema: any = Yup?.object()?.shape({
  yourName: Yup?.string()?.trim()?.required("Required"),
  yourEmail: Yup?.string()
    ?.trim()
    ?.email("Invalid email")
    ?.required("Required"),
  yourSubject: Yup?.string()?.trim()?.required("Required"),
  yourPhone: Yup?.string()?.trim()?.required("Required"),
  yourMessage: Yup?.string()?.trim()?.required("Required"),
});

export const contactUsDefaultValues: any = {
  yourName: "",
  yourEmail: "",
  yourSubject: "",
  yourPhone: "",
  yourMessage: "",
};

export const contactUsDataArray = [
  {
    id: 1,
    componentProps: {
      name: "yourName",
      label: "Your Name",
      placeholder: "Enter Your Name",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "yourEmail",
      label: "Your Email",
      placeholder: "Enter Your Email",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "yourSubject",
      label: "Your Subject",
      placeholder: "Enter Your Subject",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "yourPhone",
      label: "Your Phone Number",
      placeholder: "Enter Your Phone Number",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "yourMessage",
      label: "Tell us what you need help with:",
      placeholder: "Enter a topic, like “channel problem...”",
      multiline: true,
      rows: 4,
    },
    component: RHFTextField,
  },
];
