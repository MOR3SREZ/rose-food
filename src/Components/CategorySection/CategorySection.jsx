import React from 'react';

//styles
import styles from './CategorySection.module.css';

//Components
import CategoryCard from './CategoryCard/CategoryCard';
import CategoryList from '../../utils/category';

const CategorySection = () => {
  return (
    <section>
      <h1>Category</h1>
      <div className={styles.category}>
        {CategoryList &&
          CategoryList.map((item) => (
            <CategoryCard item={item} key={item.id} />
          ))}
      </div>
    </section>
  );
};

export default CategorySection;
