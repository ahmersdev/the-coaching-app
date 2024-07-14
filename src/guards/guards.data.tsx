import { AUTH } from "@/constants/routes";

export const excludedAuthPaths = [
  AUTH.OTP,
  AUTH.FORGOT_PASSWORD,
  AUTH.CREATE_PASSWORD,
];
