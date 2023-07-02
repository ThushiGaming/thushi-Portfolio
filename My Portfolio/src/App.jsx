// import { useState } from 'react'
// import './App.css'
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import { Scroll, ScrollControls } from "@react-three/drei";
// import Navigation from "./Navigation";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas className="w-screen h-screen">
        <ScrollControls pages={5} damping={0.25}>
          <Scroll>
          </Scroll>
          <Scroll html>
            <About />
            <Home />
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
