import pix from "../../Assets/thankyou_gif.gif";
export const Notification = () => {
  return (
    <div className=" flex items-center flex-col">
      <div className=" flex justify-center mt-10 items-center flex-col">
        <img src={pix} />

        <div className="flex text-[40px] font-bold">
          Thanks for signing up with GrowGrade!
        </div>
        <div>
          Kindly click the verification link sent to your email Id and continue
          by choosing your desired product and plan to get started.
        </div>
      </div>
    </div>
  );
};
