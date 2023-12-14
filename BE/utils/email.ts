import { config } from "dotenv";
import ejs from "ejs";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import path from "path";
config();

const auth = new google.auth.OAuth2(
  process.env.GOOGLE_ID,
  process.env.GOOGLE_SECRET,
  process.env.GOOGLE_REDIRECT
);

auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH });

export const sendToken = async (user: any) => {
  try {
    const accessToken: any = (await auth.getAccessToken()).token;

    const transport = nodemailer.createTransport({
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

    const filePath = path.join(__dirname, "../views/index.ejs");

    const data = {
      token: user.token,
      schoolName: user.schoolName,
    };

    const html = await ejs.renderFile(filePath, { data });
    const Mailer = {
      from: "GrowGrade <abbeyrufai234@gmail.com>",
      to: user.email,
      subject: "Account verification",
      html,
    };

    await transport.sendMail(Mailer).then(() => {
      console.log("send");
    });
  } catch (error) {
    console.log(error);
  }
};

export const sendResetPasswordEmail = async (user: any) => {
  try {
    const accessToken: any = (await auth.getAccessToken()).token;

    const transporter = nodemailer.createTransport({
      service: "gemail",
      auth: {
        type: "OAuth2",
        user: "abbeyrufai234@gmail.com",
        clientSecret: process.env.GOOGLE_SECRET,
        clientId: process.env.GOOGLE_ID,
        refreshToken: process.env.GOOGLE_REFRESH,
        accessToken,
      },
    });

    const getFile = path.join(__dirname, "../views/verifyPassword.ejs");

    const data = {
      token: user.token,
      email: user.email,
      url: `${URL}/user-verify/${user._id}`,
    };

    const html = await ejs.renderFile(getFile, { data });

    const mailer = {
      from: "GrowGrade <abbeyrufai234@gmail.com>",
      to: user.email,
      subject: "Password Reset",
      html,
    };

    await transporter.sendMail(mailer).then(() => {
      console.log("send");
    });
  } catch (error) {
    return error;
  }
};
