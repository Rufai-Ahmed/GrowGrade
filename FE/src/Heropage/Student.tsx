import fee from "../Assets/img4.webp"
const Student = () => {
    return (
        <div className="w-full h-[650px] bg-gray-100 flex items-center justify-center">
            <div className="w-[70%] h-[100%] flex flex-row justify-between items-center">
                <div
                    className="w-[48%] h-[90%]"
                >
                    <img src={fee} className="w-[100%] h-[100%] object-cover" />
                </div>


                <div
                    className="w-[48%] h-[80%] flex flex-col gap-[30px] justify-center"
                >
                    <p
                        className="font-bold text-[18px] text-blue-500"
                    >Student information system</p>
                    <div
                        className="text-[30px]"
                    >Manage student information securely and efficiently</div>
                    <div className="font-bold text-[20px]">Digitixe student records with ease</div>
                    <p>go paperless by storing student information and document in a more secured place</p>
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

export default Student