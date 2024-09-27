declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_BASE_URL: string;
    NEXT_PUBLIC_ENCRYPTION_SECRET_KEY: string;
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
    NEXT_PUBLIC_FAT_SECRET_CLIENT_ID: string;
    NEXT_PUBLIC_FAT_SECRET_CLIENT_SECRET: string;
  }
}
