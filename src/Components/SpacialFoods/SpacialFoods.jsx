//styles
import { allProduct } from '../../App';
import Card from '../Card/Card';
import Slider from '../Slider/Slider';
import styles from './SpacialFoods.module.css';

const SpacialFoods = () => {
  //filtering discounted food
  let DiscountedFoods = allProduct
    .filter((food) => food.off > 0)
    .map((item) => <Card food={item} key={Math.random()} />);

  //Filtering popular Foods
  let PopularFoods = allProduct
    .filter((food) => food.rate > 4.5)
    .map((item) => <Card food={item} key={Math.random()} />);

  return (
    <section className={styles.recipe}>
      <h2>Our Spacial Foods</h2>
      <div className={styles['discounted-foods']}>
        <h3>Discounted Foods</h3>
        <Slider item={DiscountedFoods} />
      </div>
      <div className={styles['popular-foods']}>
        <h3>Popular Foods</h3>
        <Slider item={PopularFoods} />
      </div>
    </section>
  );
};

export default SpacialFoods;
