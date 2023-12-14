import { useState } from "react";
import pix from "../../Assets/email logo.png";
import VerifyCode from "./VerifyCode";
import { FadeLoader } from "react-spinners";
import { useSelector } from "react-redux";

const Verification = () => {
  const loading = useSelector((state: any) => state.loading);

  return (
    <div className="w-full h-[100vh] bg-[white]">
      <div className="flex items-center justify-around pt-[100px]">
        <div className="w-[85%] md:w-[37%] h-[561px]  border-[#445569] border-[2px] flex items-center justify-center rounded-[20px]">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="h-[150px] w-[150px] ">
              <img src={pix} className="animate-bounce " />
            </div>
            <div className="font-bold text-[20px]">Verify Your Email</div>
            <div className="">
              Please Enter the 4 digit sent <br /> to yourname@gmail.com
            </div>
            <div className="flex">
              <VerifyCode />
            </div>

            <div className="text-[blue] cursor-pointer">Resend Code</div>
            <div
              className="w-[240px] h-[55px] rounded-[5px] bg-[#445569] flex items-center justify-center text-[white] cursor-pointer "
              onClick={() => {}}
            >
              {loading ? (
                <div className="border-gray-300 h-5 w-5 animate-spin rounded-full border-[5px] border-t-white" />
              ) : (
                "Continue"
              )}
            </div>
            <div className="text-decoration: underline text-[blue] cursor-pointer">
              change your email
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
