import Cookies from "js-cookie";
import { DecryptedValues } from "./utils.types";
import { ENCRYPTION_KEY } from "@/config";
import { decryptToken, validateBase64 } from "./crypto";

export const getTokenFromCookies = () => {
  const encryptedToken: any = Cookies.get("authentication_token");
  if (encryptedToken) {
    return encryptedToken;
  }
};

export const decryptValuesFromToken = async (
  encryptedToken: string
): Promise<DecryptedValues | null> => {
  let base64Key = ENCRYPTION_KEY;

  if (base64Key.startsWith("base64:")) {
    base64Key = base64Key.substring(7);
  }

  if (!validateBase64(encryptedToken) || !validateBase64(base64Key)) {
    console.warn("Invalid Base64 string");
    return null;
  }

  try {
    const decrypted = await decryptToken(encryptedToken, base64Key);
    const [coach_id, user_role] = decrypted.split("-");

    return { coach_id, user_role };
  } catch (error: any) {
    console.warn("Failed to decrypt token");
    return null;
  }
};
