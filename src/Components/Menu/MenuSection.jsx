//styles
import styles from './MenuSection.module.css';

//Components
import FoodMenu from './FoodMenu/FoodMenu';

const MenuSection = () => {
  return (
    <div className={styles['menu-section']}>
      <FoodMenu />
    </div>
  );
};

export default MenuSection;
