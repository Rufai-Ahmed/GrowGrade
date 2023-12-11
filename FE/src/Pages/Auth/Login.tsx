import { useState } from "react";
import pix1 from "../../Assets/logo.png";
import pix from "../../Assets/working.png";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchoolAccount } from "../../API/authApi";
// import { SyncLoader } from "react-spinners";

export const Login = () => {
	const navigate = useNavigate();
	const [toggle, setToggle] = useState<boolean>(false);
	const schema = yup.object({
		email: yup.string().email().required("email must be filled"),
		password: yup.string().min(6).required("password must be filled"),
	});

	const {
		// reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	// const navigate = useNavigate();

	let onHandleSubmit = handleSubmit((data: any) => {
		loginSchoolAccount(data).then((res) => {
			navigate("/");
		});
	});

	return (
		<div className="flex h-screen">
			{/* Right Part - Signin Form */}
			<div className="flex-1 p-8 mt-[90px]">
				<img
					src={pix1}
					alt=""
					className="w-[250px] ml-[160px] mb-[20px]"
				/>
				<h2 className="text-3xl font-semibold mb-8 ml-[130px]">
					Login To Your Account
					<p className="text-[12px] ml-[70px]">
						Don't have an account?{" "}
						<span className=" text-red-500">
							<a
								href="/register"
								className=" cursor-pointer hover:underline"
							>
								Sign up
							</a>
						</span>
					</p>
				</h2>

				<form
					className="space-y-4"
					onSubmit={onHandleSubmit}
				>
					<div>
						<label
							htmlFor="email"
							className="block text-[17px] font-bold text-[#747F95]"
						>
							Email Address
						</label>
						<input
							className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
							placeholder="Please input your school's email here"
							required
							{...register("email")}
						/>
						{errors.email?.message && (
							<div className="text-[12px] text-red-600 mt-2">
								{errors.email?.message}
							</div>
						)}
					</div>

					<div>
						<label
							// htmlFor="password"
							className="block text-[17px] font-bold text-[#EE8D9E]"
						>
							Password
						</label>
						<input
							className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
							placeholder="Please input your password here"
							required
							{...register("password")}
							type="password"
						/>

						{errors.password?.message && (
							<div className="text-[12px] text-red-600 mt-2">
								{errors.password?.message}
							</div>
						)}
					</div>

					<button
						type="submit"
						className="bg-gradient-to-r from-[#07cddd] to-[#51e6ac] text-white py-4 px-56 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ml-[60px]"
					>
						Log in
					</button>
				</form>
			</div>
			{/* Left Part - Background Image and TaskView Write-up */}
			<div
				className="flex-1 bg-cover bg-center p-8 text-white relative"
				style={{
					backgroundImage: `url(${pix})`,
				}}
			>
				<div className="absolute inset-0 bg-black opacity-40"></div>
				<div className="absolute inset-0 flex flex-col items-center justify-end mb-20">
					<h2 className="text-4xl font-semibold mb-4">GROWGRADE</h2>
					<p className="w-[300px] text-center text-aling:center">
						Be the best School and end the use of paperwork in school
						using GROWGRADE
					</p>
				</div>
			</div>
		</div>
	);
};

//  default Signup;
