import { useState } from "react";
import {
	IoIosNotificationsOutline,
	IoIosSearch,
} from "react-icons/io";
import { useSelector } from "react-redux";

export const Header = () => {
	const toggle = useSelector((state: any) => state.toggle);

	const [hover, setHover] = useState(false);

	const toggleHover = () => {
		setHover(!hover);
	};

	return (
		<div className="transition-all duration-300">
			<div
				className=" h-[70px] bg-white right-0 fixed z-10 md:w-[calc(100%-250px)] w-[calc(100%-80px)] flex justify-center items-center"
				style={
					{
						// width: toggle ? "calc(100% - 250px)" : "",
					}
				}
			>
				<div className="w-[95%]  shadow-lg rounded-[10px] p-3 flex items-center justify-between">
					<h3 className="flex text-[20px] font-bold cursor-pointer">
						Student
					</h3>

					<div className=" w-[75%] hidden lg:flex h-[40px] bg-white rounded-sm items-center border">
						<div className="ml-[10px] cursor-pointer">
							<IoIosSearch size={24} />
						</div>
						<input
							type="search"
							placeholder="Search For Student"
							className="flex flex-[0.99]  bg-white rounded-sm h-[100%] outline-none border-none ml-[15px]"
						/>
					</div>
					<div className="ml-[10px] cursor-pointer">
						<IoIosSearch size={24} />
					</div>
					<div className="flex items-center w-[70px]  justify-between">
						<div className="cursor-pointer">
							<IoIosNotificationsOutline size={24} />
						</div>
						<div
							className="w-[40px] h-[40px] rounded-[50%] bg-orange-500 flex justify-center items-center cursor-pointer
          "
							onMouseEnter={toggleHover}
							onMouseLeave={toggleHover}
						>
							H
							{hover && (
								<div className="absolute bg-white border border-gray-300 mt-2 h-[190px] top-16 transition-all  rounded-2xl duration-500 ease-in-out right-[10px] cursor-pointer w-[10%] xl:w-[65%] sm:w-[60%] max-lg:w-[65%] lg:w-[60%] max-w-xs-[10%] flex-wrap shadow-lg flex justify-center items-center flex-col">
									<div className=" w-[90%] h-[95%]">
										<div className="flex items-center">
											<div className="h-[90px] w-[90px] rounded-[50%] bg-[#F97316] flex justify-center items-center font-extrabold text-[40px]">
												H
											</div>
											<div className="ml-[30px] font-extrabold text-[15px]">
												<p>Name: Hayden</p>
												<p>Age: 17yrs</p>
												<p>Gender: Female</p>
											</div>
										</div>
										<div className="flex items flex-col mt-[10px] ml-[5px] gap-1">
											{" "}
											<div className="flex font-extrabold text-[15px]">
												<p>Email: haydenahmed@gmail.com</p>
											</div>
											<div className="flex font-extrabold text-[15px]">
												<p>Phone Number: +234-808-513-5110</p>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
