import React, { useState, useRef } from 'react'

import { Canvas, useFrame } from 'react-three-fiber'
import { softShadows, MeshWobbleMaterial, OrbitControls } from 'drei'
//@ts-ignore
import { a, useSpring } from 'react-spring/three'

//@ts-ignore
softShadows()

const Sponge: React.FC<any> = ({ position, args, color }) => {
    const mesh = useRef<any>(null)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
    return (
        <mesh castShadow position={position} ref={mesh}>
            <boxBufferGeometry attach="geometry" args={args} />
            <meshStandardMaterial attach="material" color={color} />
        </mesh>
    )
}

export const FlyingSponges = () => {
    return (
        <>
            <Canvas
                shadowMap
                colorManagement
                camera={{ position: [-5, 2, 10], fov: 40 }}
            >
                <ambientLight intensity={0.3} />
                <directionalLight
                    castShadow
                    position={[0, 10, 0]}
                    intensity={1.5}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <pointLight position={[-10, 0, -20]} intensity={0.5} />
                <pointLight position={[0, -10, 0]} intensity={1.5} />

                <group>
                    <mesh
                        receiveShadow
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, -3, 0]}
                    >
                        <planeBufferGeometry
                            attach="geometry"
                            args={[100, 100]}
                        />
                        {/* This will need to cast shadow  */}
                        {/* <meshStandardMaterial attach="material" color={'yellow'} /> */}
                        <shadowMaterial attach="material" opacity={0.3} />
                    </mesh>
                </group>

                <Sponge
                    position={[0, 1, 0]}
                    args={[3, 2, 1]}
                    color="lightgreen"
                />
                <Sponge position={[-2, 1, -5]} color="hotpink" />
                <Sponge position={[5, 1, -2]} color="hotpink" />
            </Canvas>
        </>
    )
}

// softShadows()

// export const FlyingSponge = ({ position, color, speed, args }) =>{
//     const mesh = useRef()

//     useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
//     const [expand, setExpand] = useState(false)
//     const props = useSpring({
//         scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
//     })
//     const look = useSpring({opacity: 1, from: {opacity: 0} })

//     return (
//         <a.mesh
//             position={position}
//             ref={mesh}
//             onClick={()=>setExpand(!expand)}
//             scale={props.scale}
//             castShadow>
//                 {console.log(look)}
//             <boxBufferGeometry attach='geometry' args={args} />
//             <MeshWobbleMaterial
//                 color={color}
//                 speed={speed}
//                 attach='material'
//                 factor={0.6}
//                 />
//         </a.mesh>
//     )
// }
