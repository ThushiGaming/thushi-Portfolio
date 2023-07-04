import React from "react";
import "./App.css";
import Tphoto from "./assets/photo.png";
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';



const About = () => {
  return (
    <div id='about' class="w-screen h-screen  flex bg-neutral-900 ">
      <div className="w-1/2">
        <h1 className="text-white lg:text-8xl md:text-6xl text-center pt-custom md:pt-52 lg:pt-custom lg:w-1/2 w-custom mx-auto ">
         <b> Hi, I'm Thushi </b>
          <Typewriter 
  options={{
    strings: ['WebDeveloper', 'UI Designer','3D Designer', 'Video Editor'],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
        <h3 className="text-zinc-500  text-2xl md:text-lg text-center pt-8 lg:text-3xl">
          Front End Developer / Cinematographer / Wordpress Developper
        </h3>
      </div>
      <div className="w-1/2  select-none">
        <Tilt>
        <img src={Tphoto} className="opacity-1 lg:pt-custom2 md:pt-16 lg:scale-125 md:scale-75 mx-auto object-cover grayscale hover:grayscale-0 "></img>
        </Tilt>
      </div>
      {/* <div className="text-white pl-custom2 text-lg">
      <p>Professionally connected with the web development industry.</p>
      <p>Problem solver, well-organised person, loyal employee with high attention to detail.
Fan of Boxing, outdoor activities, video games, and coding of course.</p>
      <p>Interested in the entire frontend spectrum and working on ambitious projects with interesting people.</p>
      </div> */}
    </div>
  );
};

export default About;
