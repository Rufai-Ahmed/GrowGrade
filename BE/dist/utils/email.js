"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToken = void 0;
const dotenv_1 = require("dotenv");
const ejs_1 = __importDefault(require("ejs"));
const googleapis_1 = require("googleapis");
const nodemailer_1 = __importDefault(require("nodemailer"));
const path_1 = __importDefault(require("path"));
(0, dotenv_1.config)();
const auth = new googleapis_1.google.auth.OAuth2(process.env.GOOGLE_ID, process.env.GOOGLE_SECRET, process.env.GOOGLE_REDIRECT);
auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH });
const sendToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accessToken = (yield auth.getAccessToken()).token;
        const transport = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                user: "abbeyrufai234@gmail.com",
                type: "OAuth2",
                clientId: process.env.GOOGLE_ID,
                clientSecret: process.env.GOOGLE_SECRET,
                refreshToken: process.env.GOOGLE_REFRESH,
                accessToken,
            },
        });
        const filePath = path_1.default.join(__dirname, "../views/index.ejs");
        const data = {
            name: user.schoolName,
            token: user.token,
            url: `http://localhost:5173/verify/${user._id}`,
        };
        const html = yield ejs_1.default.renderFile(filePath, { data });
        yield transport.sendMail({
            to: user.email,
            from: "GrowGrade <abbeyrufai234@gmail.com>",
            subject: "Account Verification",
            html,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.sendToken = sendToken;
