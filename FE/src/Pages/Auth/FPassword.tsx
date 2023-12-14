import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { resetSchoolPassword } from "../../API/authApi";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

export const FPassword = () => {
  const schema = yup.object({
    email: yup.string().required(),
  });

  const [state, setState] = useState(false);

  const navigate = useNavigate();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit((data: any) => {
    console.log(data);

    setState(true);
    resetSchoolPassword(data)
      .then((res) => {
        console.log(res);
        navigate(`/change-password/${res!.data?.id}`);
      })
      .catch(() => {});
  });

  return (
    <div>
      <div className="w-full flex justify-center h-screen items-center ">
        <form
          className="w-[70%] md:w-[50%] lg:w-[30%]"
          onSubmit={onHandleSubmit}
        >
          <div className="w-">
            <img src={logo} alt="" />
          </div>

          <div className="mt-5">
            <div className="w-full text-center mb-10 font-bold">
              Enter the email address associated with your account and we'll
              send you a link to reset your password
            </div>

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

          <button
            onClick={() => {}}
            type="submit"
            className="w-full flex justify-center gap-5  py-2 mt-10 text-[20px] font-bold rounded-lg text-[#fff] bg-gradient-to-r from-[#445569] to-[#445569]"
          >
            {state ? (
              <>
                <div className="border-gray-300 h-[30px] w-[30px] animate-spin rounded-full border-8 border-t-[#445569]" />{" "}
                Processing...
              </>
            ) : (
              "Continue"
            )}
          </button>

          <div className="text-center font-semibold mt-5">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#445569] font-bold">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
