import * as Yup from "yup";

export const macroValidationSchema: any = Yup.object().shape({
  macros: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().trim().required("Title is Required"),
      protein: Yup.string().trim(),
      carbs: Yup.string().trim(),
      fat: Yup.string().trim(),
      type: Yup.string().nullable(),
      note: Yup.string().trim(),
    })
  ),
});
