// import { useState } from 'react'
// import './App.css'
import About from "./About";
import Contact from "./Contact";
// import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";

import { Cube_queen } from './models/Cube_queen'
import { Canvas } from "@react-three/fiber";
import ComputersCanvas from "./models/Computers";

function App() {
  return (
    <>
      <Canvas className="w-screen h-screen"
       frameloop='demand'
       shadows
       dpr={[1, 2]}
       camera={{ position: [20, 3, 5], fov: 25 }}
       gl={{ preserveDrawingBuffer: true }}>
        <ScrollControls pages={4} damping={0.25}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false}/>
          <Scroll>
            <mesh position={[-2,-2,0]}>
              <Cube_queen scale={2} />
            </mesh>
            <mesh position={[2,-5,0]}>
              <ComputersCanvas />
            </mesh>

          </Scroll>
          <Scroll html>
            <About />
            {/* <Home /> */}
            <Skills />
            <Projects />
            <Contact />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
