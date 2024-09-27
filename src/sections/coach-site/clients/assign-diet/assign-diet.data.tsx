import * as Yup from "yup";

export const assignDietValidationSchema: any = Yup.object().shape({
  days: Yup.array().of(
    Yup.object().shape({
      meals: Yup.array().of(
        Yup.object().shape({
          meal_name: Yup.mixed()
            .nullable()
            .required("Exercise Name is Required"),
          serving_size: Yup.string()
            .trim()
            .required("Serving Size is Required"),
          serving_unit: Yup.string(),
          fat: Yup.string(),
          carbohydrate: Yup.string(),
          protein: Yup.string(),
          fibre: Yup.string(),
          calories: Yup.string(),
          sugar: Yup.string(),
          sodium: Yup.string(),
          note: Yup.string().trim(),
        })
      ),
    })
  ),
});

export const mealDefaultValues = {
  meals: [
    {
      meal_name: null,
      serving_size: "",
      serving_unit: "g",
      fat: "",
      carbohydrate: "",
      protein: "",
      fibre: "",
      calories: "",
      sugar: "",
      sodium: "",
      note: "",
    },
  ],
};

export const assignDietDefaultValues = {
  days: [mealDefaultValues],
};
