"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const schoolRouter_1 = __importDefault(require("./router/schoolRouter"));
const mainError_1 = require("./error/mainError");
const handleError_1 = require("./error/handleError");
const mainApp = (app) => {
    try {
        app.use("/api/v1/", schoolRouter_1.default);
        app.get("/", (req, res) => {
            try {
                res.status(200).json({
                    message: "success",
                });
                app.all("*", (req, res, next) => {
                    next(new mainError_1.mainError({
                        name: "Route error",
                        message: "This endpoint you entered ${req.originalUrl} is not support",
                        status: 404 /* HTTP.BAD */,
                        success: false,
                    }));
                });
            }
            catch (error) {
                res.status(404).json({
                    message: "failed",
                });
            }
        });
    }
    catch (error) {
        app.use(handleError_1.handleError);
    }
};
exports.mainApp = mainApp;
