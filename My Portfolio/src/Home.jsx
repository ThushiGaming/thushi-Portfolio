import React from "react";
import "./App.css";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-neutral-900">
      <h1 className="text-white text-7xl md:text-6xl pl-custom pt-custom font-JosefinSans-Regular w-2/4">
        Front-End Software Developer
      </h1>
      <p class="text-1.5xl text-white pl-custom pt-text w-2/4 pb-text">
        
        Resolving design problems, building smart user interfaces and useful
        interactions, developing rich web applications and seamless web
        experiences.
      </p>
      <a href="" className=" pl-custom pt-text text-red-400 mt-text ">
        About Me
      </a>
    </div>
  );
};

export default Home;
