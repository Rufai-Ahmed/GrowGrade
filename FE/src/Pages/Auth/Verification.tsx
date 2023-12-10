import pix from "../../Assets/logo.png";
export const Verification = () => {
  return (
    <div>
      <div>
        <div className=" h-[100vh] w-[full] flex items-center justify-center bg-white ">
          <div className=" h-[470px] w-[650px] flex justify-center bg-sky-400 p-5 ">
            <div className=" h-[100%] w-[90%]   text-center ">
              <img src={pix} className=" h-[30px] " />
              <h1 className=" text-[40px] font-semibold text-white mb-5">
                {" "}
                OTP Verification
              </h1>
              <div className=" bg-slate-50  text-blue-600 ">
                A token has been sent to your email -
                <span className=" font-bold te decoration-blue-900">
                  {"doveyjemix@gmail.com"}
                </span>
              </div>
              <div className=" h-[100px] w-[100%]  mt-5  flex  justify-between">
                <input
                  type=" nmber"
                  placeholder="|"
                  className=" h-[90%]  w-[20%] border flex text-center text-[13px]"
                />
                <input
                  placeholder="|"
                  className=" h-[90%]  w-[20%] border flex text-center text-[13px]"
                />
                <input
                  placeholder="|"
                  className=" h-[90%]  w-[20%] border flex text-center text-[13px]"
                />
                <input
                  placeholder="|"
                  className=" h-[90%]  w-[20%] border flex text-center text-[13px]"
                />
              </div>

              <button className=" h-[60px] w-[95%] mt-10  bg-blue-600 rounded-xl text-white font-semibold">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
