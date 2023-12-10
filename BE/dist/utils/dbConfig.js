"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainConnection = void 0;
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const url = process.env.DATABASE_URL;
const mainConnection = () => {
    try {
        (0, mongoose_1.connect)(url).then(() => {
            console.log("db conected");
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.mainConnection = mainConnection;
