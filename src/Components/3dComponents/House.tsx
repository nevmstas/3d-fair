import React, { useState, useRef } from 'react'

import { Canvas, useFrame } from 'react-three-fiber'
import { softShadows, MeshWobbleMaterial, OrbitControls } from 'drei'
//@ts-ignore
import { a, useSpring } from 'react-spring/three'
import { MeshStandardMaterial } from 'three'

const Wall: React.FC<any> = ({ position, args, color, speed }) => {
    const mesh = useRef<any>(null)

    return (
        <a.mesh castShadow position={position} ref={mesh}>
            <boxBufferGeometry attach="geometry" args={args} />
            <meshStandardMaterial attach="material" color={color} />
        </a.mesh>
    )
}

export const House = () => {
    return (
        <Canvas
            shadowMap
            colorManagement
            camera={{ position: [-5, 2, 10], fov: 40 }}
        >
            <ambientLight />
            <pointLight position={[4, 4, 4]} />
            <Wall position={[0, 0, 0]} args={[4, 3, 4]} color="lightgreen" />
            <Wall position={[2, -0.5, 0]} args={[0.1, 2, 1]} color="red" />
            <Wall position={[0, 0, 2]} args={[1, 1, 0.1]} color="red" />

            <OrbitControls />
        </Canvas>
    )
}
