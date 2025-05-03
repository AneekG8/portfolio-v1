import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HeroLights from "./HeroLights";
import HeroGroup from "./HeroGroup";

const HeroExperience = () => {
  return (
    <Canvas camera={{position: [0,0,15],fov:45}}>
        <HeroLights/>
        <OrbitControls enablePan={false} enableZoom={false} maxDistance={20} minDistance={5} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2} minAzimuthAngle={-Math.PI / 4} maxAzimuthAngle={Math.PI / 4}/>
          <HeroGroup/>
    </Canvas>
  )
}

export default HeroExperience