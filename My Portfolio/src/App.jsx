// import { useState } from 'react'
// import './App.css'
import { Canvas } from "@react-three/fiber";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import { Scroll, ScrollControls } from "@react-three/drei";
import Navigation from "./Navigation";

function App() {
  return (
    <>
      <Canvas className="w-screen h-screen">
        <ScrollControls pages={4} damping={0.25}>
          <Scroll></Scroll>
          <Scroll html>
            <Navigation />
            <About />
            <Home />
            <Skills />
            <Projects />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
