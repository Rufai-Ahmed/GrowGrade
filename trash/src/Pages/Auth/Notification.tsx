import { Link } from "react-router-dom";
import pix from "../../Assets/thankyou_gif.gif";
export const Notification = () => {
  return (
    <div className=" flex items-center flex-col">
      <div className=" flex justify-center mt-10 items-center flex-col">
        <div className=" lg:w-[60%] h-[60vh] mb-7 md:w-[50%] ">
          <img src={pix} className="w-[100%] h-[100%] object-contain " />
        </div>

        <div className="w-[100%] flex justify-center items-center flex-col text-center">
          <div className="md:text-[35px] font-bold text-[25px]">
            Thanks for signing up with GrowGrade!
          </div>
          <div className="lg:w-[100%] md:text-[16px] w-[80%] sm:text-[14px]">
            Kindly click the verification link sent to your email Id and
            continue by choosing your desired product and plan to get started.
          </div>
        </div>

        <Link to="/verify">
          <button className="bg-blue-600 text-white w-[120px] h-[40px] border rounded-md font-bold mt-5">
            Verify
          </button>
        </Link>
      </div>
    </div>
  );
};
