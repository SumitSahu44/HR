import React from 'react'
import Hero from '../Components/Hero'
import Contact from '../Components/Contact'
import Strength from '../Components/Strength'
import SectionsLine from '../Components/SectionsLine'
import Services from '../Components/Services'
import LogoGrid from '../Components/LogoGrid'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Contact/>

      <SectionsLine/>
      <Strength/>

      <SectionsLine/>
      <Services/>

      <SectionsLine/>
      <LogoGrid/>

      
      </div>
  )
}

export default Home
