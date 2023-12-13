import { CiBellOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

export const Admin = () => {
  return (
    <div className="p-[20px]  w-full h-screen bg-slate-200 ">
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
            className="w-full h-full rounded-md "
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

      <div className="w-full bg-zinc-500 h-full flex">
        <div className="w-[70%] h-full bg-red-600"></div>
        <div className="w-[30%] h-full bg-green-50"></div>
      </div>
    </div>
  );
};
