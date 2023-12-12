import { LuBookOpen, LuBookOpenCheck } from "react-icons/lu";
import logo from "../../Assets/logo.png";
import { Md10K, MdDashboard, MdMoney, MdPerson2 } from "react-icons/md";
import { PiChalkboardTeacher, PiExam, PiStudent } from "react-icons/pi";
import { NavLink } from "react-router-dom";
// import { PiStudent} from "react-icons/pi";

export const Sider = () => {
  return (
    <div>
      <div className="w-[250px] bg-zinc-300 h-screen flex justify-center items-center ">
        <div className="w-[calc(100%-40px)] flex flex-col justify-between  h-[calc(100vh-40px)] ">
          <div className=" border-b-[3px] pb-3 ">
            <img src={logo} alt="" />
          </div>

          <div className="flex flex-col gap-4">
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
                    backgroundColor: isActive ? "red" : "orange",
                    borderRadius: "10px",
                  };
                }}
              >
                <div className="w-full py-3 rounded-lg text-white text-[20px] flex gap-5 items-center bg--400  ">
                  <div className="ml-4">{el.icon}</div>

                  <div className="">{el.title}</div>
                </div>
              </NavLink>
            ))}
          </div>

          <div>d</div>
        </div>
      </div>
    </div>
  );
};
