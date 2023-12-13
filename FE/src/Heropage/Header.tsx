import img from "../Assets/logo.png";
const Header = () => {
  return (
    <div>
      <div
        className="w-full h-[80px]  flex items-center justify-center
                    
                        "
      >
        <div className="w-[70%] h-[100%] flex items-center justify-between">
          <div className="flex flex-row items-center gap-[30px]">
            <div>
              {" "}
              <img src={img} className="w-[200px]" />
            </div>
            <div className="flex flex-row gap-[25px]">
              <div className="font-bold text-[18px]">Solution</div>
              <div className="font-bold text-[18px]">Features</div>
              <div className="font-bold text-[18px]">Plan</div>
              <div className="font-bold text-[18px]">About us</div>
              <div className="font-bold text-[18px]">Partnership</div>
            </div>
          </div>

          <div className="flex flex-row gap-[20px]">
            <button
              className="w-[80px] h-[45px] bg-white border-[1px] border-solid border-blue-600
                        rounded-lg text-blue-600 font-bold text-[15px]
                        "
            >
              Login
            </button>
            <button
              className="w-[130px] h-[45px] bg-blue-500 border-[1px] border-solid border-blue-600
                        rounded-lg text-white font-bold text-[15px]
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
