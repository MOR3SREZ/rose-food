import { useEffect, useState } from 'react';
import { allProduct } from '../../App';
import { motion } from 'framer-motion';

//Components
import Timer from '../Discount/Timer/Timer';

//styles
import styles from './Product.module.css';

const ProductContainer = ({ food }) => {
  // console.log(food);
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
                    <span className={styles['old-price']}>$12.00</span>
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
                <div className={styles.quantity}>quantity:</div>

                <div className={styles['button-container']}>
                  <button>favorite</button>
                  <button>add to cart</button>
                  <button>Buy now</button>
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
