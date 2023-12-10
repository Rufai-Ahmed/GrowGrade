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
exports.signInSchool = exports.verifySchool = exports.createSchool = void 0;
const enums_1 = require("../utils/enums");
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = __importDefault(require("crypto"));
const schoolModel_1 = __importDefault(require("../model/schoolModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const email_1 = require("../utils/email");
const createSchool = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, schoolName } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashed = yield bcrypt_1.default.hash(password, salt);
        const token = crypto_1.default.randomBytes(3).toString("hex");
        const schoolCode = crypto_1.default.randomBytes(4).toString("hex");
        const user = yield schoolModel_1.default.create({
            email,
            password: hashed,
            schoolCode,
            schoolName,
            token,
            status: enums_1.SCHOOL.ADMIN,
        });
        yield (0, email_1.sendToken)(user);
        return res.status(201 /* HTTP.CREATED */).json({
            message: "This school has successfully been created.",
            data: user,
        });
    }
    catch (error) {
        return res.status(404 /* HTTP.BAD */).json({
            message: "Sorry!! User not created. There was an error with this request.",
        });
    }
});
exports.createSchool = createSchool;
const verifySchool = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.body;
        const school = yield schoolModel_1.default.findOne({ token });
        if (school) {
            yield schoolModel_1.default.findByIdAndUpdate(school._id, {
                token: "",
                verify: true,
            }, { new: true });
            return res.status(201 /* HTTP.CREATED */).json({
                message: "This school has successfully been created.",
                data: school,
            });
        }
        else {
            return res.status(404 /* HTTP.BAD */).json({
                message: "Sorry!! School doesn't exist.",
            });
        }
    }
    catch (error) {
        return res.status(404 /* HTTP.BAD */).json({
            message: "Sorry!! User not created. There was an error with this request.",
        });
    }
});
exports.verifySchool = verifySchool;
const signInSchool = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, email } = req.body;
        const school = yield schoolModel_1.default.findOne({ email });
        if (school) {
            const passChecker = yield bcrypt_1.default.compare(password, school.password);
            if (passChecker) {
                if (school.verify && school.token === "") {
                    const encrypted = jsonwebtoken_1.default.sign({ id: school._id, status: school.status }, "jAs", { expiresIn: "2d" });
                    return res.status(201 /* HTTP.CREATED */).json({
                        message: "This school has successfully been created.",
                        data: encrypted,
                    });
                }
                else {
                    return res.status(404 /* HTTP.BAD */).json({
                        message: "Sorry!! Verify your account.",
                    });
                }
            }
            else {
                return res.status(404 /* HTTP.BAD */).json({
                    message: "Sorry!! Password is incorrect.",
                });
            }
        }
        else {
            return res.status(404 /* HTTP.BAD */).json({
                message: "Sorry!! Email doesn't exist.",
            });
        }
    }
    catch (error) {
        return res.status(404 /* HTTP.BAD */).json({
            message: "Sorry!! User not created. There was an error with this request.",
        });
    }
});
exports.signInSchool = signInSchool;
