import doodle from "../../Assets/doodle.png";
import workers from "../../Assets/img.png";
import logo from "../../Assets/logo.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSchoolAccount } from "../../API/authApi";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const schema = yup.object({
    schoolName: yup.string().required(),
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

  const onHandleSubmit = handleSubmit((data : any) => {
    console.log(data);

    createSchoolAccount(data).then((res) => {
      console.log(res);
      navigate("/notify");
    });
  });

  return (
    <div>
      <div className="w-full flex h-screen bg-[]">
        <div
          className={`w-[50%] lg:block hidden h-full bg-bottom bg-[#445569]`}
          style={{ backgroundImage: `url(${doodle})` }}
        >
          <div className="w-full h-[35vh] text-[55px] font-bold flex-col bg-opacity-80 flex items-center text-center  justify-center text-white bg-[#445569]">
            Try GrowGrade now
            <div className="text-[14px] text-white text-center  ">
              Get a chance to explore the product to its fullest before <br />
              choosing your ideal plan
            </div>
          </div>

          <div className="w-full h-[calc(100vh-35vh)] flex justify-center  ">
            <img src={workers} className="w-[80%] object-cover  " alt="" />
          </div>
        </div>

        <div className="w-[100%] lg:w-[50%]  flex items-center  justify-center ">
          <div className="w-[70%] mb-10   ">
            <div className="w-full mt-10 pb-5 flex justify-center ">
              <img src={logo} className="w-[50%]" alt="" />
            </div>

            <div className="w-full text-center ">
              <div className="text-[27px] font-semibold ">
                Sign Up to your account
              </div>
              <div className="text-[14px] text-gray-500 ">
                Already have an account?{" "}
                <span className="text-[#414c51]">
                  <a href="/login" className="hover:underline font-[700]">
                    Sign in
                  </a>
                </span>{" "}
              </div>
            </div>

            <form className="w-full mt-10 " onSubmit={onHandleSubmit}>
              <div className="mt-5">
                <div className="text-[19px] text-[#5B5B5B] font-bold mb-1 ">
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
                type="submit"
                className="w-full  py-2 mt-10 text-[20px] font-bold rounded-lg text-[#fff] bg-gradient-to-r from-[#445569] to-[#445569]"
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
