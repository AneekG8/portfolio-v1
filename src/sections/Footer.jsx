import { useGSAP } from "@gsap/react"
import { socialImgs } from "../constants"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    useGSAP(()=>{
        gsap.fromTo(
            ".icon",
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.5,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.icon',
                    start: 'top bottom',
                    toggleActions: 'restart none none reverse'
                }
            }
        )      
    },[])
  return (
   <footer className="footer flex-col gap-7" id="footer">
        <div className="socials">
            {
                socialImgs.map((img) => (
                    <a key={img.url} href={img.url} className="icon" target="_blank">
                        <img src={img.imgPath} alt={img.name} />
                    </a>
                ))
            }
        </div>
       <p className="text-center sm:text-base text-sm" id="copyright">
        © {new Date().getFullYear()} Aneek Ghosh. All rights reserved.
       </p>
   </footer>
  )
}

export default Footer