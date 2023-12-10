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
      name: user.schoolName,
      token: user.token,
      url: `http://localhost:5173/verify/${user._id}`,
    };

    const html = await ejs.renderFile(filePath, { data });

    await transport.sendMail({
      to: user.email,
      from: "GrowGrade <abbeyrufai234@gmail.com>",
      subject: "Account Verification",
      html,
    });
  } catch (error) {
    console.log(error);
  }
};
