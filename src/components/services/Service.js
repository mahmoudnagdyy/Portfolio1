import React from 'react'
import './services.css'



const Service = (props) => {
  return (
    <div className='flex flex-col service rounded-3xl cursor-default hover:-translate-y-4 duration-500'>
        <img src={props.img} alt={props.imgAlt} />
        <h2 className='text-white capitalize font-bold text-3xl mt-4 mb-2'><span className='text-yellow-500'>{props.serviceSpan}</span> {props.serviceH2}</h2>
        <p className='font-semibold'>{props.serviceDesc}</p>
    </div>
  )
}

export default Service
