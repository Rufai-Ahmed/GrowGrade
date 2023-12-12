import fee from "../Assets/add.svg"
const Admission = () => {
    return (
        <div className="w-full h-[600px]  flex items-center justify-center
        mt-[40px]
        ">
            <div className="w-[70%] h-[100%] flex flex-row justify-between items-center">
                <div
                    className="w-[48%] h-[100%]"
                >
                    <img src={fee} className="w-[100%] h-[100%] object-cover" />
                </div>


                <div
                    className="w-[48%] h-[80%] flex flex-col gap-[30px] justify-center"
                >
                    <p
                        className="font-bold text-[18px] text-blue-500"
                    >Admission Management</p>
                    <div
                        className="text-[30px]"
                    >Create an enriching experience
                        with a superior admissions
                        process</div>
                    <div className="font-bold text-[20px]">deliver with speed and ease</div>
                    <p>automate the entire process and eliminate with ease</p>
                    <button
                        className="w-[200px] h-[50px] bg-blue-500 
                        font-bold text-[18px] text-white 
                        "
                    >learn more</button>
                </div>

            </div>
        </div>
    )
}

export default Admission;