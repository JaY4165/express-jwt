import mongoose from "mongoose";

const connect = async () => {
  try {
    const uri: string = process.env.MONGOOSE_URI as string;
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(uri);
    console.log("Connected to database");
    return conn;
  } catch (error) {
    console.log("could not connect to the database");
    return error;
  }
};

export default connect;
