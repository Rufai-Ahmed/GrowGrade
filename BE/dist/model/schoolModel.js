"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schoolModel = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    schoolName: {
        type: String,
    },
    token: {
        type: String,
    },
    schoolCode: {
        type: String,
        unique: true,
    },
    status: {
        type: String,
    },
    verify: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("schools", schoolModel);
