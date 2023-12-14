import {
  LuBookOpen,
  LuBookOpenCheck,
  LuLogOut,
  LuMenu,
  LuSettings,
} from "react-icons/lu";
import logo from "../../Assets/logo2.png";
import {
  Md10K,
  MdCancel,
  MdDashboard,
  MdMoney,
  MdPerson2,
} from "react-icons/md";
import { PiChalkboardTeacher, PiExam, PiStudent } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../global/reduxState";
// import { PiStudent} from "react-icons/pi";

export const Sider = () => {
  const Toggle = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();

  return (
    <div className="transition-all z-20 duration-300 w-full absolute bg-black">
      <div className="absolute pt-5 pl-10 md:hidden ">
        {Toggle ? (
          ""
        ) : (
          <LuMenu
            size={26}
            onClick={() => {
              dispatch(toggle(true));
            }}
          />
        )}
      </div>
      <div
        className={`w-[250px] ${
          Toggle ? "flex" : "hidden"
        } md:flex  overflow-y-auto fixed bg-zinc-500 h-screen  justify-center items-center  `}
        style={
          {
            //   display: Toggle ? "flex" : "none",
          }
        }
      >
        <div className="w-[calc(100%-40px)] flex flex-col justify-between  h-[calc(100vh-40px)] ">
          {Toggle ? (
            <MdCancel
              className="absolute text-white md:hidden "
              size={26}
              onClick={() => {
                dispatch(toggle(false));
              }}
            />
          ) : (
            ""
          )}
          <div className=" border-b-[2px] pb-3 w-full flex justify-center ">
            <img src={logo} className="h-[30px]" alt="" />
          </div>

          <div className="flex flex-col gap-2">
            {[
              {
                title: "Dashboard",
                link: "admin",
                icon: <MdDashboard />,
              },
              {
                title: "Students",
                link: "student",
                icon: <PiStudent />,
              },
              {
                title: "Staff",
                link: "staff",
                icon: <PiChalkboardTeacher />,
              },
              {
                title: "Attendance",
                icon: <MdPerson2 />,
              },
              {
                title: "Courses",
                icon: <LuBookOpen />,
              },
              {
                title: "Exam",
                icon: <PiExam />,
              },
              {
                title: "Payment",
                icon: <MdMoney />,
              },
            ].map((el) => (
              <NavLink
                to={`/dashboard/${el.link}`}
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "#5d5d5d" : "",
                    borderRadius: "10px",
                  };
                }}
              >
                <div className="w-full py-2 rounded-lg text-white text-[14px] flex gap-5 items-center hover:bg-[#5d5d5d] transition-all duration-300 bg--400  ">
                  <div className="ml-4">{el.icon}</div>

                  <div className="">{el.title}</div>
                </div>
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col gap-3 ">
            <div className="flex gap-5 text-white text-[14px] w-full hover:bg-gray-700 transition-all duration-300 cursor-pointer rounded-md pl-2 py-2 items-center  ">
              <LuSettings size={15} /> <>Settings</>{" "}
            </div>

            <div className="flex gap-5 text-white text-[14px] w-full hover:bg-gray-700 transition-all duration-300 cursor-pointer rounded-md pl-2 py-2 items-center  ">
              <LuLogOut size={15} /> <>Logout</>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
