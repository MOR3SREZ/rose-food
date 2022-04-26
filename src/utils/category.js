import pizza from '../assets/hero-pictures/pizza.png';
import chicken from '../assets/hero-pictures/chicken.png';
import pasta from '../assets/hero-pictures/pasta.png';
import vegetarian from '../assets/hero-pictures/vegetarian.png';
import steak from '../assets/hero-pictures/steak.png';
import drink from '../assets/hero-pictures/drink.png';

const CategoryList = [
  {
    id: 'cat1',
    name: 'Pizza',
    image: pizza,
    count: 16,
  },
  {
    id: 'cat2',
    name: 'Chicken',
    image: chicken,
    count: 9,
  },
  {
    id: 'cat3',
    name: 'Pasta',
    image: pasta,
    count: 12,
  },
  {
    id: 'cat4',
    name: 'Vegan',
    image: vegetarian,
    count: 12,
  },
  {
    id: 'cat5',
    name: 'Steak',
    image: steak,
    count: 6,
  },
  {
    id: 'cat6',
    name: 'Drink',
    image: drink,
    count: 9,
  },
];

export default CategoryList;
