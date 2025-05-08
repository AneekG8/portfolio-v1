import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, {createRef, useRef } from 'react'
import SectionTitle from '../components/SectionTitle';
import { projects } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
    const projectRefs = useRef(Array.from({length: 3},()=>createRef()));
    useGSAP(()=>{
        projectRefs.current.map((ref,index) =>{
            gsap.fromTo(ref.current,
                {opacity: 0},
                {
                    opacity: 1,
                    duration: 1.5,
                    delay: 0.2 * index,
                    scrollTrigger: {
                        trigger: ref.current, 
                        start: 'top bottom-=100',
                        toggleActions: 'restart none none reverse'
                    },
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

    },[])
  return (
    <section id="work" className='app-showcase'>
        <div className='w-full'>
            <SectionTitle title="Personal Projects" subtitle="👷 My Work" />
            <div className="mt-16 md:block flex flex-col gap-15">
                {projects.map((project,index) => (
                    <div className={`flex md:flex-row${index % 2 ? '-reverse' : ''} flex-col md:gap-0 gap-5 relative project-container`}>
                        <div className={`grow-1 basis-0 z-40 md:my-15 ${index % 2 ? 'flex justify-end' : ''}`}>
                            <div className="lg:w-[90%] relative group hover:scale-110 cursor-pointer transition-all duration-300">
                                <img className="size-full" src={project.imgPath} alt={project.title} />
                                <div className="w-full h-full justify-center items-center flex gap-5 absolute inset-0 scale-y-0 group-hover:scale-y-100 transition-all duration-300">
                                    <div className="scale-y-0 group-hover:scale-y-100 transition-all duration-500 bg-black opacity-40 w-[80%] h-[83%] absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"/>
                                    <a href={project.githubUrl} target='_blank' className='z-100 size-10 border border-black-50 bg-white flex justify-center items-center rounded-xl transition-all duration-250 hover:bg-white-50'><img src="/portfolio-v1/images/github.svg" alt="GitHub" /></a>
                                    <a href={project.linkUrl} target='_blank' className='bg-[#b5b5b5] cursor-not-allowed pointer-events-none z-100 size-10 border border-black-50 flex justify-center items-center rounded-xl transition-all duration-250 hover:bg-white-50'><img src="/portfolio-v1/images/link.png" alt="Link" /></a>
                                </div>
                            </div>
                        </div>
                        <div className={`hidden md:block w-[25%] h-0.5 absolute top-[50%] left-[50%] ${index % 2 === 0 ? '-translate-x-[100%]' : ''} -translate-y-1/2 bg-white-50 z-30`}/>
                        <div className="hidden md:block w-3 h-3 rounded-full bg-white-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-1/2"/>
                        <div className="hidden md:block w-0.25 bg-white mx-8"></div>
                        <div className="grow-1 basis-0 md:overflow-hidden">
                            <div className="h-full flex flex-col gap-5 justify-center">
                                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold md:text-left text-center'>{project.title}</h2>
                                <p className='text-white-50 lg:text-xl text-center md:text-left'>{project.description}</p>
                                <div className="lg:w-2/3 md:w-full sm:w-1/2 w-3/4 overflow-x-auto md:mx-0 mx-auto project-skills-scroller-container">
                                    <div className="w-max flex gap-5 md:justify-start justify-center project-skills-scroller-inner">
                                        {[...project.skills,...project.skills].map((skill,index) => (
                                            <img key={index} src={skill.image} alt={skill.name} className="md:size-10 size-8" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ShowCase