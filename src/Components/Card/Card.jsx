import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

//styles
import styles from './Card.module.css';

//SVG Components
import Favorite from '../../assets/icons/Favorite';
import Basket from '../../assets/icons/Basket';
import Watch from '../../assets/icons/Watch';
import Star from '../../assets/icons/Star';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';
import { favoriteActions } from '../../Store/favorite-slice';

const variants = {
  start: {
    scale: 1,
  },
  end: {
    scale: 1.1,
    transition: {
      duration: 0.5,
    },
  },
};

const Card = ({ food }) => {
  const [isHover, setHovered] = useState(false);
  const [imgIsHover, setImgHovered] = useState(false);
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

  //Calc Discount of foods
  const price = food.price;
  const offPrice = (price * +food.off) / 100;
  const finalPrice = price - offPrice;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.card}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        key={food.id}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <motion.div
          className={styles['image-container']}
          onHoverStart={() => setImgHovered(true)}
          onHoverEnd={() => setImgHovered(false)}
        >
          <motion.img
            alt='some shit'
            src={food.image}
            animate={isHover ? 'end' : ''}
            transition={{ ease: 'easeInOut' }}
            variants={variants}
          />
          <motion.div className={styles.overlay}>
            <div className={styles.icons}>
              <motion.div
                className={`${styles.icon} ${styles.favorite}`}
                initial={{ x: 0, opacity: 0 }}
                animate={imgIsHover ? { x: '65px', opacity: 1 } : {}}
                transition={{ ease: 'easeInOut' }}
                whileHover={{ scale: 1.1 }}
                onClick={favoriteClickHandler}
                style={
                  toggleFavorite
                    ? { backgroundColor: 'var(--primary-red)' }
                    : {}
                }
              >
                <Favorite />
              </motion.div>
              <motion.div
                className={`${styles.icon} ${styles.basket}`}
                initial={{ opacity: 0, x: 0 }}
                animate={imgIsHover ? { opacity: 1, x: 0 } : {}}
                transition={{ ease: 'easeInOut' }}
                whileHover={{ scale: 1.1 }}
                onClick={cartClickHandler}
                style={
                  toggleCart ? { backgroundColor: 'var(--primary-orange)' } : {}
                }
              >
                <Basket />
              </motion.div>

              <motion.div
                className={`${styles.icon} ${styles.watch}`}
                initial={{ x: 0, opacity: 0 }}
                animate={imgIsHover ? { x: '-65px', opacity: 1 } : {}}
                transition={{ ease: 'easeInOut' }}
                whileHover={{ scale: 1.1 }}
              >
                <Link to={`/product/${food.id}`}>
                  <Watch />
                </Link>
              </motion.div>
            </div>
          </motion.div>
          {food.off > 0 && <div className={styles.off}>-{food.off}%</div>}
        </motion.div>
        <div className={styles['detail-container']}>
          <Link to={`/product/${food.id}`}>
            <motion.p
              className={styles['product-name']}
              whileHover={{ color: 'var(--primary-red)' }}
              transition={{ duration: 0.3 }}
            >
              {food.title}
            </motion.p>
          </Link>
          <div className={styles['price-rate']}>
            <p className={styles['product-price']}>
              {+finalPrice !== +price ? (
                <>
                  <span className={styles['final-price']}>{` $${
                    finalPrice.toFixed(1) + 0
                  } USD`}</span>
                  <span className={styles['old-price']}>{`$${price} USD`}</span>
                </>
              ) : (
                <span
                  className={styles['final-price']}
                >{` $${food.price} USD`}</span>
              )}
            </p>
            <p className={styles['recipe-rate']}>
              <span className={styles.star}>
                <Star />
              </span>
              <span className={styles.rate}>{food.rate}</span>
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Card;
