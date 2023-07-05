import React from "react";
import Htmlimg from "./assets/html.png";
import Cssimg from "./assets/css.png";
import Wp from "./assets/wp.png";
import Ps from "./assets/ps.png";
import Ai from "./assets/ai.png";
import Figma from "./assets/figma.png";
import Lrc from "./assets/lrc.png";
import Ae from "./assets/ae.png";
import Jsimg from "./assets/js.png";
import Pr from "./assets/pr.png";
import Ue from "./assets/ue.png";
import Tailwindimg from "./assets/tailwind.png";
import Viteimg from "./assets/vite.png";
import Threeimg from "./assets/three.png";
import Davinci from "./assets/daVinci.png";
import Blender from "./assets/blender.png";
import Git from "./assets/git.png";
import Reactimg from "./assets/react.png";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Skills = () => {
  return (
    <>
      <div className="w-screen h-screen bg-neutral-900">
        <h1 className="xl:text-7xl text-white mx-auto	w-2/4 text-center xl:pt-custom5 md:pt-custom4 select-none">
          Skills & Experience
        </h1>
        <p className="md:text-1.5xl xl:text-1xl text-white mx-auto md:w-1/3 xl:w-1/2 md:pt-5 xl:pt-5 text-center select-none ">
          HTML, CSS, JS, building small and medium web applications with Vue or
          React, custom plugins, features, animations, and coding interactive
          layouts. I have also full-stack developer experience with one of the
          most popular open source CMS on the web - WordPress
        </p>
        <div className="relative flex flex-row flex-wrap xl:w-30% md:w-1/2 mx-auto md:gap-10 xl:gap-15 pt-10  select-none ">
          <img src={Htmlimg} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0 "></img>
          <img src={Cssimg} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
          <img src={Jsimg} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
          <img src={Reactimg} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
          <img src={Threeimg} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
          <img src={Viteimg} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
          <img src={Tailwindimg} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
          <img src={Wp} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
          <img src={Figma} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
          <img src={Git} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
          <img src={Ps} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
          <img src={Ae} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
          <img src={Pr} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
          <img src={Lrc} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
          <img src={Ai} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
          <img src={Davinci} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
          <img src={Ue} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
          <img src={Blender} className="xl:w-18 md:w-16 mx-auto grayscale hover:grayscale-0"></img>
        </div>
      </div>
    </>
  );
};

export default Skills;
