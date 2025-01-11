import React from 'react'
import Marquee from 'react-fast-marquee'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import ProjectCard from './ProjectCard';



const DomainSlider = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-6xl md:text-8xl text-white font-raleway font-bold">Domains</h1>
      <div className="py-12 px-8 flex flex-wrap gap-10 items-center justify-center">
        <ProjectCard
          title="Content Writing"
          backgroundImageUrl="https://images.unsplash.com/photo-1587135991058-8816b028691f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"        
        />
        <ProjectCard
          title="Graphic Designing"
          backgroundImageUrl="https://images.unsplash.com/photo-1693571109313-701c1929290f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"       
        />
        <ProjectCard
          title="Video Editing"
          backgroundImageUrl="https://images.unsplash.com/photo-1579109652910-99b9be06aaec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHZpZGVvJTIwZWRpdGluZ3xlbnwwfHwwfHx8MA%3D%3D"      
        />
        <ProjectCard
          title="Web and App Development"
          backgroundImageUrl="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ProjectCard
          title="Event Management"
          backgroundImageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  )
}

export default DomainSlider