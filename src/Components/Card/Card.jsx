import { motion } from 'framer-motion';
import { useState } from 'react';

//styles
import styles from './Card.module.css';

//SVG Components
import Favorite from '../../assets/icons/Favorite';
import Basket from '../../assets/icons/Basket';
import Watch from '../../assets/icons/Watch';
import Star from '../../assets/icons/Star';

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

  //Calc off price
  const price = food.price;
  const offPrice = (price * +food.off) / 100;
  const finalPrice = price - offPrice;

  return (
    <motion.div
      className={styles.card}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      key={food.id}
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
              whileTap={{ scale: 0.9 }}
              whileHover={{ backgroundColor: '#ffb81a' }}
            >
              <Favorite />
            </motion.div>
            <motion.div
              className={`${styles.icon} ${styles.basket}`}
              initial={{ opacity: 0, x: 0 }}
              animate={imgIsHover ? { opacity: 1, x: 0 } : {}}
              transition={{ ease: 'easeInOut' }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ backgroundColor: '#ffb81a' }}
            >
              <Basket />
            </motion.div>
            <motion.div
              className={`${styles.icon} ${styles.watch}`}
              initial={{ x: 0, opacity: 0 }}
              animate={imgIsHover ? { x: '-65px', opacity: 1 } : {}}
              transition={{ ease: 'easeInOut' }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ backgroundColor: '#ffb81a' }}
            >
              <Watch />
            </motion.div>
          </div>
        </motion.div>
        {food.off > 0 && <span className={styles.off}>-{food.off}%</span>}
      </motion.div>
      <div className={styles['detail-container']}>
        {/*todo link ti the product id  */}
        <motion.p
          className={styles['product-name']}
          whileHover={{ color: 'var(--primary-red)' }}
          transition={{ duration: 0.3 }}
        >
          {food.title}
        </motion.p>
        <div className={styles['price-rate']}>
          <p className={styles['product-price']}>
            {+finalPrice !== +price ? (
              <>
                <span className={styles['final-price']}>{` $${
                  finalPrice.toFixed(1) + 0
                } `}</span>
                <span className={styles['old-price']}>{`$${price} `}</span>
              </>
            ) : (
              <span
                className={styles['final-price']}
              >{` $${food.price} `}</span>
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
  );
};

export default Card;
