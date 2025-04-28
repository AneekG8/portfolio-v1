import { useGSAP } from "@gsap/react"
import SectionTitle from "../components/SectionTitle"
import { expCards } from "../constants"
import gsap from "gsap"
import { useRef } from "react"

const Experience = () => {
    const timelineBarRefs = useRef([]);
    useGSAP(() => {
        timelineBarRefs.current.forEach(bar => {
            gsap.fromTo(bar,
                {scaleY: 0},
                
                {
                    scaleY: 1,
                    transformOrigin: 'top top',
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: bar,
                        ease: 'power1.out',
                        start: 'top bottom-=100',
                        end: '50% bottom',
                        toggleActions: 'restart none reverse none'
                    }
                }
            )
        })
        gsap.utils.toArray('.exp-details-card').forEach(card => {
            gsap.fromTo(card,
                {opacity: 0},
                {opacity: 1, duration: 1, ease: 'power1.out',
                    scrollTrigger: {
                        trigger: card,
                        ease: 'power1.out',
                        start: 'top bottom-=100',
                        end: 'top bottom-=100',
                        toggleActions: 'restart none reverse none'
                    }
                }
            )
        })
    },[])
  return (
    <section id="experience" className="w-full md:pt-20 mt-20 section-padding xl:px-0">
        <div className="w-full h-full md:px-20 px-5">
            <SectionTitle title="Professional Work Experience" subtitle="💼 My Career Overview" />
            <div className="md:mt-24 mt-16 flex justify-center">
              <div className="">
                {expCards.map(card => (
                    <div key={card.title} className="flex gap-10 md:w-172.5 w-full relative z-10">
                        <div className="rounded-full relative">
                            <img src={card.logoPath} alt="logo" className="relative z-10 rounded-full md:size-12 size-6.5 max-w-none" />
                            <div ref={(el)=>timelineBarRefs.current.push(el)} className="timeline-bar"/>
                        </div>
                        <div className="flex flex-col gap-2 mb-24 exp-details-card">
                                <h3 className="font-semibold md:text-3xl text-2xl">{card.title}</h3>
                                <p className="mt-2 text-white-50">🗓️ {card.date}</p>
                                <p className="mt-4 text-[#839cb5] italic">Responsibilities</p>
                                <ul className="flex flex-col gap-4">
                                    {card.responsibilities.map((responsibility) => (
                                        <li key={responsibility} className="text-white-50 md:text-lg text-sm">• {responsibility}</li>
                                    ))}
                                </ul>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience;