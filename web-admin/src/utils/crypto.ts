import CryptoJS from "crypto-js";

// Get secret key from environment
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

/**
 * Encrypt a string and make it URL-safe
 */
export function encryptParam(param: string): string {
  const ciphertext = CryptoJS.AES.encrypt(param, SECRET_KEY).toString();
  return encodeURIComponent(ciphertext);
}

/**
 * Decrypt a string from URL
 */
export function decryptParam(ciphertext: string): string {
  try {
    const decoded = decodeURIComponent(ciphertext);
    const bytes = CryptoJS.AES.decrypt(decoded, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted || "";
  } catch (error) {
    console.error("Decryption failed:", error);
    return "";
  }
}
