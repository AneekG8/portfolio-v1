import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import Room from "./Room";
import HeroLights from "./HeroLights";

const HeroExperience = () => {
    const isTablet = useMediaQuery({query: '(max-width: 768px)'}); 
    const isLaptop = useMediaQuery({query: '(max-width: 1280px)'});
    const yPos = isLaptop && !isTablet ? -4 : -3.5; 
  return (
    <Canvas camera={{position: [0,0,15],fov:45}}>
        <HeroLights/>
        <OrbitControls enablePan={false} enableZoom={!isLaptop} maxDistance={20} minDistance={5} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2} minAzimuthAngle={-Math.PI / 4} maxAzimuthAngle={Math.PI / 4}/>
        <group scale={isLaptop ? 0.8 : 1} position={[0,yPos,0]} rotation={[0,- Math.PI / 4,0]}>
          <Room />
        </group>
    </Canvas>
  )
}

export default HeroExperience