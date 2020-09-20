import React from 'react'
import { Canvas } from 'react-three-fiber'
import { Box } from './Box'

export const SpinnerCube = () => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[4, 4, 4]} />
            <Box position={[-1.2, 0, 0]} />
        </Canvas>
    )
}
