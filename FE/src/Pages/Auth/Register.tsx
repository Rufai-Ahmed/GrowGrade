import React from "react";
import doodle from "../../Assets/doodle.png";
import workers from "../../Assets/working.png";
import logo from "../../Assets/logo.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Register = () => {
  const schema = yup.object({
    schoolName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <div className="w-full flex h-screen ">
        <div
          className={`w-[50%] h-full bg-gray-100 bg-bottom `}
          style={{ backgroundImage: `url(${doodle})` }}
        >
          <div className="w-full h-[35vh] text-[55px] font-bold flex-col bg-gray-100 flex items-center justify-center ">
            Try GrowGrade now
            <div className="text-[14px] text-gray-500 text-center  ">
              Get a chance to explore the product to its fullest before <br />
              choosing your ideal plan
            </div>
          </div>

          <div className="w-full h-[calc(100vh-35vh)] flex justify-center items- ">
            <img src={workers} className="w-[80%] object-contain  " alt="" />
          </div>
        </div>

        <div className="w-[50%] h-full flex  justify-center ">
          <div className="w-[70%]   ">
            <div className="w-full mt-10 pb-5 flex justify-center ">
              <img src={logo} className="w-[50%]" alt="" />
            </div>

            <div className="w-full text-center ">
              <div className="text-[27px] font-semibold ">
                Sign Up to your account
              </div>
              <div className="text-[14px] text-gray-500 ">
                Already have an account?{" "}
                <span className="text-orange-400">Sign in</span>{" "}
              </div>
            </div>

            <form className="w-full mt-10 " onSubmit={onHandleSubmit}>
              <div className="mt-5">
                <div className="text-[19px] text-[#1965f2] font-bold mb-1 ">
                  School Name
                </div>
                <input
                  {...register("schoolName")}
                  type="text"
                  className="pl-4 bg-gray-200 h-10 flex w-full outline-none rounded-md "
                  placeholder="Please input your school's name here"
                />
                <div className="w-full text-[15px] text-[#1965f2]  ">
                  {errors.schoolName?.message}
                </div>
              </div>

              <div className="mt-5">
                <div className="text-[19px] text-[#27316f] font-bold mb-1 ">
                  Email
                </div>
                <input
                  {...register("email")}
                  type="email"
                  className="pl-4 bg-gray-200 h-10 flex w-full outline-none rounded-md "
                  placeholder="Please input your school's email here"
                />
                <div className="w-full text-[15px] text-[#27316f]  ">
                  {errors.email?.message}
                </div>
              </div>

              <div className="mt-5">
                <div className="text-[19px] text-[#f75d72] font-bold mb-1 ">
                  Password
                </div>
                <input
                  {...register("password")}
                  type="text"
                  className="pl-4 bg-gray-200 h-10 flex w-full outline-none rounded-md "
                  placeholder="Please enter a secure password here"
                />
                <div className="w-full text-[15px] text-[#f75d72]  ">
                  {errors.password?.message}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-10 text-[25px] font-bold rounded-lg text-[#27316f] bg-gradient-to-r from-[#07cddd] to-[#51e6ac]"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
