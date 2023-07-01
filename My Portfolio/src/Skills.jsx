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

const Skills = () => {
  return (
    <>
      <div className="w-screen h-screen bg-neutral-900">
        <h1 className="text-7xl text-white mx-auto	w-2/4 text-center pt-custom2">
          Skills & Experience
        </h1>
        <p className="text-1.5xl text-white mx-auto w-1/3 pt-5 text-center ">
          HTML, CSS, JS, building small and medium web applications with Vue or
          React, custom plugins, features, animations, and coding interactive
          layouts. I have also full-stack developer experience with one of the
          most popular open source CMS on the web - WordPress
        </p>
        <div className="flex flex-row flex-wrap w-1/3 mx-auto gap-10 pt-10 pointer-events-none select-none">
          <img src={Htmlimg} className="w-24 mx-auto grayscale "></img>
          <img src={Cssimg} className="w-24 mx-auto grayscale"></img>
          <img src={Jsimg} className="w-24 mx-auto grayscale"></img>
          <img src={Reactimg} className="w-24 mx-auto grayscale"></img>
          <img src={Threeimg} className="w-24 mx-auto grayscale"></img>
          <img src={Viteimg} className="w-24 mx-auto grayscale"></img>
          <img src={Tailwindimg} className="w-24 mx-auto grayscale"></img>
          <img src={Wp} className="w-24 mx-auto grayscale"></img>
          <img src={Figma} className="w-24 mx-auto grayscale"></img>
          <img src={Git} className="w-24 mx-auto grayscale"></img>
          <img src={Ps} className="w-24 mx-auto grayscale"></img>
          <img src={Ae} className="w-24 mx-auto grayscale"></img>
          <img src={Pr} className="w-24 mx-auto grayscale"></img>
          <img src={Lrc} className="w-24 mx-auto grayscale"></img>
          <img src={Ai} className="w-24 mx-auto grayscale"></img>
          <img src={Davinci} className="w-24 mx-auto grayscale"></img>
          <img src={Ue} className="w-24 mx-auto grayscale"></img>
          <img src={Blender} className="w-24 mx-auto grayscale"></img>
        </div>
      </div>
    </>
  );
};

export default Skills;
