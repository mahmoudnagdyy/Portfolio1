import React, { useState } from 'react'
import './projects.css'
import Project from './Project'

import pro1 from '../../imgs/pro1.png'
import pro2 from '../../imgs/pro2.webp'
import pro3 from '../../imgs/pro3.jpg'
import pro4 from '../../imgs/pro4.jpg'



import { Zoom } from 'react-reveal'


const Projects = () => {
    
    const [i, setI] = useState(0)
    
    const projects = [
        {number: '01', name: 'doctor site', desc: 'this website created using nextjs, tailwind',img: pro1, skills: ['react js', 'express js', 'mongoDB']},
        {number: '02', name: 'personal site', desc: 'this website created using nextjs, tailwind',img: pro2, skills: ['react js', 'tailwind']},
        {number: '03', name: 'school site', desc: 'this website created using nextjs, tailwind',img: pro3, skills: ['react js', 'bootstrap']},
        {number: '04', name: 'e-commerce site', desc: 'this website created using nextjs, tailwind',img: pro4, skills: ['react js', 'bootstrap']},
    ]
    
    
    const ImgsHandler = (index) => {
        setI(index)
    }
    
  return (
    <div className='flex flex-col w-full projects_cont mt-40'>
        
        <Zoom duration = {2000}>
            <h1 className='capitalize text-white text-4xl font-bold text-center'> my <span className='text-yellow-500'>projects.</span></h1>
        </Zoom>
                
        <Project ImgsHandler={ImgsHandler} element = {projects[i]} length = {projects.length} />
      
    </div>
  )
}

export default Projects
