import * as Yup from "yup";

export const validationSchema: any = Yup.object().shape({
  feedback: Yup.string().trim(),
});

export const defaultValues = {
  feedback: "",
};

export const getClientDetailsDataArray = (data: any) => {
  return {
    "Chest Size": data?.chest ?? "-",
    "Bicep Size": data?.arms ?? "-",
    "Waist Size": data?.waist ?? "-",
    "Hip Size": data?.hips ?? "-",
    "Shoulders Size": data?.shoulders ?? "-",
    "Thighs Size": data?.thighs ?? "-",
  };
};

export const getQuestionsList = (data: any) => {
  return {
    "How was your week?": data.how_was_your_week ?? "No answer provided",
    "Any stress depression?":
      data.any_stress_depression ?? "No answer provided",
    "How was macros?": data.how_was_macros ?? "No answer provided",
    "How many missed meals?":
      data.how_many_missed_meals ?? "No answer provided",
    "How many cheat meals?": data.how_many_cheat_meals ?? "No answer provided",
    "How was sleep?": data.how_was_sleep ?? "No answer provided",
    "How is appetite and digestion?":
      data.how_is_appetite_and_digestion ?? "No answer provided",
    "How is recovery?": data.how_is_recovery ?? "No answer provided",
    "Training strength?": data.training_strength ?? "No answer provided",
  };
};
