//Styles
import { useSelector } from 'react-redux';
import CartCard from './CartCards/CartCard';
import styles from './CartContainer.module.css';

const CartContainer = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <section className={styles['cart-container']}>
      <h2>Your cart</h2>
      <div className={styles['cart-products']}>
        <div className={styles['cart-cards']}>
          {cartItems &&
            cartItems.map((item) => (
              <CartCard items={item.item} key={item.id} />
            ))}
        </div>
        <div className={styles['cart-total']}>
          <div className={styles['total-price']}>
            <span>Total Price:</span> <span>$2345</span>
          </div>
          <div className={styles['total-discount']}>
            <span>Total Discounts :</span> <span>$45</span>
          </div>
          <div className={styles['pay-price']}>
            <span>Price to Pay: </span> <span>$2300</span>
          </div>
          <div className={styles['total-time']}>
            <span>Time To Cook: </span> <span>10 min</span>
          </div>
          <button>Purchase</button>
        </div>
      </div>
    </section>
  );
};
export default CartContainer;
