import React from 'react'

const Heading = () => {
  return (
    <div className='mt-[2vw] relative'>


        <h2 className='bg-[#006699]   ml-[5vw]  text-[2.5vw] pl-[4vw] text-white'>Our Strength </h2>
        
        <div className='w-[50vw] absolute h-[0.5vw] top-[5vw] bg-amber-800'></div>
        <div className='w-[0.5vw]  absolute top-[0vw] left-[3vw] h-full bg-amber-800'></div>
    

        <div className='flex ml-[5vw] mt-[3vw] gap-10 min-w-[300px] flex-wrap '>
            <div className='bg-[#3A99C9] w-[30vw] p-[30px]'>
               <p>Shaping and building Talent, performance, teams and leader</p>
            </div>
            <div className='bg-[#3A99C9]  w-[30vw] p-[30px]'>
               <p>⁠delivering excellence through people advisory and processes appropriately customised</p>
            </div>
            <div className='bg-[#3A99C9]  w-[30vw] p-[30px]'>
               <p>harnessing potential, building the leadership pipeline and coaching leaders for success</p>
            </div>
         </div>
      

  
    </div>
  )
}

export default Heading
