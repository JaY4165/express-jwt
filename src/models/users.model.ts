import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  authentication: {
    hash_password: {
      type: String,
      required: true,
      select: false,
    },
    sessionToken: {
      type: String,
      required: true,
      select: false,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

interface comparePasswordsType {
  (providedPassword: string, hashedPassword: string): Promise<boolean>;
}

export const comparePasswords: comparePasswordsType = async (
  providedPassword,
  hashedPassword
) => {
  return await bcrypt.compare(providedPassword, hashedPassword);
};

//Export the model
export const userModel = mongoose.model("User", userSchema);
