"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const schoolRouter_1 = __importDefault(require("./router/schoolRouter"));
const mainApp = (app) => {
    try {
        app.use("/api/v1/", schoolRouter_1.default);
        app.get("/", (req, res) => {
            try {
                res.status(200).json({
                    message: "success",
                });
            }
            catch (error) {
                res.status(404).json({
                    message: "failed",
                });
            }
        });
    }
    catch (error) { }
};
exports.mainApp = mainApp;
