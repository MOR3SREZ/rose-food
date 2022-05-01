//Components
import TrashCan from '../../../assets/icons/TrashCan';
import Counter from '../Counter/Counter';
//Styles
import styles from './CartCards.module.css';

const CartCard = ({ items }) => {
  return (
    <div className={styles.card}>
      <div className={styles['image-container']}>
        <img src={items.image} alt='' />
      </div>
      <div className={styles['content']}>
        <h4>{items.title}</h4>
        <p>${items.price}</p>
      </div>
      <Counter />
      <div className={styles['trash-can']}>
        <TrashCan />
      </div>
      <div className={styles.total}>
        <p>12032</p>
      </div>
    </div>
  );
};
export default CartCard;
