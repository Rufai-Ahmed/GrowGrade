import { CiBellOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import pic from "../../../Assets/SCR-20231213-dldu.png";

export const Admin = () => {
  return (
    <div className="p-[20px]  w-[calc(100%-250px)] h-screen bg-slate-200 ">
      <div className="w-full h-[80px] bg-slate-600 rounded-md flex justify-between items-center ">
        <div className="pl-[18px] text-[23px] text-white font-bold ">
          Dashboard
        </div>

        <div className="w-[70%] h-[40px] bg-white rounded-md flex gap-2 items-center">
          <div className="text-[18px] pl-3 pr-1 ">
            <CiSearch />
          </div>
          <input
            type="text"
            className="w-full h-full rounded-md pl-4 outline-none"
            placeholder="Search for students/teachers/documents"
          />
        </div>

        <div className="w-[110px] h-[40px] flex justify-between items-center pr-[25px] ">
          <div className="text-[25px] ">
            <CiBellOn />
          </div>
          <div className="w-[40px] h-[40px] rounded-full border"></div>
        </div>
      </div>
      <div className="my-[30px] flex gap-[28px]   ">
        <div className="w-[25%] h-[100px] bg-white text-slate-600 rounded-md px-5 flex items-center gap-[40px] ">
          <div className="w-[60px] h-[60px] rounded-full border"></div>
          <div>
            <div className="text-[16px]">Students</div>
            <div className="text-[27px] font-bold">2972</div>
          </div>
        </div>
        <div className="w-[25%] h-[100px] bg-white text-slate-600 rounded-md px-5 flex items-center gap-[40px] ">
          <div className="w-[60px] h-[60px] rounded-full border"></div>
          <div>
            <div className="text-[16px]">Teachers</div>
            <div className="text-[27px] font-bold">205</div>
          </div>
        </div>
        <div className="w-[25%] h-[100px] bg-white text-slate-600 rounded-md px-5 flex items-center gap-[40px] ">
          <div className="w-[60px] h-[60px] rounded-full border"></div>
          <div>
            <div className="text-[16px]">Parents</div>
            <div className="text-[27px] font-bold">1050</div>
          </div>
        </div>
        <div className="w-[25%] h-[100px] bg-white text-slate-600 rounded-md px-5 flex items-center gap-[40px] ">
          <div className="w-[60px] h-[60px] rounded-full border"></div>
          <div>
            <div className="text-[16px]">Earnings</div>
            <div className="text-[27px] font-bold">$140,000.00</div>
          </div>
        </div>
      </div>

      <div className="w-full h-[79%]  grid grid-cols-3 gap-6 ">
        <div className="  grid col-span-2 gap-6">
          <div className="bg-white col-span-2 rounded-md p-4">
            <h2 className="text-[22px] font-bold text-slate-600">
              Total Earnings
            </h2>
            {/* <img src={pic} alt="" className="w-full h-[80%] object-contain" /> */}
          </div>
          <div className="bg-white rounded-md p-4 ">
            {" "}
            <div className="flex justify-between">
              <h2 className="text-[22px] font-bold text-slate-600">
                Total Performers
              </h2>
              <div className="text-[25px] text-gray-300">
                <BsThreeDots />
              </div>
            </div>
            {/* <div>
              <div className="flex gap-[55px] text-[16px] mx-5 -5 -3">
                <div className="">Week</div>
                <div>Month</div>
                <div>Year</div>
              </div>
              <hr />
            </div> */}
            {/* <div className="grid grid-cols-6 mt-4">
              <div className="bg-red-50">
                <div className="-7">Photo</div>
                <div className="w-[40px] h-[40px] rounded-full border -3"></div>
              </div>
              <div className="bg-red-100 col-span-2">
                <div className="-7">Name</div>
                <div className="-6 text-[18px] font-semibold ">
                  samuel ayomide
                </div>
                <div className="-6 text-[18px] font-semibold ">
                  samuel ayomide
                </div>
                <div className="-6 text-[18px] font-semibold ">
                  samuel ayomide
                </div>
                <div className="-6 text-[18px] font-semibold ">
                  samuel ayomide
                </div>
              </div>
              <div className="bg-red-200">
                <div className="-7">ID Nuer</div>
                <div className="-6 text-[18px] font-semibold ">ID:1243</div>
                <div className="-6 text-[18px] font-semibold ">ID:1243</div>
                <div className="-6 text-[18px] font-semibold ">ID:1243</div>
                <div className="-6 text-[18px] font-semibold ">ID:1243</div>
              </div>
              <div className="bg-red-300">
                <div className="-7">Standard</div>
                <div className="-6 text-[18px] font-semibold ">6th</div>
                <div className="-6 text-[18px] font-semibold ">6th</div>
                <div className="-6 text-[18px] font-semibold ">6th</div>
                <div className="-6 text-[18px] font-semibold ">6th</div>
              </div>
              <div className="bg-red-400">fkfrkrr</div>
            </div> */}
          </div>
          <div className="bg-white rounded-md p-4">
            {" "}
            <div className="flex justify-between">
              <h2 className="text-[22px] font-bold text-slate-600">
                Attendance
              </h2>
              <div className="text-[25px] text-gray-300">
                <BsThreeDots />
              </div>
            </div>
          </div>
        </div>
        <div className="  rounded-md grid grid-rows-3 gap-5 ">
          <div className="bg-white row-span-2 rounded-md p-4">
            <div className="flex justify-between">
              <h2 className="text-[22px] font-bold text-slate-600">
                Events calendar
              </h2>
              <div className="text-[25px] text-gray-300">
                <BsThreeDots />
              </div>
            </div>
          </div>
          <div className="bg-slate-600 rounded-md p-4">
            <div className="text-[25px] text-white w-[60%] font-semibold ">
              Join the community and find out more ...
            </div>

            <button className="bg-white py-4 px-[30px] mt-[75px] rounded-md">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
