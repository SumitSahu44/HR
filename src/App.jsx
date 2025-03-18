import React from 'react'
import Home from './Pages/Home'
import leftRibbin from './assets/left-ribbin.png';
import Navbar from './Components/Navbar';
const App = () => {
  return (
      <div>
           <Navbar/>


            <div  className='flex gap-2.5 sm:gap-20'>
              {/* left ribbin  */}
                <div className='w-[8vw]'>
                  <img src={leftRibbin} alt="Left Ribbon" />
                </div>


              {/* right content  */}
              <div className='w-[85%]'>
                <Home/>
              </div>
          
      
            </div>

    </div>  
  )
}

export default App
