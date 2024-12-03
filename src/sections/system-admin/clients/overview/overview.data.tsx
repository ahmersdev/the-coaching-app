export const getClientDetailsData = (data: any) => ({
  Name: data?.full_name ?? "---",
  "User Handle": data?.username ?? "---",
  Email: data?.email ?? "---",
  "Registration Date": data?.created_at,
  "Trainer Name": data?.coach_name,
});
