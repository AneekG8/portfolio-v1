import { useGSAP } from "@gsap/react";
import { navLinks } from "../constants"
import { useEffect, useState } from "react"
import gsap from "gsap";

const Navbar = () => {
    const [scrolled,setScrolled] = useState(false);

    useGSAP(()=>{
        gsap.fromTo('.inner',
            {
                opacity: 0,
                transform: 'translateY(-100%)',
            },
            {
                opacity: 1,
                duration: 0.5,
                ease:'linear',
                transform: 'translateY(0)',
            }
        )
    },[])

    useEffect(()=>{
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    },[])

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
            <a href="#hero" className="logo">
                Aneek | Ghosh
            </a>
            <nav className="desktop">
                <ul>
                    {navLinks.map(({link,name}) => (
                        <li key={name} className="group">
                            <a href={link}>
                                <span>{name}</span>
                                <span className="underline"/>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <a href="#contact" className="contact-btn group">
                <div className="inner">
                    <span>Contact Me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default Navbar