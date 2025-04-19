import { counterItems } from "../constants"
import CountUp from "react-countup"

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-12">
        <div className="mx-auto grid-4-cols">
            {counterItems.map((item,index) => (
                <div key={index} className="bg-zinc-900 rounded-lg md:p-10 p-5 flex flex-col justify-center">
                    <div className="counter-number md:text-5xl text-3xl text-white font-bold mb-2">
                       <CountUp scrollSpyOnce enableScrollSpy end={item.value} suffix={item.suffix} />
                    </div>
                    <div className="text-white-50 md:text-lg text-sm">
                        {item.label}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AnimatedCounter