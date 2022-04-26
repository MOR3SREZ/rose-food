import React from 'react';

//styles
import styles from './CategorySection.module.css';

//Components
import CategoryCard from './CategoryCard/CategoryCard';
import HeroPictures from '../../utils/HeroPictures';

const CategorySection = () => {
  return (
    <section>
      {HeroPictures && HeroPictures.map((item) => <CategoryCard item={item} />)}
    </section>
  );
};

export default CategorySection;
