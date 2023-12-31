import React from 'react'
import Project1 from './Project1'
import Project3 from './Project3'
import Project2 from './Project2'
import { Project5 } from './Project5'

const Projects = () => {
  return (
    <div className='w-screen h-screen bg-neutral-900'>
      <div className="carousel w-full">
        <div id="slide0" className="carousel-item relative w-full">
          <Project5></Project5>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn glass">❮</a>
            <a href="#slide1" className="btn glass">❯</a>
          </div>
        </div>
        <div id="slide1" className="carousel-item relative w-full">
          <Project1></Project1>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide0" className="btn glass">❮</a>
            <a href="#slide2" className="btn glass">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Project2></Project2>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn glass">❮</a>
            <a href="#slide3" className="btn glass">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Project3></Project3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn glass">❮</a>
            <a href="#slide0" className="btn glass">❯</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects