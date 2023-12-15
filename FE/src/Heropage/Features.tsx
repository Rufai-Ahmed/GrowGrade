import sch from "../Assets/school.webp"
import teach from "../Assets/teacher.webp"
import stu from "../Assets/student.webp"
import par from "../Assets/parents.webp"
const Features = () => {
    return (
        <div>

            <div className='w-full h-[700px] flex items-center justify-center'>

                <div className='h-[100%] w-[80%] sm:w-[80%] gap-[20px]
                flex items-center justify-between flex-wrap  
                
                sm:gap-[px] md:flex-wrap md:w-[90%] lg:w-[70%] 
                '>

                    <div className='w-[100%] h-[45%] bg-orange-100 rounded-2xl
                    flex  justify-between p-[30px]  sm:w-[45%]      md:w-[45%] '>

                        <div>
                            <p className="">Schools</p>
                            <div className="pt-[20px]">
                                Improve effici-ency by automating all
                                the processes in your school with the most
                                powerful
                                school management platform
                            </div>
                        </div>

                        <img src={sch} className="w-[45%] h-[100%] " />


                    </div>
                    <div className='w-[100%] h-[45%] bg-blue-100 rounded-2xl
                    
                    flex  justify-between p-[30px]  sm:w-[45%]   md:w-[45%] '>
                        <div>
                            <p className="">Teachers</p>
                            <div className="pt-[20px]">
                                Create an enriching learning environment in
                                your school by integrating top digital tools
                                that make classroom operations seamless.
                            </div>
                        </div>

                        <img src={teach} className="w-[45%] h-[100%] " />

                    </div>
                    <div className='w-[100%] h-[45%] bg-gray-200
                      flex  justify-between p-[30px]  rounded-2xl sm:w-[45%]    md:w-[45%]
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

                        <img src={stu} className="w-[45%] h-[100%] " />

                    </div>
                    <div className='w-[100%] h-[45%] bg-pink-100
                      flex  justify-between p-[30px]  rounded-2xl sm:w-[45%] md:w-[45%] 
                    '>
                        <div>
                            <p className="">Parents</p>
                            <div className="pt-[20px]">
                                Get complete transparency over your ward’s
                                progress and stay up to date on all school activities
                            </div>
                        </div>

                        <img src={par} className="w-[45%] h-[100%] " />
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Features