import { useEffect, useState } from "react"
import TextTransition, { presets } from "react-text-transition"

const Hero = () => {

    const Texts = ["efficient performance tracking", "Reducing overheads", "Transparent parent comminications",
        "improving learning outcomes", "easy report generation", "automating attendance", "Time table", ""
    ]

    const [state, setState] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setState((state) => state + 1)
        }, 3000);
        return () => clearTimeout(interval)
    }, [])
    return (
        <div>
            <div className="w-full h-[400px] bg-white
            flex  flex-col items-center justify-center gap-[20px]
            ">
                <div className="font-bold text-[50px]">integrated school platform</div>
                <div className="font-[500] text-[30px]">your co-pilot for</div>
                <div className="font-bold text-[40px]">

                    <TextTransition springConfig={presets.wobbly}>{Texts[state % Texts.length]}</TextTransition>

                </div>

                <button className="w-[300px] h-[50px] bg-blue-500 border-[1px] border-solid border-blue-600
                        rounded-lg text-white font-bold text-[15px]
                        ">
                    Book a Demo
                </button>

            </div>
        </div>
    )
}

export default Hero