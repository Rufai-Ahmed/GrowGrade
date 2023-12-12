import { LuMail } from "react-icons/lu";
import pix from "../../Assets/original-30f717a4bdaa31c02d1dcae13d68c561.png";

export const Notification = () => {
  return (
    <div>
      <div className="animate-bounce mt-28 ">
            <LuMail size={250} />
          </div>
      <div className="w-full items-center flex flex-col ">
        <div className="w-[70%] flex flex-col items-center text-center text-[22px] mt-20 ">
          <div>
            Thank you for signing up with us, kindly check the <br /> provided
            email's inbox to proceed
          </div>
          <button
            type="submit"
            className="rounded-sm bg-purple-500 w-full text-white mt-4 py-4 hover:cursor-pointer hover:translate-y-1 transition-all duration-300 hover:shadow-md  "
          >
            Verify Account
          </button>

          
        </div>
        <div className="hidden lg:block bg-white col-span-3 m-4 mr-0 rounded-l-lg shadow-md h-[90%] ">
        <div className="w-full h-[100%] ">
          <img
            src={pix}
            className="w-full h-[100%] object-cover  rounded-l-lg "
          />
        </div>
      </div>
    </div>
    </div>
  );
};
