import { useEffect, useState } from 'react';
import CategoryList from '../../utils/category';
import { useDispatch } from 'react-redux';
import { filterActions } from '../../Store/filter-slice';

//styles
import styles from './CategorySection.module.css';

//Components
import CategoryCard from './CategoryCard/CategoryCard';

const CategorySection = () => {
  const [selected, setSelected] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterActions.categoryFilter(selected));
  }, [selected]);

  return (
    <section id='category-section'>
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
