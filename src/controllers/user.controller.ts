import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { userModel } from "../models/users.model";
import jsonwebtoken from "jsonwebtoken";
import { userType } from "../types/types";

export const registerUser = (req : Request,res : Response) => {
  try {
    const user = new userModel(req.body);
    




  } catch (error: unknown) {}
};
