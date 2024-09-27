export interface ITokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

export const getFatSecretAccessToken = async (): Promise<string | null> => {
  const clientId = process.env.NEXT_PUBLIC_FAT_SECRET_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_FAT_SECRET_CLIENT_SECRET;

  const tokenUrl = "https://oauth.fatsecret.com/connect/token";

  const headers = new Headers();
  headers.append("Content-Type", "application/x-www-form-urlencoded");

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
    scope: "basic",
  });

  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: headers,
      body: body,
    });

    const data: ITokenResponse = await response.json();

    if (data.access_token) {
      return data.access_token;
    } else {
      throw new Error("Failed to retrieve access token");
    }
  } catch (error) {
    console.error("Error fetching FatSecret access token:", error);
    return null;
  }
};
