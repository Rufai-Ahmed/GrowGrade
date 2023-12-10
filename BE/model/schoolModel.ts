import { Schema, model } from "mongoose";
import { iSchoolData } from "../utils/interface";
import { SCHOOL } from "../utils/enums";

const schoolModel = new Schema<iSchoolData>(
  {
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
  },
  { timestamps: true }
);

export default model<iSchoolData>("schools", schoolModel);
