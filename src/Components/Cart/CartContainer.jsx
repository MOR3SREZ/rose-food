//Styles
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartCard from './CartCards/CartCard';
import styles from './CartContainer.module.css';

const CartContainer = () => {
  const [sum, setSum] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    setSum(
      cartItems.reduce((sum, curr) => sum + +curr.item.price * +curr.qty, 0)
    );
    setQuantity(cartItems.reduce((sum, curr) => sum + curr.qty, 0));
  }, [cartItems]);

  return (
    <section className={styles['cart-container']}>
      <h2>Your cart</h2>
      <div className={styles['cart-products']}>
        <div className={styles['cart-cards']}>
          {cartItems &&
            cartItems.map((item) => <CartCard items={item} key={item.id} />)}
        </div>
        <div className={styles['cart-total']}>
          <div className={styles['total-price']}>
            <span>Total Price:</span> <span>${sum.toFixed(2)}</span>
          </div>
          <div className={styles['total-discount']}>
            <span>Total Discounts :</span> <span> - $45</span>
          </div>
          <div className={styles['pay-price']}>
            <span>Price to Pay: </span> <span>$2300</span>
          </div>
          <div className={styles['total-time']}>
            <span>Time To Cook: </span> <span>{10 * +quantity} min</span>
          </div>
          <button>Purchase</button>
        </div>
      </div>
    </section>
  );
};
export default CartContainer;
