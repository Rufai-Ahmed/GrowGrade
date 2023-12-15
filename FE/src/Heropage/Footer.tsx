import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from "../Assets/logo.png";
const Footer = () => {
  return (
    <div className="w-full h-[150px]  flex items-center justify-center">
      <div className="w-[70%] h-[100%] flex items-center flex-row justify-between">
        <div>
          <img src={logo} className="w-[200px]" />
        </div>

        <div>©Copyright 2023 , Teachmint Technologies Pvt. Ltd.</div>

        <div className="flex flex-row text-black text-[30px] gap-[20px]">
          <FaLinkedin />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
