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
                            <img className="lg:w-[90%]" src={project.imgPath} alt={project.title} />
                        </div>
                        <div className={`hidden md:block w-[25%] h-0.5 absolute top-[50%] left-[50%] ${index % 2 === 0 ? '-translate-x-[100%]' : ''} -translate-y-1/2 bg-white-50 z-30`}/>
                        <div className="hidden md:block w-3 h-3 rounded-full bg-white-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-1/2"/>
                        <div className="hidden md:block w-0.25 bg-white mx-8"></div>
                        <div className="grow-1 basis-0">
                            <div className="h-full flex flex-col gap-5 justify-center">
                                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold md:text-left text-center'>{project.title}</h2>
                                <p className='text-white-50 lg:text-xl text-center md:text-left'>{project.description}</p>
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