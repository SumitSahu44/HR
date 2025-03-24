import React from 'react'
import Hero from '../Components/Hero'
import Contact from '../Components/Contact'
import Strength from '../Components/Strength'
import SectionsLine from '../Components/SectionsLine'
import Services from '../Components/Services'
import LogoGrid from '../Components/LogoGrid'
import EmpoweredPerformance from '../Components/empoweredPerformance'
import TeamSolutions from '../Components/teamSolutions'
import AboutUs from '../Components/aboutUs'
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
      <EmpoweredPerformance/>

      <SectionsLine/>
      <TeamSolutions/>

      <SectionsLine/>
      <LogoGrid/>

      <SectionsLine/>
      <AboutUs/>

      
      </div>
  )
}

export default Home
