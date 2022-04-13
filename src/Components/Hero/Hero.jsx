import { useEffect, useState } from 'react';

//styles
import './Hero.css';

import creamy from '../../assets/pasta/Creamy Lemon Zucchini Pasta.jpg';
import picante from '../../assets/pizza/Picante.jpg';
import quattro from '../../assets/pizza/Quattro stagioni pizza.jpg';
import warm from '../../assets/vegetarian/Warm Chickpea Bowls.jpg';
import Quattro from '../../assets/chicken/Grilled Chicken Wings with Shishito Peppers.jpg';


const slides = [creamy, picante, quattro,warm,Quattro];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState({
    index: '',
    dir: '',
  });
  const [prev, setPrev] = useState({
    index: '',
    dir: '',
  });

  //Variabels
  const slidesLength = slides.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 10000;

  //Functions
  const goNextAnime = (index, dir) => {
    setNext({ index: index, dir: dir });
  };
  const goPrevAnime = (index, dir) => {
    setPrev({ index: index, dir: dir });
  };

  //main funcyion for rotate
  const goTo = (index, dir) => {
    goPrevAnime(current, dir);
    goNextAnime(index, dir);
    setCurrent(index);
  };

  const goStep = (dir) => {
    let index = current + dir;
    let len = slidesLength;
    let currentIndex = (index + len) % len;
    goTo(currentIndex, dir);
  };

  //Click events prev & next
  const goNext = () => {
    goStep(1);
  };
  const goPrev = () => {
    goStep(-1);
  };

  function auto() {
    slideInterval = setInterval(goNext, intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [current]);

  //Click navhandler
  // const navClickhandler = (e) => {
  //   if (isAnimating) return;
  //   let target = e.target.closest('.nav-control');
  //   if (!target) return;
  //   let index = thumbs.indexOf(target);
  //   if (index === current) return;
  //   let direction = index > current ? 1 : -1;
  //   console.log(index, current);
  //   goTo(index, direction);
  // };

  return (
    <div className='hero'> <section className='page-wrapper'>
    <div className='slider'>
      <ul className='slider-list'>
        {slides.map((slide, i) => {
          if (next.index === i) {
            return (
              <li
                key={i}
                className={
                  next.dir === 1
                    ? 'slider-list__item slider-list__item_active next-go-right'
                    :'slider-list__item slider-list__item_active next-go-left '
                }
              >
                <span className='main__element'>
                  <img src={slide} alt={'sds'} />
                </span>
              </li>
            );
          } else if (prev.index === i) {
            return (
              <li
                key={i}
                className={
                  prev.dir === 1
                    ? 'slider-list__item slider-list__item_de_active prev-go-right'
                    : 'slider-list__item slider-list__item_de_active prev-go-left '
                }
              >
                <span className='main__element'>
                  <img src={slide} alt={'sds'} />
                </span>
              </li>
            );
          } else
            return (
              <li
                key={i}
                className={
                  current === i
                    ? 'slider-list__item slider-list__item_active'
                    : 'slider-list__item'
                }
              >
                <span className='main__element'>
                  <img src={slide} alt={'sds'} />
                </span>
              </li>
            );
        })}
      </ul>

      {/* <div className='slider__nav-bar'>
        {thumbs.map((_, i) => (
          <a
            key={i}
            className={
              current === i
                ? 'nav-control nav-control_active'
                : 'nav-control'
            }
            onClick={(e) => navClickhandler(e)}
          ></a>
        ))}
      </div> */}

      <div className='slider__controls'>
        <span
          className='slider__arrow slider__arrow_prev'
          onClick={goPrev}
        > ⏮</span>
        <span
          className='slider__arrow slider__arrow_next'
          onClick={goNext}
        >⏭</span>
      </div>
    </div>
  </section></div>
   
  )
}

export default Hero