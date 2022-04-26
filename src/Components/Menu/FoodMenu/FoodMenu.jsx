//styles
import { allProduct } from '../../../App';
import Card from '../../Card/Card';
import styles from './FoodMenu.module.css';

const FoodMenu = () => {
  return (
    <div className={styles['food-menu']}>
      {allProduct.map((item) => (
        <Card food={item} />
      ))}
    </div>
  );
};

export default FoodMenu;
