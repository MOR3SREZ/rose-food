import Slider from '../Slider/Slider';

//styles
import styles from './ProductSlider.module.css';
const ProductSlider = ({ items }) => {
  return (
    <div className={styles['slider-item']}>
      <h3>Related Foods</h3>
      <Slider item={items} />
    </div>
  );
};
export default ProductSlider;
