import React, { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import styles from './Slider.module.css';

const Slider = ({ item }) => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div className={styles.carousel} ref={carousel} key={Math.random()}>
      <motion.div
        className={styles['inner-carousel']}
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: 'grabbing' }}
        dragElastic={0.3}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {item}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
