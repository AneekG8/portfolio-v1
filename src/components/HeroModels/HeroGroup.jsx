import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Room from './Room'

const HeroGroup = () => {
  const isTablet = useMediaQuery({query: '(max-width: 768px)'}); 
  const isLaptop = useMediaQuery({query: '(max-width: 1280px)'});
  const yPos = isLaptop && !isTablet ? -4 : -3.5; 
  const modelRef = useRef(null)

  useFrame(({ clock }) => {
    const initRot = - Math.PI / 4;
    if (modelRef.current) {
      const elapsed = clock.getElapsedTime()
      modelRef.current.rotation.y = initRot + Math.sin(elapsed * 0.5) * Math.PI / 10;
    }
  })

  return (
    <group ref={modelRef} scale={isLaptop ? 0.8 : 1} position={[0,yPos,0]}>
      <Room />
    </group>
  )
}

export default HeroGroup