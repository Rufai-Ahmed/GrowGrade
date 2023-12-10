import { Application, Request, Response } from "express";

export const mainApp = (app: Application) => {
  try {
    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({
          message: "success",
        });
      } catch (error) {
        res.status(404).json({
          message: "failed",
        });
      }
    });
  } catch (error) {}
};
