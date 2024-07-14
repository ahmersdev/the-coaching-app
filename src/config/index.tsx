export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const ENCRYPTION_KEY: string =
  process.env.NEXT_PUBLIC_ENCRYPTION_SECRET_KEY || "";
export const STRIPE_PUBLIC_KEY: string =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
