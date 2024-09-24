import React from 'react'
import './services.css'
import Service from './Service'

import design_3d from '../../imgs/3d.png'
import design_ux from '../../imgs/design.png'
import design_brand from '../../imgs/brand.png'
import { Fade } from 'react-reveal'



const Services = () => {
  return (
    <div className='flex flex-col items-center w-full mt-40 services_cont'>
        
        <Fade bottom duration={2000}>
            <h1 className='text-white capitalize text-4xl mb-10 font-bold cursor-default'>services <span className='text-yellow-500'>offered.</span></h1>
        </Fade>
            
        <div className='flex flex-row flex-wrap services_row justify-center items-center'>
            
            <Fade left duration={2000} delay={1500}>
                <div className='m-auto'>
                    <Service img={design_ux} imgAlt = 'design_ux' serviceSpan='uX' serviceH2 = 'design' serviceDesc = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, nisi fugit ullam deserunt nisi fugit ullam deserunt' />            
                </div>
            </Fade>
            
            <Fade left duration={2000} delay={1000}>
                <div className='m-auto'>
                    <Service img={design_brand} imgAlt = 'design_brand' serviceSpan='brand' serviceH2 = 'design' serviceDesc = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, nisi fugit ullam deserunt nisi fugit ullam deserunt' />
                </div>
            </Fade>
            
            <Fade left duration={2000} delay={500}>
                <div className='m-auto'>
                    <Service img={design_3d} imgAlt = 'design_3d' serviceSpan='3D' serviceH2 = 'design' serviceDesc = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, nisi fugit ullam deserunt nisi fugit ullam deserunt' />
                </div>
            </Fade>
        
        </div>
      
    </div>
  )
}

export default Services
