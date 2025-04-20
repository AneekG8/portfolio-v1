import { useGSAP } from "@gsap/react"
import TechIconModel from "../components/models/TechModels/TechIconModel"
import SectionTitle from "../components/SectionTitle"
import { techStackIcons } from "../constants"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive"

const Skills = () => {
    const isTablet = useMediaQuery({query: '(max-width: 767px)'});
    useGSAP(()=>{
        if(!isTablet){
            gsap.fromTo('.tech-card',
                {
                    opacity:0
                },
                {
                    opacity:1,
                    duration:1,
                    stagger:0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '#skills',
                        start: 'top center',
                        toggleActions: 'restart none none reverse'
                    }
                })
        }else{
            gsap.utils.toArray('.tech-card').forEach(card => {
                gsap.fromTo(card,
                    {
                        opacity:0
                    },
                    {
                        opacity:1,
                        duration:1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top bottom-=20%',
                            toggleActions: 'restart none none reverse'
                        }
                    })
            })
        }
    },[])
  return (
    <section id="skills" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <SectionTitle title='Skills' subtitle='🧑‍💻 My preferred tech stack'/>
            <div className="tech-grid">
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
            </div>
        </div>
    </section>
  )
}

export default Skills