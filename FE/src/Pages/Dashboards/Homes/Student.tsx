import { IoIosSearch } from "react-icons/io";
import { Header } from "../../../components/Header";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useSelector } from "react-redux";

export const Student = () => {
  const toggle = useSelector((state: any) => state.toggle);
  console.log(toggle);

  return (
    <div className="w-full flex justify-end ">
      <Header />

      <div
        className=" justify-center w-[calc(100%-10px)] md:w-[calc(100%-250px)] flex mt-[80px]"
        style={
          {
            //   width: toggle ? "calc(100% - 250px)" : "calc(100% - 10px)",
          }
        }
      >
        <div className="w-[95%] grid-cols-7 grid h-screen gap-5">
          <div className="bg--100 border rounded-lg xl:col-span-3 shadow-xl col-span-7 text-[40px] flex justify-center items-center">
            <div className="w-[95%] h-[95%]  flex justify-center items-center flex-col">
              <div className="flex justify-center items-center flex-col w-[95%]">
                <div className="flex  items-center justify-between w-[100%]">
                  <h3 className="text-[25px] font-bold mt-[15px]">Student</h3>

                  <div>
                    <HiOutlineDotsHorizontal size={24} />
                  </div>
                </div>

                <div className=" bg-white w-[95%] h-[50px] flex rounded-sm items-center border-lg mt-[15px]">
                  <div className="ml-[5px] cursor-pointer">
                    <IoIosSearch size={24} />
                  </div>
                  <input
                    type="search"
                    placeholder="Search For Student or ID"
                    className="  bg-white rounded-sm placeholder:text-[14px] outline-none border-none w-[95%] text-[18px] ml-[10px] "
                  />
                </div>
              </div>
              <div></div>

              <div className="w-[100%] flex justify-center h-[150px] overflow-y-auto md:h-[82%] border-t-2  mt-[10px]">
                <div className="pt-4 w-[95%] ">
                  <div className="flex">
                    <div className="flex w-[50%] items-center justify-between text-[16px] text-gray-400 ">
                      <div>Photo</div>
                      <div>Name</div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="flex w-[50%] justify-between items-center  text-[16px] text-gray-400">
                      <div></div>
                      <div className="">Student ID</div>
                      <div></div>
                      <div className="flex ">Year</div>
                      <div></div>
                    </div>
                  </div>

                  <div className="w-full mt-5 hover:bg-blue-50 transition-all duration-300 rounded-md cursor-pointer items-center py-5 border-b-2 flex justify-between ">
                    <div className="flex items-center gap-5 w-[50%] ">
                      <div className="w-10 ml- text-sm h-10 rounded-full text-white bg-red-500 flex justify-center items-center mr-3">
                        AD
                      </div>

                      <div>
                        <div className="text-[15px] font-bold text-gray-700 ">
                          Amara Olson
                        </div>
                        <div className="text-[12px]  ">Class IV</div>
                      </div>
                    </div>

                    <div className="flex gap-4 items-center w-[50%] ">
                      <div className="w-[50%] flex justify-center text-gray-300 text-[15px] ">
                        EEE
                      </div>
                      <div className="w-[50%] flex justify-center text-gray-500 text-[15px] ">
                        ^^^
                      </div>
                    </div>
                  </div>

                  <div className="w-full mt-5 hover:bg-blue-50 transition-all duration-300 rounded-md cursor-pointer items-center py-5 border-b-2 flex justify-between ">
                    <div className="flex items-center gap-5 w-[50%] ">
                      <div className="w-10 ml- text-sm h-10 rounded-full text-white bg-red-500 flex justify-center items-center mr-3">
                        AD
                      </div>

                      <div>
                        <div className="text-[15px] font-bold text-gray-700 ">
                          Amara Olson
                        </div>
                        <div className="text-[12px]  ">Class IV</div>
                      </div>
                    </div>

                    <div className="flex gap-4 items-center w-[50%] ">
                      <div className="w-[50%] flex justify-center text-gray-300 text-[15px] ">
                        EEE
                      </div>
                      <div className="w-[50%] flex justify-center text-gray-500 text-[15px] ">
                        ^^^
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue- col-span-7 border xl:col-span-4 rounded-lg shadow-2xl">
            <div className="w-full bg-slate-600 flex justify-center rounded-t-2xl h-[100px] ">
              <div className="w-[95%] flex items-center  ">
                <div className="gap-5 flex items-center">
                  <div className="w-16 h-16 rounded-full text-[20px] font-bold flex justify-center items-center text-slate-900 bg-slate-300 ">
                    TB
                  </div>

                  <div>
                    <div className="text-[20px] font-bold text-white ">
                      Trisha Berge
                    </div>
                    <div className="text-white">Class IV</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center wrap ">
              <div className="w-[95%] border rounded-lg p-6  mt-5 ">
                <div className="text-[23px] font-bold ">Basic Details</div>

                <div className="flex flex-wrap justify-between mt-7">
                  <div>
                    <div className="text-[14px] text-gray-400 ">Gender</div>
                    <div className="text-[16px] font-black  ">Female</div>
                  </div>

                  <div>
                    <div className="text-[14px] text-gray-400 ">
                      Date of Birth
                    </div>
                    <div className="text-[16px] font-black  ">29-04-2004</div>
                  </div>

                  <div>
                    <div className="text-[14px] text-gray-400 ">Religion</div>
                    <div className="text-[16px] font-black  ">Christian</div>
                  </div>

                  <div>
                    <div className="text-[14px] text-gray-400 ">Status </div>
                    <div className="text-[16px] font-black  ">Married</div>
                  </div>
                </div>

                <div className="flex gap-16 mt-7">
                  <div>
                    <div className="text-[14px] text-gray-400 ">Address</div>
                    <div className="text-[16px] font-black  ">
                      31, Haruna Street
                    </div>
                  </div>

                  <div>
                    <div className="text-[14px] text-gray-400 ">
                      Phone Number
                    </div>
                    <div className="text-[16px] font-black  ">
                      +234-808-484-5119
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
