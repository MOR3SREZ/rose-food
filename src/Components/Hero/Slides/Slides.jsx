import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

//styles
import './Slides.css';

const Slides = ({ item }) => {
  const [isHover, setHovered] = useState(false);
  return (
    <>
      <div className='image-container'>
        <img src={item.image} alt='' />
      </div>
      <h2 className='product__hero-title'>{item.name}</h2>
      <div className='product__hero-content'>
        <div className='quote-side'>
          <p className='quote-quote'>"{item.quotes.quote}"</p>
          <p className='quote-author'>{item.quotes.author}</p>
        </div>
        <div className='action-side'>
          <p>
            We offering you the best <span>{item.name}</span> in the world just
            try it!
            <br />
            there is no doubt you can get a new life with it
          </p>
          <Link to='/menu'>
            <motion.button
              className='action-button'
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            >
              Explore Menu
              <motion.span
                animate={isHover ? { x: '30%' } : { x: 0 }}
                transition={{ ease: 'easeIn', duration: 0.2 }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
                </svg>
              </motion.span>
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Slides;
