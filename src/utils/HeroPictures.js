import pizza from '../assets/hero-pictures/pizza.png';
import chicken from '../assets/hero-pictures/chicken.png';
import pasta from '../assets/hero-pictures/pasta.png';
import vegetarian from '../assets/hero-pictures/vegetarian.png';
import steak from '../assets/hero-pictures/steak.png';

const HeroPictures = [
  {
    id: 'hp1',
    name: 'Pizza',
    image: pizza,
    quotes: {
      quote:
        "There's no better feeling in the world than a warm pizza box in your lap.",
      author: 'Kevin James',
    },

    color: 'red',
  },
  {
    id: 'hp2',
    name: 'Chicken',
    image: chicken,
    quotes: {
      quote:
        'And believe me, a good piece of chicken can make anybody believe in the existence of God.',
      author: 'Sherman Alexie',
    },

    color: 'red',
  },
  {
    id: 'hp3',
    name: 'Pasta',
    image: pasta,
    quotes: {
      quote:
        "Life is too short, and I'm Italian. I'd much rather eat pasta and drink wine than be a size",
      author: 'Sophia Bush',
    },

    color: 'red',
  },
  {
    id: 'hp4',
    name: 'Vegan',
    image: vegetarian,
    quotes: {
      quote:
        'Vegan is just pure love. Love for animals, love for the planet, and love for yourself',
      author: 'Mischa Temaul',
    },

    color: 'red',
  },
  {
    id: 'hp5',
    name: 'Steak',
    image: steak,
    quotes: {
      quote:
        'After you have witnessed the reality, you can no longer look at a piece of steak, and simply think "yum".',
      author: 'Mango Wodzak',
    },

    color: 'red',
  },
];

export default HeroPictures;
