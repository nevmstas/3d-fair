import React, { useState, useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { Vector3 } from 'three'

type PropsT = {
    position: Vector3 | [number, number, number]
}

export const Box: React.FC<PropsT> = ({ position }) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef<any>()

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

    return (
        <mesh
            position={position}
            ref={mesh}
            scale={active ? [3.5, 3.5, 3.5] : [3, 3, 3]}
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial
                attach="material"
                color={hovered ? 'hotpink' : 'orange'}
            />
        </mesh>
    )
}
