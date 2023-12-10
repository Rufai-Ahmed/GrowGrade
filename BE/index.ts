import express, { Application } from "express";
import cors from "cors";
import env from "dotenv";
import { mainConnection } from "./utils/dbConfig";
import { mainApp } from "./mainApp";

env.config();
const port: number = parseInt(process.env.PORT!);
const app: Application = express();

app.use(cors());
app.use(express.json());

mainConnection();
mainApp(app);
const server = app.listen(port, () => {
  console.log("server is up and running");
});

process.on("unhandledRejection", (error: Error) => {
  console.log("unhandledRejection", error);
  process.exit(1);
});

process.on("uncaughtException", (reason: any) => {
  console.log("uncaughtException", reason);

  server.close(() => {
    process.exit(1);
  });
});
