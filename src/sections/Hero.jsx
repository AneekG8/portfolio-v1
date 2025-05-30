import AnimatedCounter from "../components/AnimatedCounter";
import { Button } from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { words } from "../constants";
import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'

const Hero = () => {
    useGSAP(()=>{
        gsap.fromTo('.hero-text h1',
            {y: 50,opacity: 0},
            {y: 0,opacity: 1,duration: 1,stagger: 0.2},
        )
        gsap.fromTo('.hero-3d-layout',
            {
                x: 100,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power1.out'
            }
        )
        gsap.fromTo('.subtitle',
            {x: -100,opacity: 0},
            {x: 0,opacity: 1,duration: 1,stagger: 0.2},
        )
    },[])
  return (
   <section id="hero" className="relative overflow-hidden">
     <div className="absolute top-0 left-0 z-10">
        <img src="/portfolio-v1/images/bg.png" alt="" />
      </div>
    <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-auto w-screen md:px-20 px-5 z-10 md:inline-block">
            <div className="flex flex-col gap-7">
                <div className="hero-text">
                    <h1>Shaping 
                        <span className="slide">
                            <span className="wrapper">
                                {words.map((word) => (
                                    <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                        <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />
                                        <span>{word.text}</span>
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>
                    <h1>into Real Projects</h1>
                    <h1>that Deliver Results</h1>
                </div>
                <p className="text-white-50 md:text-base text-sm relative z-10 pointer-events-none subtitle">Hi, I am Aneek. A fullstack web developer with 3+ years of professional experience.</p>
                <Button 
                    iconPath="/portfolio-v1/images/arrow-down.svg" 
                    component="a" 
                    className="md:w-80 md:h-16 w-60 h-12 subtitle" 
                    text="See My Work" 
                    href="#work"
                />
            </div>
        </header>
        <figure>
            <div className="hero-3d-layout">
                <HeroExperience/>
            </div>
        </figure>
    </div>
    <AnimatedCounter/>
   </section>
  )
}

export default Hero