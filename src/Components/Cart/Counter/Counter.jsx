//Styles
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../Store/cart-slice';
import styles from './Counter.module.css';

const Counter = ({ food }) => {
  const [count, setCount] = useState(1);
  const [toggleCart, setToggleCart] = useState();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    if (cartItems.some((i) => i.id === food.id)) {
      cartItems.map((item) => {
        if (item.id === food.id) {
          setCount(item.qty);
        }
      });
    } else setCount(1);
  }, [cartItems, food]);

  const increaseHandler = () => {
    dispatch(cartActions.increaseQty(food.id));
  };

  const decreaseHandler = () => {
    dispatch(cartActions.decreaseQty(food.id));
  };

  useEffect(() => {
    if (cartItems.some((item) => item.id === food.id)) {
      setToggleCart(true);
    } else setToggleCart(false);
  }, [cartItems, food]);

  const someFunc = () => {
    // cartItems.map((item) => {
    //   if (cartItems.some((i) => i.id === item.id)) {
    //     setCount(item.qty);
    //   } else setCount(1);
    // });
    return null;
  };

  // console.log(food);
  return (
    <div className={styles['order-counter']}>
      <button
        className={styles.decrease}
        onClick={decreaseHandler}
        style={
          toggleCart
            ? { cursor: 'pointer' }
            : { cursor: 'default', pointerEvents: 'none', opacity: 0.5 }
        }
      >
        -
      </button>
      <input
        type='number'
        min={1}
        max={100}
        value={count}
        onChange={someFunc}
        style={
          toggleCart
            ? { cursor: 'pointer' }
            : { cursor: 'default', pointerEvents: 'none', opacity: 0.5 }
        }
      />
      <button
        className={styles.increase}
        onClick={increaseHandler}
        style={
          toggleCart
            ? { cursor: 'pointer' }
            : { cursor: 'default', pointerEvents: 'none', opacity: 0.5 }
        }
      >
        +
      </button>
    </div>
  );
};
export default Counter;
