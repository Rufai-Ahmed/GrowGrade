import { Response, Request } from "express";
import { HTTP, SCHOOL } from "../utils/enums";
import bcrypt from "bcrypt";
import crypto from "crypto";
import schoolModel from "../model/schoolModel";
import jwt from "jsonwebtoken";
import { sendResetPasswordEmail, sendToken } from "../utils/email";

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

    await sendToken(user);

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
export const resetUserPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const getUser = await schoolModel.findOne({ email });

    if (getUser) {
      const token = crypto.randomBytes(16).toString("hex");

      const checkUser = await schoolModel.findByIdAndUpdate(
        getUser._id,
        { token },
        { new: true }
      );

      sendResetPasswordEmail(checkUser);
      return res.status(HTTP.OK).json({
        id: getUser._id,
        message: "An email has been sent to confirm your request",
      });
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

export const changeUserPassword = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    const { userID } = req.params;

    const getUser = await schoolModel.findOne({ userID });

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    if (getUser) {
      if (getUser.token !== "" && getUser.verify) {
        await schoolModel.findByIdAndUpdate(
          getUser._id,
          {
            password: hashedPassword,
            token: "",
          },
          { new: true }
        );

        return res.status(HTTP.OK).json({
          message: "You password has been changed",
        });
      } else {
        return res.status(HTTP.BAD).json({
          message: "Please go and verify your account",
        });
      }
    } else {
      return res.status(HTTP.BAD).json({
        message: "No user found",
      });
    }
  } catch (error) {
    return res.status(HTTP.BAD).json({
      message: "Error creating user: ",
    });
  }
};

export const getAllUsers = async (req: any, res: Response) => {
  try {
    const getUser = await schoolModel.find();
    const data = req.data;

    if (data.status === "admin") {
      return res.status(HTTP.OK).json({
        message: " user found",
        data: getUser,
      });
    } else {
      return res.status(HTTP.BAD).json({
        message: "You don't have the pass for this",
      });
    }
  } catch (error) {
    return res.status(HTTP.BAD).json({
      message: "Error creating user: ",
    });
  }
};

export const getAllUser = async (req: any, res: Response) => {
  try {
    const getUser = await schoolModel.find();

    return res.status(HTTP.OK).json({
      message: "user found",
      data: getUser,
    });
  } catch (error) {
    return res.status(HTTP.BAD).json({
      message: "Error creating user: ",
    });
  }
};

export const getUseInfo = async (req: any, res: Response) => {
  try {
    const { userID } = req.params;
    const getUser = await schoolModel.find(userID);

    return res.status(HTTP.OK).json({
      message: "user found",
      data: getUser,
    });
  } catch (error) {
    return res.status(HTTP.BAD).json({
      message: "Error creating user: ",
    });
  }
};

export const logOutUser = async (req: any, res: Response) => {
  try {
    res.cookie("peter", {
      maxAge: 0,
      secure: false,
      sameSite: "lax",
    });

    req.session.destroy();

    return res.status(HTTP.OK).json({
      message: "user has een logged out",
    });
  } catch (error) {
    return res.status(HTTP.BAD).json({
      message: "Error creating user: ",
    });
  }
};

export const getCookieUser = async (req: any, res: Response) => {
  try {
    const data = req.session.data;
    const read = req.session.cookie;

    return res.status(HTTP.OK).json({
      message: "user cookie data",
      data: { data, read },
    });
  } catch (error) {
    return res.status(HTTP.BAD).json({
      message: "Error creating user: ",
    });
  }
};
