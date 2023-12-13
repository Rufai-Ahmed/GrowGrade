import img from "../Assets/logo.png";
import { FiMenu } from "react-icons/fi"
const Header = () => {
  return (
    <div>
      <div
        className="w-full h-[80px]  flex items-center justify-center
                    
                        "
      >
        <div className="w-[90%] h-[100%] flex items-center justify-between lg:w-[70%] sm:w-[90%]">
          <div className="flex flex-row items-center gap-[30px]">
            <div>
              {" "}
              <img src={img} className="w-[200px]" />
            </div>
            <div className=" flex-row gap-[25px] items-center hidden 
              
            lg:hidden md:hidden 2xl:flex">
              <div className="font-bold text-[18px]">Solution</div>
              <div className="font-bold text-[18px]">Features</div>
              <div className="font-bold text-[18px]">Plan</div>
              <div className="font-bold text-[18px]">About us</div>
              <div className="font-bold text-[18px]">Partnership</div>
            </div>
          </div>

          <div className="flex flex-row gap-[20px]">
            <button
              className="w-[80px] h-[45px] bg-white border-[1px] border-solid border-slate-600 items-center justify-center
                        rounded-lg text-slate-600 font-bold text-[15px] hidden lg:hidden xl:hidden 2xl:flex 
                        "
            >
              Login
            </button>
            <div className="flex  lg:flex xl:flex 2xl:hidden">
              <FiMenu size={25} />
            </div>
            <button
              className="w-[130px] h-[45px] bg-slate-500 border-[1px] border-solid border-slate-600 items-center justify-center
                        rounded-lg text-white font-bold text-[15px] hidden lg:hidden xl:hidden 2xl:flex
                        "
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
