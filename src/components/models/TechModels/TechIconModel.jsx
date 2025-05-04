import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'

const TechIconModel = ({model}) => {
    const scene = useGLTF(model.modelPath);
    
    return (
        <Canvas>
            <ambientLight intensity={0.3}/>
            <Environment preset='city'/>
            <OrbitControls enableZoom={false} />
            <Float speed={5.5} rotationIntensity={1} floatIntensity={0.9}>
                <group scale={model.scale} rotation={model.rotation} position={model.position}>
                    <primitive object={scene.scene}/>
                </group>
            </Float>
        </Canvas>
    )
}

export default TechIconModel