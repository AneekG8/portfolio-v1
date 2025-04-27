import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, {createRef, useRef } from 'react'

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
    },[])
  return (
    <section id="work" className='app-showcase'>
        <div className='w-full'>
            <div className="showcaselayout">
                <div className='first-project-wrapper project-card' ref={projectRefs.current[0]}>
                    <div className='image-wrapper'>
                        <img src='../../public/images/project1.png' alt='ryde'/>
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
                            <img src='../../public/images/project2.png' alt='project2'/>
                        </div>
                        <h2>A Library Management System</h2>
                    </div>
                    <div className="project project-card" ref={projectRefs.current[2]}>
                        <div className="image-wrapper bg-[#ffe7db]">
                            <img src='../../public/images/project3.png' alt='project3'/>
                        </div>
                        <h2>YC Directory - A Startup Showcase App</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowCase