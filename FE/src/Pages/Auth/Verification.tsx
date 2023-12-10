import pix from "../../Assets/logo.png";
export const Verification = () => {
  return (
    <div>
      <div>
        <div className=" h-[100vh] w-[full] flex items-center justify-center bg-white ">
          <div className=" h-[470px] w-[650px] flex justify-center bg-[#595e60] p-5 ">
            <div className=" h-[100%] w-[90%]   text-center ">
              <img
                src={pix}
                className=" h-[40px] border-[white] border bg-white rounded-lg "
              />
              <h1 className=" text-[40px] font-semibold text-white mb-5">
                {" "}
                Token Verification
              </h1>
              <div className=" bg-slate-50  text-blue-600 ">
                Please input the that has been sent to your email -
                <span className=" font-bold te decoration-blue-900">
                  {"doveyjemix@gmail.com"}
                </span>
              </div>
              <div className=" h-[100px] w-[100%]  mt-5  flex  justify-between">
                <input
                  type="text"
                  placeholder=""
                  className=" h-[50%]  w-[100%] border flex outline-none  text-center text-[23px]"
                />
              </div>

              <button className=" h-[60px] w-[95%] border border-white hover:bg-gray-700 transition-all duration-300 mt-10  bg-[#595e60] rounded-xl text-white font-semibold">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
