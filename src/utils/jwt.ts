import jsonwebtoken, { SignOptions } from "jsonwebtoken";

export const signJwt = (payload: Object, options: SignOptions) => {
  const privateKey = Buffer.from(
    process.env.JWT_PRIVATE_KEY,
    "base64"
  ).toString("ascii");

  return jsonwebtoken.sign(payload, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
};

export const verifyJwt = <T>(token: string): T | null => {
  try {
    const publicKey = Buffer.from(
      process.env.JWT_PUBLIC_KEY,
      "base64"
    ).toString("ascii");

    return jsonwebtoken.verify(token, publicKey) as T;
  } catch (error) {
    return null;
  }
};
