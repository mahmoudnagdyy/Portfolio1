import React, { useState } from 'react'
import logo from '../../imgs/logo.png'
import { NavLink } from 'react-router-dom'
import './header.css'
import UseAnimations from "react-useanimations";
import menu4 from "react-useanimations/lib/menu4";
import { Fade } from 'react-reveal';





const Header = () => {
    
    const [list, setList] = useState(false);
    const [header, setHeader] = useState(false)
    
    
    window.addEventListener("scroll", () => {
      
      if(window.scrollY >= 100){
        setHeader(true)
      }
      else{
        setHeader(false)
      }
      
      
    })
    
    
    
  return (
    <header className={header? 'flex flex-row justify-around items-center w-full h-24 scroll' : 'flex flex-row justify-around items-center w-full h-24'}>
        <Fade top><img src={logo} alt='Logo' className='w-20' /></Fade>
        
        <div className='flex flex-row header_links w-fit'>
            <Fade right duration={1000}><NavLink className='capitalize text-white text-lg font-semibold mr-10' to='/' end>home</NavLink></Fade>
            <Fade right duration={1000} delay={200}><NavLink className='capitalize text-white text-lg font-semibold mr-10' to='Resume'>resume</NavLink></Fade>
            <Fade right duration={1000} delay={400}><NavLink className='capitalize text-white text-lg font-semibold mr-10' to='Services'>services</NavLink></Fade>
            <Fade right duration={1000} delay={600}><NavLink className='capitalize text-white text-lg font-semibold mr-10' to='Projects'>projects</NavLink></Fade>
            <Fade right duration={1000} delay={800}><NavLink className='capitalize text-white text-lg font-semibold' to='Contact'>contact us</NavLink></Fade>
        </div>
        
        <Fade top duration={2000}>
          <UseAnimations animation={menu4} size={50} className={list? 'icon cursor-pointer list_active list_icon': 'icon cursor-pointer list_icon'} onClick={() => setList(!list)} />
        </Fade>

        <div className={list? 'flex flex-col links_list active_list z-50': 'flex flex-col links_list z-50'}>
          
            <Fade bottom duration={1000}>
              <div>
                  <NavLink className='capitalize text-white text-lg font-semibold' to='/' end>home</NavLink>
              </div>
            </Fade>
          
            <Fade bottom duration={1000} delay={200}>
              <div>
                  <NavLink className='capitalize text-white text-lg font-semibold' to='Resume'>resume</NavLink>
              </div>
            </Fade>
            
            <Fade bottom duration={1000} delay={200}>
              <div>
                  <NavLink className='capitalize text-white text-lg font-semibold' to='Services'>services</NavLink>
              </div>
            </Fade>
            
            <Fade bottom duration={1000} delay={200}>
              <div>
                  <NavLink className='capitalize text-white text-lg font-semibold' to='Projects'>projects</NavLink>
              </div>
            </Fade>
            <Fade bottom duration={1000} delay={200}>
              <div>
                  <NavLink className='capitalize text-white text-lg font-semibold' to='Contact'>contact us</NavLink>    
              </div>
            </Fade>
            
        </div>
      
    </header>
  )
}

export default Header