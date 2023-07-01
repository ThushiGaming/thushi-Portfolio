import React from "react";
import "./App.css";
import Tphoto from "./assets/photo.png";

const About = () => {
  return (
    <div class="w-screen h-screen bg-neutral-900">
      <h1 className="text-white pl-custom text-7xl pt-custom w-deve">
        Hi, I'm Thushi WebDeveloper
      </h1>
      <h3 className="text-zinc-600 pl-custom text-2xl pt-text2 ">
        Front End Developer / JavaScript Fan / Wordpress Expert
      </h3>
      <img
        src={Tphoto}
        className="absolute left-deve top-ptop opacity-1 scale-125 "
      ></img>
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
