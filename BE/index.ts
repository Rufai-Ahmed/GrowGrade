import express, { Application, json } from "express";
import cors from "cors";
import env from "dotenv";
import { mainConnection } from "./utils/dbConfig";
import { mainApp } from "./mainApp";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import mongoConnect from "connect-mongodb-session";
env.config();

const port: number = parseInt(process.env.PORT!);
const app: Application = express();

app.use(json());
app.use(cors({ origin: "*" }));
const connect = mongoConnect(session);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "js",
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
      sameSite: "lax",
      secure: false,
    },
    store: new connect({
      uri: process.env.DATABASE_URL!,
      collection: "sessions",
    }),
  })
);

mainApp(app);
const server = app.listen(port, () => {
  mainConnection();
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
