export const getInitials = (name: any) => {
  if (!name) return "";
  const initials = name
    .split(" ")
    .map((n: any) => n[0])
    .join("")
    .toUpperCase();
  return initials.substring(0, 2);
};
