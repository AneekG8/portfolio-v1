import { useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";


const SkillOrbit = ({className, skills}) => {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const isLarge = useMediaQuery("(min-width: 1024px)");
    
    useEffect(() => {
        if (containerRef.current) {
            const { width, height } = containerRef.current.getBoundingClientRect();
            console.log(width, height)
            setDimensions({ width, height });
        }
    }, []);
    
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const iconSize = isLarge ? 40 : 20;
    const orbitRadius = Math.min(centerX, centerY);
    
    return (
        <div className={`border-1 border-dashed border-white-50 rounded-full skill-orbit ${className}`} ref={containerRef}>
            {dimensions.width > 0 &&
                skills.map((skill, i) => {
                const angle = (2 * Math.PI * i) / skills.length;
                const x = centerX + orbitRadius * Math.cos(angle) - iconSize / 2;
                const y = centerY + orbitRadius * Math.sin(angle) - iconSize / 2;
                return (
                    <img
                        key={i}
                        src={skill.icon}
                        alt={skill.name}
                        className="orbit-icon size-5 lg:size-10"
                        style={{ left: `${x}px`, top: `${y}px` }}
                    />
                );
            })}
            <div className="skills-orbit-bg"></div>
        </div>
)
}

export default SkillOrbit