export const getClientDetailsData = (data: any) => ({
  Name: data?.full_name ?? "---",
  "User Handle": data?.username ?? "---",
  Email: data?.email ?? "---",
  "Registration Date": data?.created_at,
  "Diet Plan Status": data?.is_diet_assigned,
  "Workout Plan Status": data?.is_training_assigned,
});

export const getBodyDetailsData = (data: any) => {
  const heightInFeet = data?.height ?? 0;
  const weight = data?.weight ?? 0;

  const heightInMeters = heightInFeet * 0.3048;

  const bmi =
    heightInMeters > 0
      ? (weight / (heightInMeters * heightInMeters)).toFixed(2)
      : "-";

  return {
    Height: heightInFeet ? `${heightInFeet} ft` : "-",
    Weight: weight ? `${weight} kg` : "-",
    BMI: bmi,
  };
};
