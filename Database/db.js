import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;
export const Connection = () => {
  const URL =`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.wkupq9k.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(URL, { useNewUrlParser: true });
  mongoose.connection.on("connected", () => {
    console.log(`Database Is connected`);
  });
  mongoose.connection.on("disconnected", () => {
    console.log(`Database Is disconnected`);
  });
  mongoose.connection.on("error", () => {
    console.log("Error", error.message);
  });
};
export default Connection;