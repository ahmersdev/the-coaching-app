import * as Yup from "yup";

export const assignDietValidationSchema: any = Yup.object().shape({
  days: Yup.array().of(
    Yup.object().shape({
      meals: Yup.array().of(
        Yup.object().shape({
          meal_title: Yup.string().trim().required("Exercise Name is Required"),
          serving_size: Yup.number()
            .typeError("Must be a Number")
            .required("Serving Size is Required"),
          serving_unit: Yup.string(),
          fat: Yup.string(),
          carbohydrates: Yup.string(),
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
      meal_title: "",
      serving_size: "",
      serving_unit: "g",
      fat: "",
      carbohydrates: "",
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
