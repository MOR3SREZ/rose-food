import React from 'react'

//Components
import Header from '../Layout/Header'
import Hero from '../Components/Hero/Hero'
import Services from '../Components/Services/Services'
import OffRecipes from '../Components/OffRecipes/OffRecipes'

const Home = () => {
  return (
  <>
    <Header />
    <Hero/>
    <Services />
    <OffRecipes />
  </>
    

  )
}

export default Home