import { Response, Request } from "express";
import { HTTP, SCHOOL } from "../utils/enums";
import bcrypt from "bcrypt";
import crypto from "crypto";
import schoolModel from "../model/schoolModel";
import jwt from "jsonwebtoken";

export const createSchool = async (req: Request, res: Response) => {
  try {
    const { email, password, schoolName } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const token = crypto.randomBytes(3).toString("hex");
    const schoolCode = crypto.randomBytes(4).toString("hex");

    const user = await schoolModel.create({
      email,
      password: hashed,
      schoolCode,
      schoolName,
      token,
      status: SCHOOL.ADMIN,
    });

    return res.status(HTTP.CREATED).json({
      message: "This school has successfully been created.",
      data: user,
    });
  } catch (error) {
    return res.status(HTTP.BAD).json({
      message:
        "Sorry!! User not created. There was an error with this request.",
    });
  }
};

export const verifySchool = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    const school = await schoolModel.findOne({ token });

    if (school) {
      await schoolModel.findByIdAndUpdate(
        school._id,
        {
          token: "",
          verify: true,
        },
        { new: true }
      );

      return res.status(HTTP.CREATED).json({
        message: "This school has successfully been created.",
        data: school,
      });
    } else {
      return res.status(HTTP.BAD).json({
        message: "Sorry!! School doesn't exist.",
      });
    }
  } catch (error) {
    return res.status(HTTP.BAD).json({
      message:
        "Sorry!! User not created. There was an error with this request.",
    });
  }
};

export const signInSchool = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;

    const school = await schoolModel.findOne({ email });

    if (school) {
      const passChecker = await bcrypt.compare(password, school.password);

      if (passChecker) {
        if (school.verify && school.token === "") {
          const encrypted = jwt.sign(
            { id: school._id, status: school.status },
            "jAs",
            { expiresIn: "2d" }
          );

          return res.status(HTTP.CREATED).json({
            message: "This school has successfully been created.",
            data: encrypted,
          });
        } else {
          return res.status(HTTP.BAD).json({
            message: "Sorry!! Verify your account.",
          });
        }
      } else {
        return res.status(HTTP.BAD).json({
          message: "Sorry!! Password is incorrect.",
        });
      }
    } else {
      return res.status(HTTP.BAD).json({
        message: "Sorry!! Email doesn't exist.",
      });
    }
  } catch (error) {
    return res.status(HTTP.BAD).json({
      message:
        "Sorry!! User not created. There was an error with this request.",
    });
  }
};
