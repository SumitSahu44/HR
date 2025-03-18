import React from 'react'
import blueWheel  from '../assets/blue.png'
import magentaWheel  from '../assets/magenta.png'

const Hero = () => {
  return (
   <div className='bg-linear-to-r relative h-[38vw] from-[#3A99C9] to-[#0073AE]'>
        <div>
          <img src={magentaWheel} className='absolute h-[17vw] top-[50%] z-50 left-[50%] translate-[-50%]'  alt="" />
           <h1 className='absolute top-[50%] text-[1.5vw] font-bold text-white w-[12vw] text-center  left-[50%] translate-[-50%]'>The HR Company</h1>
       </div>

       <div>
          <img src={blueWheel} className='absolute h-[17vw] top-[34%] right-[11%] translate-[-50%]'  alt="" />
           <h1 className='absolute top-[30%] left-[32%] translate-[-50%] text-[1.5vw] font-bold text-white w-[11vw] text-center'> Leadership Coaching & Development</h1>
       </div>

       <div>
          <img src={blueWheel} className='absolute h-[17vw] top-[32%] left-[33.5%] translate-[-50%]'  alt="" />
           <h1 className='absolute top-[30%] left-[32%] translate-[-50%] text-[1.5vw] font-bold text-white w-[11vw] text-center'> Leadership Coaching & Development</h1>
       </div>


       <div>
          <img src={blueWheel} className='absolute h-[14vw] bottom-[-14.9%] left-[37.5%] translate-[-50%]'  alt="" />
           <h1 className='absolute top-[30%] left-[32%] translate-[-50%] text-[1.5vw] font-bold text-white w-[11vw] text-center'> Leadership Coaching & Development</h1>
       </div>
         

       <div>
          <img src={blueWheel} className='absolute h-[14vw] bottom-[-13%] right-[19%] translate-[-50%]'  alt="" />
           <h1 className='absolute top-[30%] left-[32%] translate-[-50%] text-[1.5vw] font-bold text-white w-[11vw] text-center'> Leadership Coaching & Development</h1>
       </div>
         
   </div>
  
  )
}

export default Hero
