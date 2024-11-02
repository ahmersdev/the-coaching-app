export const PHONE_REGEX = /^\+?(\d\s?){7,15}$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
export const PASSWORD_MESSAGE =
  "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character";
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const CLICK_EVENTS = {
  ENTER: "Enter",
};

export const GUARD_ROLES = {
  ADMIN: "admin" as const,
  COACH: "coach" as const,
};

export const CLIENT_ALERTS_STATUSES = {
  APPROVED: "accept",
  REJECTED: "reject",
};
