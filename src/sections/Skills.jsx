// import { useGSAP } from "@gsap/react"
import TechIconModel from "../components/models/TechModels/TechIconModel"
import SectionTitle from "../components/SectionTitle"
import { SkillsEnum } from "../constants"
// import gsap from "gsap"
// import { useMediaQuery } from "react-responsive"

const Skills = () => {
    // const isTablet = useMediaQuery({query: '(max-width: 767px)'});
    // useGSAP(()=>{
    //     if(!isTablet){
    //         gsap.fromTo('.tech-icon-card',
    //             {
    //                 opacity:0
    //             },
    //             {
    //                 opacity:1,
    //                 duration:1,
    //                 stagger:0.2,
    //                 ease: 'power3.out',
    //                 scrollTrigger: {
    //                     trigger: '#skills',
    //                     start: 'top center',
    //                     toggleActions: 'restart none none reverse'
    //                 }
    //             })
    //     }else{
    //         gsap.utils.toArray('.tech-card').forEach(card => {
    //             gsap.fromTo(card,
    //                 {
    //                     opacity:0
    //                 },
    //                 {
    //                     opacity:1,
    //                     duration:1,
    //                     ease: 'power3.out',
    //                     scrollTrigger: {
    //                         trigger: card,
    //                         start: 'top bottom-=20%',
    //                         toggleActions: 'restart none none reverse'
    //                     }
    //                 })
    //         })
    //     }
    // },[])

    return (
        <section id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <SectionTitle title='Skills' subtitle='🧑‍💻 My preferred tech stack'/>
                {/* <div className="tech-grid">
                    {techStackIcons.map(icon =>(
                        <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg relative">
                            <div className="tech-card-animated-bg"/>
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIconModel model={icon}/>
                                </div>
                                <div className="padding-x w-full">
                                    <p>{icon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
                <div className="mt-16 overflow-auto scroller px-2">
                    <div className="flex md:gap-12 sm:gap-6 gap-3 scroller-inner">
                        {[...Object.values(SkillsEnum), ...Object.values(SkillsEnum)].map((skill,index) =>(
                            <div key={index} className="p-2 relative flex flex-col gap-2 rounded-full group overflow-hidden shrink-0 tech-icon-card">
                                <div className="flex justify-center items-center z-10">
                                    <img src={skill.icon} alt={skill.name} className="size-10 sm:size-15 lg:size-30" />
                                </div>
                                <div className="px-2 w-full text-center z-10 text-xs sm:text-base">
                                    <p>{skill.name}</p>
                                </div>
                                <div className="absolute left-0 w-full h-full border-1 border-[#2D3240] transition-all duration-700 origin-bottom bottom-0"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills