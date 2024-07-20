export interface AuthState {
  token: string | null;
  guardCheck: "false" | "true" | string;
}
