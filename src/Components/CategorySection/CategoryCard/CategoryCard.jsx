import { useState } from 'react';
import { motion } from 'framer-motion';

//styles
import styles from './CategoryCard.module.css';

const CategoryCard = ({ item }) => {
  const [isHover, setHovered] = useState(false);

  return (
    <motion.div
      className={styles.card}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      key={item.id}
    >
      <div className={styles['image-container']}>
        <motion.img
          animate={isHover ? { rotate: '1turn' } : { rotate: '0turn' }}
          transition={{ duration: 0.75 }}
          src={item.image}
          alt='shit'
        />
      </div>
      <motion.div
        className={styles['image-overlay']}
        initial={{ y: '100%' }}
        animate={isHover ? { y: '0%' } : { y: '100%' }}
        transition={{ ease: 'easeInOut' }}
      >
        <h3>{item.name}</h3>
        <p>12 item</p>
      </motion.div>
    </motion.div>
  );
};

export default CategoryCard;
