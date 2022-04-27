import React from 'react';

//Components

import Hero from '../Components/Hero/Hero';
import Services from '../Components/Services/Services';
import SpacialFoods from '../Components/SpacialFoods/SpacialFoods';
import Discount from '../Components/Discount/Discount';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <SpacialFoods />
      <Discount />
      <Footer />
    </>
  );
};

export default Home;
