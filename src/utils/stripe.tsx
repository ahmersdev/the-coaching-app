import Cookies from "js-cookie";

export const getSecretFromCookies = () => {
  const clientSecret: any = Cookies.get("clientSecret");
  if (clientSecret) {
    return clientSecret;
  }
};
