export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: number;
      MONGOOSE_URI: string;
      NODE_ENV: "test" | "dev" | "prod";
      JWT_PRIVATE_KEY: string;
      JWT_PUBLIC_KEY: string;
    }
  }
}
