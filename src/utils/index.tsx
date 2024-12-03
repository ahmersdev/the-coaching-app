export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

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
