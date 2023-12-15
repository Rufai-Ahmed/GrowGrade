import { Application, Request, Response } from "express";

export const mainApp = (app: Application) => {
  try {
    app.use("/api/v1/", router);

    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({
          message: "success",
        });

        app.all("*", (req: Request, res: Response, next: NextFunction) => {
          next(
            new mainError({
              name: "Route error",
              message:
                "This endpoint you entered ${req.originalUrl} is not support",
              status: HTTP.BAD,
              success: false,
            })
          );
        });
      } catch (error) {
        res.status(404).json({
          message: "failed",
        });
      }
    });
  } catch (error) {
    app.use(handleError);
  }
};
