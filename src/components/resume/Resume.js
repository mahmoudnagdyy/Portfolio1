import React, { useState } from 'react'

import './resume.css'

import man from '../../imgs/resume_man.png'


import { Fade, Zoom } from 'react-awesome-reveal';


const Resume = () => {
    
    const [active, setActive] = useState(1);
    
    
  return (
    <div className='flex flex-col justify-center resume_cont w-full'>
      
        <div className='flex flex-row justify-evenly items-center flex-wrap'>
    
            <div className='flex flex-col'>
                <div  className='flex flex-row man_desc'>
                    
                    <Zoom duration={2000}>
                        <img src={man} alt='Man_Img' className='rounded-full resume_img mr-9'/>
                    </Zoom>
                    
                    <div className='flex flex-col justify-center'>
                        
                        <Fade bottom duration={1000} delay={800}>
                            <h2 className='capitalize text-white text-4xl font-bold'>carlos <span className='text-yellow-500'>nicholas.</span></h2>
                        </Fade>
                        
                        <Fade bottom duration={1000} delay={1200}>
                            <p className='man_location capitalize text-xl mt-2'>california, <span className='uppercase'>us</span></p>
                        </Fade>
                        
                        
                        <Fade bottom duration={1500} delay={1600}>
                            <h2 className='capitalize text-white text-lg font-bold border-2 border-white py-3 px-8 rounded-full cursor-default track track1 hidden'>senior <span className='uppercase'>ui/ux</span> designer</h2>
                        </Fade>
                        
                    </div>
                </div>
                
                <div className='flex flex-row items-center btns'>
                    
                    <Fade left duration={1000} delay={2300}>
                        <button className={active === 1? 'capitalize text-white btn py-2 px-5 font-bold rounded-full mr-4 active_btn': 'capitalize text-white btn py-2 px-5 font-bold rounded-full mr-4'} onClick={() => setActive(1)}>about</button>
                    </Fade>
                    <Fade left duration={1000} delay={2000}>
                        <button className={active === 2? 'capitalize text-white btn py-2 px-5 font-bold rounded-full mr-4 active_btn': 'capitalize text-white btn py-2 px-5 font-bold rounded-full mr-4'} onClick={() => setActive(2)}>skills</button>
                    </Fade>
                    <Fade left duration={1000} delay={1700}>
                        <button className={active === 3? 'capitalize text-white btn py-2 px-5 font-bold rounded-full active_btn': 'capitalize text-white btn py-2 px-5 font-bold rounded-full'} onClick={() => setActive(3)}>experience</button>
                    </Fade>
                    
                </div>
                
                
                <Fade bottom  duration={1000} delay={2600}>
                    <div className='info_cont rounded-xl'>
                        
                        {
                            active === 1 && 
                            
                            <div>
                                <h2 className='text-white capitalize text-lg mb-2 font-bold'>who i'm</h2>
                                <p className='about_txt font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ratione, reiciendis quod aut commodi molestias animi error atque cupiditate non dignissimos molestiae quas et praesentium officia veritatis ad repellendus hic?      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ratione, reiciendis quod aut commodi molestias animi error atque cupiditate non dignissimos molestiae quas et praesentium officia veritatis ad repellendus hic?</p>
                            </div>
                        }
                        
                        {
                            active === 2 && 
                            
                            <div>
                                <h2 className='text-white capitalize text-lg mb-2 font-bold'>what can i do</h2>
                                <p className='about_txt font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ratione, reiciendis quod aut commodi molestias animi error atque cupiditate non dignissimos molestiae quas et praesentium officia veritatis ad repellendus hic?      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ratione, reiciendis quod aut commodi molestias animi error atque cupiditate non dignissimos</p>
                            </div>
                        }
                        
                        {
                            active === 3 && 
                            
                            <div>
                                <h2 className='text-white capitalize text-lg mb-2 font-bold'>my work</h2>
                                <p className='about_txt font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ratione, reiciendis quod aut commodi molestias animi error atque cupiditate non dignissimos molestiae quas et praesentium officia veritatis ad repellendus hic?      Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        }
                    </div>
                    
                </Fade>
                
                
                
            </div>
        
            <Fade bottom duration={1500} delay={1600}>
                <h2 className='capitalize text-white text-lg font-bold border-2 border-white py-3 px-8 rounded-full cursor-default track'>senior <span className='uppercase'>ui/ux</span> designer</h2>
            </Fade>
        
        </div>
      


      
      
    </div>
  )
}

export default Resume
