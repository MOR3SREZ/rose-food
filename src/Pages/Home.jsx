import React from 'react'

//Components
import CategorySlider from '../Components/CategorySlider/CategorySlider'
import Hero from '../Components/Hero/Hero'
import Services from '../Components/Services/Services'
import Header from '../Layout/Header'

const Home = () => {
  return (
  <>
    <Header />
    <Hero/>
    <Services />
    <CategorySlider />
  </>
    

  )
}

export default Home