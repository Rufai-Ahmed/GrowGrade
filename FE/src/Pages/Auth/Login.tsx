import doodle from "../../Assets/doodle.png";
import workers from "../../Assets/WhatsApp_Image_2023-12-11_at_9.04.45_PM-removebg-preview.png";
import logo from "../../Assets/logo.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSchoolAccount, loginSchoolAccount } from "../../API/authApi";
import { useNavigate } from "react-router-dom";
import {} from "react-spinner";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = () => {
  const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().min(6).required(),
  });

  const navigate = useNavigate();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [state, setState] = useState(false);
  const onHandleSubmit = handleSubmit((data: any) => {
    console.log(data);

    setState(true);

    loginSchoolAccount(data)
      .then((res) => {
        console.log(res);
        if (!res) {
          navigate("/login");
          setState(false);
        } else {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);

        navigate("/login");
      });
  });

  return (
    <div>
      {state ? (
        <div className="absolute items-center block w-full h-full p-6 bg-[rgba(0,0,0,0.5)] border border-gray-100 rounded-lg shadow-md   ">
          <div
            role="status"
            className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 flex items-center justify-center"
          >
            <div className="h-[100px] w-[500px] flex flex-col items-center justify-between">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <div className="text-[white] text-center">
                Loading...... <br /> This may take a few seconds please dont
                close the page
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="w-full flex h-screen bg-[]">
        <div
          className={`w-[50%] lg:block hidden h-full bg-bottom bg-[#445569]`}
          style={{ backgroundImage: `url(${doodle})` }}
        >
          <div className="w-full h-[30vh] text-[55px] font-bold flex-col bg-opacity-80 flex items-center text-center  justify-center text-white bg-[#445569]">
            Try GrowGrade now
            <div className="text-[14px] text-white text-center  ">
              Get a chance to explore the product to its fullest before <br />
              choosing your ideal plan
            </div>
          </div>

          <div className="w-full h-[calc(100vh-35vh)]  flex justify-center  ">
            <img src={workers} className="w-[80%] object-contain  " alt="" />
          </div>
        </div>

        <div className="w-[100%] lg:w-[50%]  flex items-center  justify-center ">
          <div className="w-[70%] mb-10   ">
            <div className="w-full mt-10 pb-5 flex justify-center ">
              <img src={logo} className="w-[50%]" alt="" />
            </div>

            <div className="w-full text-center ">
              <div className="text-[27px] font-semibold ">
                Login to your account
              </div>
              <div className="text-[14px] text-gray-500 ">
                Don't have an account?{" "}
                <span className="text-[#414c51]">
                  <a href="/Register" className="hover:underline font-[700]">
                    Regiter
                  </a>
                </span>{" "}
              </div>
            </div>

            <form className="w-full mt-10 " onSubmit={onHandleSubmit}>
              <div className="mt-5">
                <div className="text-[19px] text-[#5B5B5B] font-bold mb-1 ">
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
                <div className="text-[19px] text-[#5B5B5B] font-bold mb-1 ">
                  Password
                </div>
                <input
                  {...register("password")}
                  type="password"
                  className="pl-4 bg-gray-200 h-10 flex w-full outline-none rounded-md "
                  placeholder="Please enter a secure password here"
                />
                <div className="w-full text-[15px] text-[#f75d72]  ">
                  {errors.password?.message}
                </div>
              </div>

              <button
                onClick={() => {
                  setState(true);
                }}
                type="submit"
                className="w-full flex justify-center gap-5 py-2 mt-10 text-[20px] font-bold rounded-lg text-[#fff] bg-gradient-to-r from-[#445569] to-[#445569]"
              >
                {state ? (
                  <>
                    <div className="border-gray-300 h-[30px] w-[30px] animate-spin rounded-full border-8 border-t-[#445569]" />{" "}
                    Processing...
                  </>
                ) : (
                  "Login"
                )}
              </button>

              <Link to="/forgot-password">
                <div className="text-[#445569] text-[15px] text-center mt-5 font-bold ">
                  Forgot Password?
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
