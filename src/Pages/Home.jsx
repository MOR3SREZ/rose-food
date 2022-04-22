import React from 'react'

//Components
import Header from '../Layout/Header'
import Hero from '../Components/Hero/Hero'
import Services from '../Components/Services/Services'
import SpacialFoods from '../Components/SpacialFoods/SpacialFoods'

const Home = () => {
  return (
  <>
    <Header />
    <Hero/>
    <Services />
    <SpacialFoods />
  </>
  )
}

export default Home