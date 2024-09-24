import React, { useRef, useState } from 'react'
import './contact.css'

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { Bounce, Fade } from 'react-reveal';


defineElement(lottie.loadAnimation);



const Contact = () => {
    
    const [submit, setSubmit] = useState(false);
    const [sender, setSender] = useState('')
    let x = 0;
    
    const name = useRef('');
    const email = useRef('');
    const message = useRef('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setSender(name.current.value);
        name.current.value = '';
        email.current.value = '';
        message.current.value = '';
        
        const i = setInterval(() => {
            x++;
            
            if(x < 5){
                setSubmit(true);
            }
            
            else{
                clearInterval(i)
                setSubmit(false);
            }
            
        }, 1000)
        
    }
    
    
  return (
    <div className='contact_cont flex flex-col mt-24'>
        
        <Fade bottom duration = {2000}>
            <h1 className='text-center text-white text-4xl font-bold mt-10'><span className='capitalize text-yellow-500'>contact</span> with me to sizzle <br/> your <span className='text-yellow-500'>project.</span></h1>
        </Fade>
        
        
        <Fade bottom duration = {2000} delay={500}>
            <p className='text-center font-semibold contact_p mt-8'>Great designs, new generation ideas, user-centered projects. <br/> Let's work together now!</p>
        </Fade>        
        
        <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
            
            <div className='flex flex-row flex-wrap justify-center items-center contact_inputs mt-8 w-full'>
                
                <Fade left duration={2000} delay={1500}>
                    <div className='input_div'>
                        <input type='text' required minLength={5} placeholder='Name' ref={name} />
                    </div>
                </Fade>
                
                <Fade left duration={2000} delay={1000}>
                    <div className='input_div'>
                        <input type='email' required minLength={5} placeholder='Email' ref={email} />
                    </div>
                </Fade>
                
            </div>
            
            <Fade bottom duration={2000} delay={2000}>
                <div className='input_div'>
                    <textarea placeholder='Your Message' ref={message} required minLength={5}></textarea>
                </div>
            </Fade>
            
            <div className={submit ? 'mt-3 flex flex-row justify-center items-center': 'mt-3 flex-row justify-center items-center hidden'}>
                <lord-icon src="https://cdn.lordicon.com/cgzlioyf.json" trigger="in" delay="1000" stroke="bold" state="in-reveal" colors="primary:#30e849" style={{width:"30px",height:"30px"}}></lord-icon>
                <p className='text-green-500 capitalize mt-2'>Thanks <span className='font-bold'>{sender}</span>, message sent.</p>
            </div>
            
            <Bounce duration={2000} delay={3000}>
                <div>
                    <button className={submit? 'w-fit px-10 py-3 text-white text-center font-semibold rounded-full mt-5 opacity-45 hover:border-0': 'w-fit px-10 py-3 text-white text-center font-semibold rounded-full mt-5'} disabled = {submit ? true : false} >{submit ? 'Done' : 'Submit'}</button>
                </div>
            </Bounce>
        
        </form>
    </div>
  )
}

export default Contact
