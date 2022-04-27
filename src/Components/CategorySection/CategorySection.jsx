import React, { useState } from 'react';

//styles
import styles from './CategorySection.module.css';

//Components
import CategoryCard from './CategoryCard/CategoryCard';
import CategoryList from '../../utils/category';

const CategorySection = () => {
  const [selected, setSelected] = useState('');
  console.log('selected', selected);

  return (
    <section className={styles['category-section']}>
      <h1>Category</h1>
      <div className={styles.category}>
        {CategoryList &&
          CategoryList.map((item) => (
            <CategoryCard
              item={item}
              key={item.id}
              setSelected={setSelected}
              selected={selected}
            />
          ))}
      </div>
    </section>
  );
};

export default CategorySection;
