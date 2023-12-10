import working from "../../Assets/working.png";
import { LuMail } from "react-icons/lu";

export const Notification = () => {
  return (
    <div>
      <div className="w-full items-center flex flex-col ">
        <div className="w-[70%] flex flex-col items-center text-center text-[30px] mt-20 ">
          <div>
            Thank you for signing up with us, kindly check the <br /> provided
            email's inbox to proceed
          </div>

          <div className="animate-bounce mt-28 ">
            <LuMail size={350} />
          </div>
        </div>
      </div>
    </div>
  );
};
