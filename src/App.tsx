import React from 'react'
import './App.css'
import { Canvas } from 'react-three-fiber'
import { Box } from './Components/Box'
import GlobalStyle from './globalStyle'
import { Header } from './Components/Header/Header'
function App() {
    return (
        <div>
            <GlobalStyle />
            <Header />
            {/* <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas> */}
        </div>
    )
}

export default App
