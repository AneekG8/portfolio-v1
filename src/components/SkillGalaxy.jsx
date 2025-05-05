const SkillGalaxy = ({children,className}) => {
  return (
    <div className={`galaxy relative ${className}`}>
        {children}
        <div className="skill-galaxy-bg"></div>
    </div>
  )
}

export default SkillGalaxy