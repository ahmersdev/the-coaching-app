import * as Yup from "yup";

export const macroValidationSchema = Yup.object().shape({
  macros: Yup.array().of(
    Yup.object().shape({
      title: Yup.string()
        .trim()
        .when(["type"], {
          is: "High",
          then: (schema) => schema.required("Title is required"),
          otherwise: (schema) => schema.trim(),
        }),
      protein: Yup.number()
        .typeError("Protein must be a number")
        .positive("Protein must be a positive number")
        .nullable(),
      carbs: Yup.number()
        .typeError("Carbs must be a number")
        .positive("Carbs must be a positive number")
        .nullable(),
      fats: Yup.number()
        .typeError("Fats must be a number")
        .positive("Fats must be a positive number")
        .nullable(),
      type: Yup.string().oneOf(
        ["High", "Medium", "Low"],
        "Type must be one of High, Medium, or Low"
      ),
      note: Yup.string().trim(),
    })
  ),
});
