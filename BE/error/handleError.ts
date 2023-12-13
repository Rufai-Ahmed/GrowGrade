import { NextFunction, Request, Response } from "express";
import { mainError } from "./mainError";

const errorMessage = (err: mainError, res: Response) => {
  res.status(404).json({
    name: err.name,
    message: err.message,
    status: err.status,
    success: err.success,
    stack: err.stack,
    error: err,
  });
};

export const handleError = (
  err: mainError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return errorMessage(err, res);
};
