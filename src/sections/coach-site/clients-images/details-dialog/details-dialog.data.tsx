export const detailsDataArray = (data: any) => {
  return {
    "Chest Size": data?.chest ?? "-",
    "Bicep Size": data?.arms ?? "-",
    "Waist Size": data?.waist ?? "-",
    "Hip Size": data?.hips ?? "-",
    "Shoulders Size": data?.shoulders ?? "-",
    "Thighs Size": data?.thighs ?? "-",
  };
};

export const questionsList = [
  "How was your week?",
  "Any stress depression?",
  "How was macros?",
  "How many missed meals?",
  "How many cheat meals?",
  "How was sleep?",
  "How is appetite and digestion?",
  "How is recovery?",
  "Training strength?",
];
