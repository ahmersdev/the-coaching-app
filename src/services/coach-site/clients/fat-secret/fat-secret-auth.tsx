import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import { IOAuthParams } from "./fat-secret.interface";

export const getOAuthParams = (
  url: string,
  method: string,
  params: Record<string, string>,
  consumerKey: string,
  consumerSecret: string
): IOAuthParams => {
  const oauth = new OAuth({
    consumer: { key: consumerKey, secret: consumerSecret },
    signature_method: "HMAC-SHA1",
    hash_function(base_string, key) {
      return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
    },
  });

  const oauthParams: IOAuthParams = {
    oauth_consumer_key: consumerKey,
    oauth_nonce: Math.random().toString(36).substring(2),
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_signature_method: "HMAC-SHA1",
  };

  const request_data = {
    url,
    method,
    data: { ...oauthParams, ...params },
  };

  oauthParams.oauth_signature = oauth.authorize(request_data).oauth_signature;

  return oauthParams;
};

export const getFatSecretAccessToken = async (): Promise<string | null> => {
  return null;
};
