import React from 'react'
import Home from './Pages/Home'
import leftRibbin from './assets/left-ribbin.png';
const App = () => {
  return (
      <div className='flex'>
        {/* left ribbin  */}
          <div>
          <img src={leftRibbin} className='w-full h-[100vh]' alt="Left Ribbon" />
          
          </div>


          {/* right content  */}
          <div>
            <Home/>
          </div>
      
      
      </div>
  )
}

export default App
