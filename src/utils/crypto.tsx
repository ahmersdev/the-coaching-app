import { errorSnackbar } from "./api";

const base64ToArrayBuffer = (base64: any) => {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
};

const arrayBufferToHex = (buffer: any) => {
  const byteArray = new Uint8Array(buffer);
  const hexString = Array.from(byteArray, (byte) =>
    ("0" + (byte & 0xff).toString(16)).slice(-2)
  ).join("");
  return hexString;
};

const computeMac = async (data: any, keyBuffer: any) => {
  const macKey = await window.crypto.subtle.importKey(
    "raw",
    keyBuffer,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);

  const macArrayBuffer = await window.crypto.subtle.sign(
    "HMAC",
    macKey,
    dataBuffer
  );

  return arrayBufferToHex(macArrayBuffer);
};

const parseSerializedString = (serializedString: any) => {
  const match = serializedString.match(/^s:\d+:"(.*)";$/);
  if (match) {
    return match[1];
  }
  errorSnackbar("Invalid serialized string format");
};

export const decryptToken = async (encryptedToken: any, base64Key: any) => {
  try {
    // Step 1: Base64 decode the key and the encrypted payload
    const keyBuffer = base64ToArrayBuffer(base64Key);
    const decodedPayload = JSON.parse(atob(encryptedToken));

    const iv = base64ToArrayBuffer(decodedPayload.iv);
    const value = decodedPayload.value;
    const providedMac = decodedPayload.mac;

    // Step 2: Compute the MAC
    const macString = decodedPayload.iv + value;
    const computedMac = await computeMac(macString, keyBuffer);

    // Step 3: Verify the MAC
    if (computedMac !== providedMac) {
      errorSnackbar("Invalid MAC");
    }

    // Step 4: Decrypt the value
    const algorithm = { name: "AES-CBC", iv: iv };
    const key = await window.crypto.subtle.importKey(
      "raw",
      keyBuffer,
      algorithm,
      false,
      ["decrypt"]
    );
    const encryptedValueBuffer = base64ToArrayBuffer(value);

    const decrypted = await window.crypto.subtle.decrypt(
      algorithm,
      key,
      encryptedValueBuffer
    );

    const decoder = new TextDecoder();
    const decryptedText = decoder.decode(decrypted);

    // Step 5: Parse the serialized string format
    const parsedValue = parseSerializedString(decryptedText);

    return parsedValue;
  } catch (error: any) {
    errorSnackbar(`Decryption failed: ${error.message}`);
  }
};

export const validateBase64 = (base64: any) => {
  const base64Regex =
    /^(?:[A-Za-z0-9+\/]{4})*?(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
  return base64Regex.test(base64);
};
