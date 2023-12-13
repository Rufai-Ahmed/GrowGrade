import sch from "../Assets/school.webp"
import teach from "../Assets/teacher.webp"
import stu from "../Assets/student.webp"
import par from "../Assets/parents.webp"
const Features = () => {
    return (
        <div>

            <div className='w-full h-[700px] flex items-center justify-center'>

                <div className='h-[100%] w-[70%]
                flex items-center justify-between flex-row flex-wrap
                '>

                    <div className='w-[45%] h-[45%] bg-orange-100 rounded-2xl
                    flex  justify-between p-[30px]                '>

                        <div>
                            <p className="">Schools</p>
                            <div className="pt-[20px]">
                                Improve efficiency by automating all
                                the processes in your school with the most
                                powerful
                                school management platform
                            </div>
                        </div>

                        <img src={sch} className="w-[40%] h-[100%] " />


                    </div>
                    <div className='w-[45%] h-[45%] bg-blue-100 rounded-2xl
                    
                    flex  justify-between p-[30px]  '>
                        <div>
                            <p className="">Teachers</p>
                            <div className="pt-[20px]">
                                Create an enriching learning environment in
                                your school by integrating top digital tools
                                that make classroom operations seamless.
                            </div>
                        </div>

                        <img src={teach} className="w-[40%] h-[100%] " />

                    </div>
                    <div className='w-[45%] h-[45%] bg-gray-200
                      flex  justify-between p-[30px]  rounded-2xl
                    '>
                        <div>
                            <p className="">Students</p>
                            <div className="pt-[20px]">
                                Never miss a session and engage in
                                continuous learning with the assistance
                                of classroom recordings, limitless practice
                                questions and so much more!
                            </div>
                        </div>

                        <img src={stu} className="w-[40%] h-[100%] " />

                    </div>
                    <div className='w-[45%] h-[45%] bg-pink-100
                      flex  justify-between p-[30px]  rounded-2xl
                    '>
                        <div>
                            <p className="">Parents</p>
                            <div className="pt-[20px]">
                                Get complete transparency over your ward’s
                                progress and stay up to date on all school activities
                            </div>
                        </div>

                        <img src={par} className="w-[40%] h-[100%] " />
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Features