import React, { useEffect, useRef, useState } from 'react';

import { motion, useAnimation } from 'framer-motion';

import styles from './Slider.module.css';

const Slider = ({ item }) => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();
  const slider = useRef();

  const controls = useAnimation();

  const distance = 300;
  let trigger = 0;

  // useEffect(() => {
  //   console.log('x',slider.current.scrollWidth)
  // })

  const goStep = (dir) => {
    trigger = trigger + dir * distance;
    controls.start({ x: trigger });
  };

  const goLeft = () => {
    if (Math.abs(trigger) > 0) {
      goStep(+1);
    }
  };

  const goRight = () => {
    if (Math.abs(trigger) + distance <= width) {
      goStep(-1);
    }
  };

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div className={styles.carousel} ref={carousel}>
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