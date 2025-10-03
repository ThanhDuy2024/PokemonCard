import mongoose from "mongoose";

export const databaseConnect = async () => {
  try {
    await mongoose.connect(String(process.env.DATABSE_URL));
    console.log("Database has connected!")
  } catch (error) {
    console.error("Database has not connected!")
  }
};