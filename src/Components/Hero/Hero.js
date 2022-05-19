import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

import './Hero.css';

import HeroPictures from '../../utils/HeroPictures';
import Slides from './Slides/Slides';

/*** Component main */
const Hero = () => {
  //Variable
  const slidesLength = HeroPictures.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 10000;

  //states
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState({ index: '', dir: '' });
  const [prev, setPrev] = useState({ index: '', dir: '' });

  const [isAnimate, setIsAnimate] = useState(false);

  //Functions
  //main function for rotate
  const goTo = (index, dir) => {
    if (isAnimate) return;
    setPrev({ index: current, dir: dir });
    setNext({ index: index, dir: dir });
    setCurrent(index);
  };

  const goStep = (dir) => {
    let index = current + dir;
    let len = slidesLength;
    let currentIndex = (index + len) % len;
    goTo(currentIndex, dir);
  };

  //Click navHandler
  const navClickHandler = (i, dir) => {
    goTo(i, dir);
  };

  //Click events prev & next
  const goNext = () => {
    goStep(1);
  };
  const goPrev = () => {
    goStep(-1);
  };

  //Auto play slider
  function auto() {
    slideInterval = setInterval(goNext, intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <div className='slider'>
      <ul className='slider-list'>
        {HeroPictures &&
          HeroPictures.map((item, i) => {
            if (next.index === i) {
              return (
                <motion.li
                  className='slider-item'
                  key={item.id}
                  onAnimationStart={() => setIsAnimate(true)}
                  onAnimationComplete={() => setIsAnimate(false)}
                  initial={{ rotate: `${next.dir * +180}deg` }}
                  animate={{
                    rotate: 0,
                  }}
                  transition={{ duration: 1.2, type: 'spring' }}
                >
                  <Slides item={item} />
                </motion.li>
              );
            } else if (prev.index === i) {
              return (
                <motion.li
                  className='slider-item'
                  key={i}
                  onAnimationStart={() => setIsAnimate(true)}
                  onAnimationComplete={() => setIsAnimate(false)}
                  initial={{
                    rotate: 0,
                  }}
                  animate={{ rotate: `${prev.dir * -180}deg` }}
                  transition={{ duration: 1.2, type: 'spring' }}
                >
                  <Slides item={item} />
                </motion.li>
              );
            } else if (current === i) {
              return (
                <motion.li
                  className='slider-item'
                  key={i}
                  onAnimationStart={() => setIsAnimate(true)}
                  onAnimationComplete={() => setIsAnimate(false)}
                  initial={{ rotate: `${prev.dir * -180}deg` }}
                  animate={{
                    rotate: 0,
                  }}
                  transition={{ duration: 1.2, type: 'spring' }}
                >
                  <Slides item={item} />
                </motion.li>
              );
            }
          })}
      </ul>
      <div className='slider-navbar'>
        {HeroPictures &&
          HeroPictures.map((item, i) => (
            <span
              key={item.id}
              onClick={
                i < current
                  ? () => navClickHandler(i, -1)
                  : () => navClickHandler(i, 1)
              }
              className={i === current ? 'active' : ''}
            ></span>
          ))}
      </div>
      <div className='slider__arrow'>
        <motion.div
          className='slider__arrow_next'
          onClick={goNext}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z'
              fill={`var(--primary-black)`}
            />
          </svg>
        </motion.div>
        <motion.div
          className='slider__arrow_prev'
          onClick={goPrev}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z'
              fill={`var(--primary-black)`}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
