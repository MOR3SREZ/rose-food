import { useState } from 'react';
import { motion } from 'framer-motion';

//styles
import styles from './CategoryCard.module.css';

const CategoryCard = ({ item, setSelected, selected }) => {
  const [isHover, setHovered] = useState(false);

  const selectHandler = () => {
    if (selected === item.name) {
      setSelected('');
    } else setSelected(item.name);
  };

  return (
    <motion.div
      className={styles['category-card']}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      key={item.id}
      onClick={() => selectHandler()}
      animate={
        selected === item.name
          ? {
              scale: 1.3,
              border: '2px solid var(--primary-orange)',
            }
          : {}
      }
      transition={{ ease: 'easeInOut' }}
    >
      <div className={styles['image-container']}>
        <motion.img
          animate={
            isHover
              ? { rotate: '360deg' }
              : selected === item.name
              ? { rotate: '360deg' }
              : { rotate: '0deg' }
          }
          transition={{ duration: 0.75 }}
          src={item.image}
          alt='shit'
        />
      </div>
      <motion.div
        className={styles['image-overlay']}
        initial={{ y: '100%' }}
        animate={
          isHover
            ? { y: '0%' }
            : selected === item.name
            ? { y: '0%' }
            : { y: '100%' }
        }
        transition={{ ease: 'easeInOut' }}
      >
        <h3>{item.name}</h3>
        <p>{item.count} item</p>
      </motion.div>
    </motion.div>
  );
};

export default CategoryCard;
