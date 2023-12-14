import fee from "../Assets/img1.webp"
const Fee = () => {
    return (
        <div className="w-full h-[600px] bg-gray-100 flex
       
        items-center justify-center">
            <div className="w-[70%] flex-wrap
            sm:w-[90%] md:flex-wrap first-letter:
            h-[100%] flex  justify-between items-center">
                <div
                    className="w-[48%] sm:w-[100%] md:flex-col
                     h-[80%] flex flex-col gap-[30px] justify-center"
                >
                    <p
                        className="font-bold text-[18px] text-red-500"
                    >Fee Management</p>
                    <div
                        className="text-[30px]"
                    >Keep track, reduce costs and
                        eliminate administrative hassle</div>
                    <div className="font-bold text-[20px]">simplified fee management</div>
                    <p>customize fee structure and provide discount and offers with ease</p>
                    <button
                        className="w-[200px] h-[50px] bg-blue-500 
                        font-bold text-[18px] text-white 
                        "
                    >learn more</button>
                </div>
                <div
                    className="w-[48%] h-[100%] sm:w-[100%]"
                >
                    <img src={fee} className="w-[100%] h-[100%] object-contain" />
                </div>
            </div>
        </div>
    )
}

export default Fee