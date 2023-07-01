import React from "react";
import "./App.css";
import Tphoto from "./assets/photo.png";
import Tilt from 'react-parallax-tilt';


const About = () => {
  return (
    <div class="w-screen h-screen bg-neutral-900 flex">
      <div className="w-1/2">
        <h1 className="text-white  text-7xl  text-center pt-custom w-custom mx-auto">
          Hi, I'm Thushi WebDeveloper
        </h1>
        <h3 className="text-zinc-600  text-2xl text-center  ">
          Front End Developer / JavaScript Fan / Wordpress Expert
        </h3>
      </div>
      <div className="w-1/2  select-none">
        <Tilt>
        <img src={Tphoto} className="opacity-1 pt-custom2 scale-125 mx-auto object-cover"></img>
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
