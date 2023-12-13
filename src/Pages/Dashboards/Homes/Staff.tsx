import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import pix from "../../../Assets/top_girl.jpeg";
import student from "../../../Assets/the_img.jpg";
import { BsThreeDots } from "react-icons/bs";
import graph from "../../../Assets/chart.jpg";
export const Staff = () => {
  return (
    // <div>
    <div className=" h-[100vh] w-[82.3vw]  bg-[#d9eff8f9] flex justify-center  flex-col">
      <div className=" h-[60px] my-2 px-2 rounded-md  w-[97%] flex items-center justify-center ml-[15px] bg-white">
        <div className=" h-[50px] w-[100%] flex  justify-between items-center text-gray-600">
          <div>
            <h2 className=" text-[22px] font-bold text-gray-500"> Teacher</h2>
          </div>
          <div className=" w-[80%] flex items-center gap-3">
            <div className="  w-[95%] flex items-center justify-center border px-2 rounded-md gap-3">
              <CiSearch />
              <input
                placeholder="Search for students/teachers/documents..."
                className="  h-[40px] w-[90%]  flex-1 rounded-md outline-none text-[12px]"
              />
            </div>
            <div className="  w-[70px] flex items-center justify-between">
              <div className="cursor-pointer">
                <IoNotificationsOutline />
              </div>
              <div className=" h-[30px]  w-[30px] rounded-full bg-black">
                <img src={pix} className="  h-[30px]  w-[30px] rounded-full " />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* THE BODY PART */}
      <div className=" h-[100%] w-[100%] justify-center flex">
        <div className=" h-[100%] w-[97%] justify-between flex">
          {/* for the left */}
          <div className="  h-[100%] w-[27%] rounded-lg justify-center bg-white p-1">
            <div className="  h-[100%] w-[93%]    ">
              <div className=" text-[22px] font-bold text-gray-600 flex justify-between items-center">
                Teacher
                <BsThreeDots />
              </div>
              <div className=" h-[40px] w-[95%] bg-white flex justify-center items-center text-gray-400 rounded-md mt-3 border">
                <CiSearch />
                <input
                  placeholder="Search for teachers or id"
                  className=" h-[39px] w-[90%]    outline-none text-[13px] ml-1  "
                />
              </div>
              <hr className="  bg-black mt-3 mb-5" />

              <div className="  w-[100%] h-[14px]flex justify-center">
                <div className=" h-[14px] flex text-[12px] justify-between w-[95%] text-gray-500">
                  <div className=" flex gap-4">
                    <h1>Photo</h1>
                    <h1> Name</h1>
                  </div>
                  <div className=" flex gap-4">
                    <h1>student ID</h1>
                    <h1> Year</h1>
                  </div>
                </div>
              </div>
              <div className=" h-[390px] w-[100%] mt-3 flex justify-between flex-col">
                {Array.from({ length: 9 }, () => (
                  <div className=" flex text-[13px] justify-between text-gray-500">
                    <div className=" h-[30px]  w-[30px] rounded-full bg-black  ">
                      <img
                        src={pix}
                        className="  h-[30px]  w-[30px] rounded-full object-cover "
                      />
                    </div>
                    <h1 className=" w-[80px] ml-1.5 ">
                      Amara Olson
                      <span className=" text-[10px] "> Class v</span>
                    </h1>
                    <div className=" flex gap-6 justify-center ml-7 ">
                      {" "}
                      <h1>E - 5432</h1>
                      <h1>2013</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* for the right */}
          <div className=" h-[100%] w-[71.5%] bg-white rounded-md ">
            <div className="w-full h-[100px] bg-zinc-500 rounded-t-lg flex justify-center items-center">
              <div className="w-[95%] flex  items-center h-[100%] ">
                <div className="w-[72px] h-[72px] rounded-full object-cover">
                  <img
                    src={student}
                    width="100%"
                    height="100%"
                    style={{
                      borderRadius: "50%",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="w-[300px] ml-3 mb-2">
                  <h2 className="text-white font-[600] text-[18px]">
                    Amaka Duru
                  </h2>
                  <p className="text-[12px] text-white">
                    Class V | StudentsID: F-6522
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100%] h-[170px] my-[20px] flex justify-center ">
              <div className=" w-[95%] h-[100%] rounded-md border-2 py-[10px] px-[13px]">
                <h3 className="font-bold text-[15px] text-zinc-500 ">
                  Basic Details
                </h3>
                <div className="w-full flex my-2">
                  <div className="w-[117px] mr-1">
                    <h4 className="text-[11px] text-gray-300 font-bold">
                      Gender
                    </h4>
                    <p className="text-[13px] font-bold">Female</p>
                  </div>
                  <div className="w-[117px] mr-1">
                    <h4 className="text-[11px] text-gray-300 font-bold">
                      Date of Birth
                    </h4>
                    <p className="text-[13px] font-bold">16-03-2007</p>
                  </div>
                  <div className="w-[117px] mr-1">
                    <h4 className="text-[11px] text-gray-300 font-bold">
                      Religion
                    </h4>
                    <p className="text-[13px] font-bold">Christian</p>
                  </div>
                  <div className="w-[117px] mr-1">
                    <h4 className="text-[11px] text-gray-300 font-bold">
                      Blood Group
                    </h4>
                    <p className="text-[13px] font-bold">B+</p>
                  </div>
                </div>
                <div className="w-full mt-3 flex">
                  <div className="w-[218px] mr-1">
                    <h4 className="text-[11px] text-gray-300 font-bold">
                      Address
                    </h4>
                    <div>
                      <p className="text-[13px] font-bold w-full">
                        1962 Harrison StreetSan
                      </p>
                      <p className="text-[13px] font-bold w-full">
                        Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                  <div className="w-[218px] mr-1">
                    <h4 className="text-[11px] text-gray-300 font-bold">
                      Father
                    </h4>
                    <div>
                      <p className="text-[13px] font-bold w-full">
                        Richard Berge
                      </p>
                      <p className="text-[13px] font-bold w-full">
                        +234-604-327-32
                      </p>
                    </div>
                  </div>
                  <div className="w-[218px] mr-1">
                    <h4 className="text-[11px] text-gray-300 font-bold">
                      Mother
                    </h4>
                    <div>
                      <p className="text-[13px] font-bold w-full">Maria Duru</p>
                      <p className="text-[13px] font-bold w-full">
                        +234-767-276-37
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] h-[226px] my-[20px] flex justify-center">
              <div className=" w-[95%] h-[100%] rounded-md border-2 py-[10px] px-[13px] bg-[#E8E8EC]">
                <img
                  src={graph}
                  alt=""
                  className=" h-[100%] w-[100%] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
// {Array.from({ length: 9 }, () => (
