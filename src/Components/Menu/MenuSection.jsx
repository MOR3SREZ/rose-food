//styles
import styles from './MenuSection.module.css';

//Components
import FilterBar from './FilterBar/FilterBar';
import FoodMenu from './FoodMenu/FoodMenu';

const MenuSection = () => {
  return (
    <div className={styles['menu-section']}>
      <FilterBar />
      <FoodMenu />
    </div>
  );
};

export default MenuSection;
