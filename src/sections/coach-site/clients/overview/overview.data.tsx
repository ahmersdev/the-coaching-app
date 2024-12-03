export const getClientDetailsData = (data: any) => ({
  Name: data?.full_name ?? "---",
  "User Handle": data?.username ?? "---",
  Email: data?.email ?? "---",
  "Registration Date": data?.created_at,
  "Diet Plan Status": data?.is_diet_assigned,
  "Workout Plan Status": data?.is_training_assigned,
});
