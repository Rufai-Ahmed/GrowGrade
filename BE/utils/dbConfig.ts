import { connect } from "mongoose";
import env from "dotenv";

env.config();

const url: string | undefined = process.env.DATABASE_URL;
export const mainConnection = () => {
  try {
    connect(url!).then(() => {
      console.log("db conected");
    });
  } catch (error) {
    console.log(error);
  }
};
