export type userType = {
  name: string;
  email: string;
  authentication: {
    hash_password: string;
    salt: string;
    sessionToken: string;
  };
};
