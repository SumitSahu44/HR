import React from 'react'
import Home from './Pages/Home'
import leftRibbin from './assets/left-ribbin.png';
import logo from './assets/logo.png'
const App = () => {
  return (
      <div>
       

          {/* nav bar  */}
          <header className="bg-white max-w-[98%] m-auto flex justify-between items-center">
            <img src={logo} className='h-[6vw]' alt="" />
            <nav>
              <ul className="flex gap-10 text-lg  text-gray-600">
                <li>Home</li>
                <li>About</li>
                <li>Why Us</li>
                <li>Solutions</li>
                <li>Blogs</li>
                <li>Contact Us</li>
              </ul>
            </nav>
          </header>


      <div  className='flex gap-20'>
        {/* left ribbin  */}
          <div className='w-[8vw]'>
             <img src={leftRibbin} alt="Left Ribbon" />
          </div>


          {/* right content  */}
          <div>
            <Home/>
          </div>
      
      
      </div>

    </div>  
  )
}

export default App
