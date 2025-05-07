import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, {createRef, useRef } from 'react'
import SectionTitle from '../components/SectionTitle';

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
                    duration: 1,
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
                    duration: 1,
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
                    delay: 1,
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
                    delay: 1,
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
            {/* <div className="showcaselayout mt-16">
                <div className='first-project-wrapper project-card' ref={projectRefs.current[0]}>
                    <div className='image-wrapper'>
                        <img src='/portfolio-v1/images/project1-in-laptop.png' alt='ryde'/>
                    </div>
                    <div className="text-content">
                        <h2>On demand rides made simple with a user friendly app</h2>
                        <p className='text-white-50 md:text-xl'>
                            An app built with React Native and Node.js to help users find cabs on demand
                        </p>
                    </div>
                </div>
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project project-card" ref={projectRefs.current[1]}>
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src='/portfolio-v1/images/project1-in-laptop.png' alt='project2'/>
                        </div>
                        <h2>A Library Management System</h2>
                    </div>
                    <div className="project project-card" ref={projectRefs.current[2]}>
                        <div className="image-wrapper bg-[#ffe7db]">
                            <img src='/portfolio-v1/images/project1-in-laptop.png' alt='project3'/>
                        </div>
                        <h2>YC Directory - A Startup Showcase App</h2>
                    </div>
                </div>
            </div> */}
            <div className="mt-16 md:block flex flex-col gap-15">
                <div className="flex md:flex-row flex-col md:gap-0 gap-5 relative project-container">
                    <div className="grow-1 basis-0 z-40 md:my-15">
                        <img className="lg:w-[90%]" src="/portfolio-v1/images/project1-in-laptop.png" alt="project1" />
                    </div>
                    <div className="hidden md:block w-[25%] h-0.5 absolute top-[50%] left-[50%] -translate-x-[100%] -translate-y-1/2 bg-white-50 z-30"/>
                    <div className="hidden md:block w-3 h-3 rounded-full bg-white-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-1/2"/>
                    <div className="hidden md:block w-0.25 bg-white mx-8"></div>
                    <div className="grow-1 basis-0">
                        <div className="h-full flex flex-col gap-5 justify-center">
                            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold md:text-left text-center'>BechDo</h2>
                            <p className='text-white-50 lg:text-xl'>
                                An app built with React Native and Node.js to help users find cabs on demand
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row-reverse flex-col md:gap-0 gap-5 relative project-container">
                    <div className="grow-1 basis-0 z-40 md:my-15 flex justify-end">
                        <img className="lg:w-[90%]" src="/portfolio-v1/images/project1-in-laptop.png" alt="project1" />
                    </div>
                    <div className="hidden md:block w-[25%] h-0.5 absolute top-[50%] left-[50%] -translate-y-1/2 bg-white-50 z-30"/>
                    <div className="hidden md:block w-3 h-3 rounded-full bg-white-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-1/2"/>
                    <div className="hidden md:block w-0.25 bg-white mx-8"></div>
                    <div className="grow-1 basis-0">
                        <div className="h-full flex flex-col gap-5 justify-center">
                            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold md:text-left text-center'>BechDo</h2>
                            <p className='text-white-50 lg:text-xl'>
                                An app built with React Native and Node.js to help users find cabs on demand
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col md:gap-0 gap-5 relative project-container">
                    <div className="grow-1 basis-0 z-40 md:my-15">
                        <img className="lg:w-[90%]" src="/portfolio-v1/images/project1-in-laptop.png" alt="project1" />
                    </div>
                    <div className="hidden md:block w-[25%] h-0.5 absolute top-[50%] left-[50%] -translate-x-[100%] -translate-y-1/2 bg-white-50 z-30"/>
                    <div className="hidden md:block w-3 h-3 rounded-full bg-white-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-1/2"/>
                    <div className="hidden md:block w-0.25 bg-white mx-8"></div>
                    <div className="grow-1 basis-0">
                        <div className="h-full flex flex-col gap-5 justify-center">
                            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold md:text-left text-center'>BechDo</h2>
                            <p className='text-white-50 lg:text-xl'>
                                An app built with React Native and Node.js to help users find cabs on demand
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowCase