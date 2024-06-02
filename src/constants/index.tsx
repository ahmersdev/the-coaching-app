export const PHONE_REGEX = /^\+?(\d\s?){7,15}$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
export const PASSWORD_MESSAGE =
  "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character";
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
