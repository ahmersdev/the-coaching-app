import * as Yup from "yup";

export const assignDietValidationSchema: any = Yup.object().shape({
  days: Yup.array().of(
    Yup.object().shape({
      meals: Yup.array().of(
        Yup.object().shape({
          meal_title: Yup.mixed().required("Meal Name is Required"),
          serving_size: Yup.number().required("Serving Size is Required"),
          serving_unit: Yup.string(),
          fat: Yup.number(),
          carbohydrates: Yup.number(),
          protein: Yup.number(),
          fibre: Yup.number(),
          calories: Yup.number(),
          sugar: Yup.number(),
          sodium: Yup.number(),
          note: Yup.string().trim(),
        })
      ),
    })
  ),
});
