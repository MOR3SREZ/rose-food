//Styles
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../Store/cart-slice';
import styles from './Counter.module.css';

const Counter = ({ id }) => {
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    cartItems.map((item) => {
      if (item.id === id) {
        setCount(item.qty);
      }
    });
  }, [cartItems, id]);

  const increaseHandler = () => {
    dispatch(cartActions.increaseQty(id));
  };

  const decreaseHandler = () => {
    dispatch(cartActions.decreaseQty(id));
  };

  return (
    <div className={styles['order-counter']}>
      <button className={styles.decrease} onClick={decreaseHandler}>
        -
      </button>
      <input
        type='number'
        min={1}
        max={100}
        value={count}
        onChange={console.log('change')}
      />
      <button className={styles.increase} onClick={increaseHandler}>
        +
      </button>
    </div>
  );
};
export default Counter;
