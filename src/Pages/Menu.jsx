import React from 'react';

//Components
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import CategorySection from '../Components/CategorySection/CategorySection';
import SortBar from '../Components/SortBar/SortBar';
import MenuSection from '../Components/Menu/MenuSection';

const Menu = () => {
  return (
    <>
      <Header />
      <CategorySection />
      <SortBar />
      <MenuSection />
      <Footer />
    </>
  );
};

export default Menu;
