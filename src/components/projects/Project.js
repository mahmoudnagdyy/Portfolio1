import React, { useState } from 'react'

import './projects.css'

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { Fade } from 'react-reveal';


defineElement(lottie.loadAnimation);


const Project = ({ImgsHandler, element, length}) => {
    
    const [projectNum, setProjectNum] = useState(0)
    
    let projectIndex = 0;
    
    
    const forwardHandler = () => {
        if(projectNum < length){
            setProjectNum(projectNum + 1);
        }
    }
    
    
    const backwardHandler = () => {
        if(projectNum > 0){
            setProjectNum(projectNum - 1);
        }
    }
    
    projectIndex = projectNum;
    
    
    ImgsHandler(projectIndex)
    
    
    const skills = element.skills.map((el, i) => {
        return <p className='capitalize text-yellow-500 made_by px-3 rounded-full cursor-default' key={i}>{el}</p>
    })
    
    
    
    
  return (
    <div className='flex flex-row justify-evenly items-center flex-wrap-reverse project'>
            
        <Fade left duration = {2000} delay = {1000}>
            <div className='flex flex-col project_text'>
                <h1 className='text-yellow-500 text-5xl font-bold mb-3'>{element.number}</h1>
                <h2 className='capitalize text-white text-3xl font-bold mb-2'>{element.name}</h2>
                <p className='website_desc capitalize font-semibold'>{element.desc}</p>
                
                <div className='flex flex-row skills_cont mt-3'>
                    {skills}
                </div>
                
                <div className='flex flex-row mt-6'>
                    
                    <a href='https://github.com/' target='_blank' rel='noreferrer' title='Github' className='mr-3'>
                        <lord-icon src="https://cdn.lordicon.com/kqvibaec.json" trigger="hover" stroke="bold" colors="primary:#ffffff,secondary:#eab308" style={{width:"50px", height:"50px"}}></lord-icon>
                    </a>
                    
                    <a href='https://www.facebook.com/mahmoudnagdyy' target='_blank' rel='noreferrer' title='Preview'>
                        <lord-icon src="https://cdn.lordicon.com/mqwitsmv.json" trigger="hover" state="hover-slide" stroke="bold" colors="primary:#ffffff,secondary:#eab308" style={{width:"40px", height:"40px"}}></lord-icon>
                    </a>
                    
                </div>
                
            </div>
        </Fade>
    
        <Fade left duration = {2000} delay = {500}>
            <div className='swipper flex flex-col items-center'>
                
                <img src={element.img} alt='project1' />
                
                <div className='flex flex-row mt-5'>
                    
                    <button className={projectNum > 0? 'text-white text-3xl rounded-xl' : 'text-white text-3xl rounded-xl opacity-40'} onClick={backwardHandler} disabled={projectNum > 0? false : true}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    
                    <button className={projectNum < length-1? 'text-white text-3xl rounded-xl' : 'text-white text-3xl rounded-xl opacity-40'} onClick={forwardHandler} disabled={projectNum < length-1? false : true}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                    
                </div>
                
            </div>
        </Fade>
    
    </div>
  )
}

export default Project
