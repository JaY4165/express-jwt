export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: number;
      MONGOOSE_URI: string;
      NODE_ENV: 'test' | 'dev' | 'prod';
    }
  }
}
