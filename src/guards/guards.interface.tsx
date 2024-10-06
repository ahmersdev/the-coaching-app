export interface ISubscriptionStatusResponse {
  subscription_status: string;
  coach: {
    email: string;
  };
}

export interface IDecryptedValues {
  user_role?: string;
  [key: string]: any;
}
