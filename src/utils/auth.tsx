import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { ENCRYPTION_KEY } from "@/config";

export const getTokenFromCookies = () => {
  const encryptedToken: any = Cookies.get("authentication_token");
  if (encryptedToken) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedToken, ENCRYPTION_KEY);
    const decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedToken;
  }
};

export const getDetailsFromCookies = () => {
  const details: any = Cookies.get("authentication_details");
  if (details) {
    return details;
  }
};
