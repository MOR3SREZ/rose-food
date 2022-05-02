import { useEffect, useState } from 'react';
import { allProduct } from '../../App';
import { motion } from 'framer-motion';

//Components
import Timer from '../Discount/Timer/Timer';

//styles
import styles from './Product.module.css';
import Counter from '../Cart/Counter/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';
import { favoriteActions } from '../../Store/favorite-slice';

const ProductContainer = ({ food }) => {
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleFavorite, setToggleFavorite] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);
  const dispatch = useDispatch();

  // to check if item is in listItem and dont lose it on rerender!!
  //Check for Cart
  useEffect(() => {
    cartItems.map((item) => {
      if (item.id === food.id) {
        setToggleCart(true);
        return null;
      }
    });
  });

  const cartClickHandler = () => {
    if (toggleCart) {
      dispatch(cartActions.removeFromCart(food.id));
    } else if (!toggleCart) {
      dispatch(cartActions.addToCart(food));
    }
    setToggleCart((prev) => !prev);
  };

  //Check for Favorite
  useEffect(() => {
    favoriteItems.map((item) => {
      if (item.id === food.id) {
        setToggleFavorite(true);
        return null;
      }
    });
  });

  const favoriteClickHandler = () => {
    if (toggleFavorite) {
      dispatch(favoriteActions.removeFromFavorite(food));
    } else if (!toggleFavorite) {
      dispatch(favoriteActions.addToFavorite(food));
    }
    setToggleFavorite((prev) => !prev);
  };

  const price = food.price;
  const offPrice = (price * +food.off) / 100;
  const finalPrice = price - offPrice;
  return (
    <section className={styles.product}>
      <div className={styles.wrapper}>
        <div className={styles['timer-section']}>
          <h3>Hurry Up!!!</h3>
          <div className={styles['timer-container']}>
            <Timer />
          </div>
        </div>
        {food && (
          <div className={styles['product-section']}>
            <div className={styles.image}>
              <motion.img
                whileHover={{ scale: 1.25 }}
                transition={{ ease: 'easeInOut' }}
                src={food.image}
                alt=''
              />
            </div>
            <div className={styles.container}>
              <h2>{food.title}</h2>
              <div className={styles.content}>
                <div className={styles.available}>
                  <p>
                    Availability: <span>Ready to serve</span>
                  </p>
                </div>
                <div className={styles.price}>
                  <span className={styles['new-price']}>
                    Price: ${food.price}
                  </span>
                  {food.off > 0 && (
                    <span className={styles['old-price']}>${finalPrice}</span>
                  )}
                </div>
                <div className={styles.description}>
                  <p>{food.description}</p>
                </div>
                <div className={styles.sizes}>
                  <p>Size: </p>
                  <p>
                    <span>1</span> <span>2</span> <span>family</span>
                  </p>
                </div>
                <div className={styles.quantity}>
                  <p>quantity:</p>
                  <Counter id={food.id} />
                </div>

                <div className={styles['button-container']}>
                  <button onClick={favoriteClickHandler}>
                    {!toggleFavorite ? 'Add Favorite' : 'Remove Favorite'}
                  </button>
                  <button onClick={cartClickHandler}>
                    {!toggleCart ? 'Add to Cart' : 'Remove From Cart'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default ProductContainer;
