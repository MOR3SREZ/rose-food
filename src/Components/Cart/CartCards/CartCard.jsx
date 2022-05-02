//Components
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TrashCan from '../../../assets/icons/TrashCan';
import { cartActions } from '../../../Store/cart-slice';
import Counter from '../Counter/Counter';
//Styles
import styles from './CartCards.module.css';

const CartCard = ({ items }) => {
  const item = items.item;
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(cartActions.removeFromCart(item.id));
  };

  return (
    <div className={styles.card}>
      <div className={styles['image-container']}>
        <Link to={`/product/${item.id}`}>
          <img src={item.image} alt='' />
        </Link>{' '}
      </div>
      <div className={styles['content']}>
        <Link to={`/product/${item.id}`}>
          <h4>{item.title}</h4>
        </Link>
        <p>
          <span>${item.price}</span> <span>off price</span>
        </p>
      </div>
      <Counter id={item.id} />
      <div className={styles['trash-can']} onClick={clickHandler}>
        <TrashCan />
      </div>
      <div className={styles.total}>
        <p>{(item.price * items.qty).toFixed(2)}</p>
      </div>
    </div>
  );
};
export default CartCard;
