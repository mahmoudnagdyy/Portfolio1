import React from 'react'
import './home.css'
import man from '../../imgs/home_man.png'

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

import UseAnimations from "react-useanimations";
import twitter from 'react-useanimations/lib/twitter';
import { Fade, Zoom } from 'react-reveal';




defineElement(lottie.loadAnimation);

const Home = () => {
    
    const facebook = <lord-icon colors="primary:#ffffff,secondary:#eab308" src="https://cdn.lordicon.com/iqagrlso.json" trigger="morph" state="morph-circle" style={{width:"45px", height:"45px"}}></lord-icon>
    const instagram = <lord-icon src="https://cdn.lordicon.com/ewswvzmw.json" trigger="hover" state="hover-rotate" colors="primary:#ffffff,secondary:#eab308" style={{width:"45px", height:"45px"}}></lord-icon>
    const linkedin = <lord-icon src="https://cdn.lordicon.com/mdyiqybm.json" trigger="hover" colors="primary:#ffffff,secondary:#eab308" style={{width:"45px", height:"45px"}}></lord-icon>
    const twitter_icon = <UseAnimations animation={twitter} size={45} className='twitter_icon' />
    
    const social_links = [
        {icon: facebook, href: 'https://www.facebook.com/home.php', disc: 'Facebook', delay: 1000},
        {icon: instagram, href: 'https://www.instagram.com/', disc: 'Instagram', delay: 1400},
        {icon: linkedin, href: 'https://www.linkedin.com/home', disc: 'Linkedin', delay: 1800},
        {icon: twitter_icon, href: 'https://www.twitter.com/', disc: 'Twitter', delay: 2200},
    ]
    
    const links_display = social_links.map((link, index) => {
        return (
            <Fade left duration={2000} delay={link.delay} key={index}>
                <a href={link.href} target='_blank' className='mr-3' title={link.disc} key={index} rel="noreferrer">{link.icon}</a>
            </Fade>
        )
    })
    
    
  return (
    <div className='flex flex-row justify-evenly items-center home_cont flex-wrap-reverse'>
        
        <div className='flex flex-col man_info'>
            
            <Fade bottom duration={2000} delay={500}>
                <h1 className='text-white uppercase man_name text-7xl'>carlos <br/><span className='text-yellow-500'>nicholas.</span></h1>
            </Fade>
            
            <div className='flex flex-row mt-10'>
                {links_display}
            </div>
        </div>
        
        <Zoom duration={1500}>
           <div>
                <img src={man} alt='Man_Img' className='man_img rotate-6 hover:rotate-0 duration-300' />   
           </div>
        </Zoom>
        
    </div>
  )
}

export default Home
