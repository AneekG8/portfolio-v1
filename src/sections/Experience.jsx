import { useGSAP } from "@gsap/react"
import SectionTitle from "../components/SectionTitle"
import { educationDetails, expCards } from "../constants"
import gsap from "gsap"
import { useRef, useState } from "react"
import SkillOrbit from "../components/SkillOrbit"
import SkillGalaxy from "../components/SkillGalaxy"

const Experience = () => {
    const tabs = [{
        subtitle: "💼 My Career Overview",
        title: "Professional Work Experience"
    },
    {
        subtitle: "🎓 My Education",
        title: "Educational Background"
    }]

    const [selectedTab, setSelectedTab] = useState(0);

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
        gsap.utils.toArray('.exp-card-container').forEach(card => {
            gsap.fromTo(card.children[0],
                {
                    opacity: 0,
                    x: -100
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: card,
                        ease: 'power1.out',
                        start: 'top bottom-=100',
                        end: 'top bottom-=100',
                        toggleActions: 'restart none reverse none'
                    }
                }
            )
            gsap.to(card.children[0],
                {
                    rotation: 360,
                    duration: 30,
                    repeat: -1,
                    ease: "linear",
                    transformOrigin: "50% 50%",
                }
            )
            gsap.fromTo(card.children[1].children[1],
                {
                    opacity: 0,
                    x: 100
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power1.out',
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
        gsap.utils.toArray('.project-container').forEach((container,index) => {
            gsap.fromTo(container.children[0],
                {
                    opacity: 0,
                    y: -100
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.75,
                    scrollTrigger: {
                        trigger: container, 
                        start: 'top bottom-=100',
                        toggleActions: 'restart none none reverse'
                    },
                }
            )
            gsap.fromTo(container.children[4],
                {
                    opacity: 0,
                    y: 100
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.75,
                    scrollTrigger: {
                        trigger: container, 
                        start: 'top bottom-=100',
                        toggleActions: 'restart none none reverse'
                    },
                }
            )
            gsap.fromTo(container.children[1],
                {
                    opacity: 0,
                    scaleX: 0,
                },
                {
                    opacity: 1,
                    scaleX: 1,
                    duration: 0.5,
                    delay: 0.75,
                    transformOrigin: index % 2 ? 'left': 'right',
                    scrollTrigger: {
                        trigger: container, 
                        start: 'top bottom-=100',
                        toggleActions: 'restart none none reverse'
                    },
                }
            )
            gsap.fromTo(container.children[2],
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.75,
                    scrollTrigger: {
                        trigger: container, 
                        start: 'top bottom-=100',
                        toggleActions: 'restart none none reverse'
                    },
                }
            )
        })
    },[selectedTab])

  return (
    <section id="experience" className="w-full md:pt-20 mt-20 section-padding xl:px-0">
        <div className="w-full h-full md:px-20 px-5">
            <SectionTitle tabs={tabs} selectedTab={selectedTab} onTabChange={setSelectedTab} />
            {selectedTab === 0 && <div className="md:mt-24 mt-16 flex flex-col items-center">
                {expCards.map((card,index) => (
                    <div key={card.title} className="flex gap-8 items-center exp-card-container">
                        <SkillGalaxy className="w-40 h-40 md:w-60 md:h-60 lg:w-75 lg:h-75 flex-shrink-0 hidden md:block">
                            <SkillOrbit className="w-[50%] h-[50%]" skills={card.techStackPrimary} />
                            <SkillOrbit className="w-full h-full" skills={card.techStackSecondary} />
                        </SkillGalaxy>
                        <div className="flex gap-10 relative z-10">
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
                                {
                            index !== expCards.length - 1 && <div className="m-8" />
                        }
                            </div>
                        </div>
                    </div>             
                ))}
            </div>}
            {selectedTab === 1 && <div className="mt-16 md:block flex flex-col gap-15">
                {educationDetails.map((education,index) => (
                    <div className={`flex ${index % 2 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col md:gap-0 gap-5 relative project-container`}>
                        <div className={`grow-1 basis-0 z-40 md:my-15 ${index % 2 ? 'flex justify-end' : ''}`}>
                            <div className="lg:w-[90%] relative group hover:scale-110 cursor-pointer transition-all duration-300">
                                <img className="size-full rounded-lg" src={education.imgPath} alt={education.title} />
                            </div>
                        </div>
                        <div className={`hidden md:block w-[25%] h-0.5 absolute top-[50%] left-[50%] ${index % 2 === 0 ? '-translate-x-[100%]' : ''} -translate-y-1/2 bg-white-50 z-30`}/>
                        <div className="hidden md:block w-3 h-3 rounded-full bg-white-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-1/2"/>
                        <div className="hidden md:block w-0.25 bg-white mx-8"></div>
                        <div className="grow-1 basis-0 md:overflow-hidden">
                            <div className="h-full flex flex-col gap-5 justify-center">
                                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold md:text-left text-center'>{education.title}</h2>
                                <p className='text-white-50 lg:text-xl text-center md:text-left'>{education.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    </section>
  )
}

export default Experience;