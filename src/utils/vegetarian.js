//import pictures
import vegetarian1 from '../assets/vegetarian/Black Pepper Tofu.jpg';
import vegetarian2 from '../assets/vegetarian/Chickpea Pancakes.jpg';
import vegetarian3 from '../assets/vegetarian/Creamy Spinach.jpg';
import vegetarian4 from '../assets/vegetarian/Crispy Tofu with Coconut Quinoa.jpg';
import vegetarian5 from '../assets/vegetarian/Pan-Roasted Sweet.jpg';
import vegetarian6 from '../assets/vegetarian/Rutabaga Tacos with Greens.jpg';
import vegetarian7 from '../assets/vegetarian/Sesame Tofu.jpg';
import vegetarian8 from '../assets/vegetarian/Soy-Glazed Tofu.jpg';
import vegetarian9 from '../assets/vegetarian/Vegetarian Chili.jpg';
import vegetarian10 from '../assets/vegetarian/Vegetarian Meatballs.jpg';
import vegetarian11 from '../assets/vegetarian/Vegetarian Ramen.jpg';
import vegetarian12 from '../assets/vegetarian/Warm Chickpea Bowls.jpg';

const VEGETARIAN = [
  {
    id: 'v1',
    title: 'Black Pepper Tofu',
    category: 'vegetarian',
    price: '12',
    rate: '3.2',
    image: vegetarian1,
    off: '10',
    ingredients: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'],
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus rerum minus nostrum fugiat quibusdam! Ea atque ut quasi cum ex adipisci distinctio quidem autem. Excepturi, quia iste nihil eum provident mollitia tempora voluptate ad.',
  },
  {
    id: 'v2',
    title: 'Chickpea Pancakes',
    category: 'vegetarian',
    price: '13.55',
    rate: '3.8',
    image: vegetarian2,
    off: '12',
    ingredients: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sed quae at asperiores perspiciatis culpa animi optio corporis dolorum? Quidem at explicabo voluptatem dolores voluptatibus earum voluptas iste! Iste, quia ab dolorem sunt minima earum.',
  },
  {
    id: 'v3',
    title: 'Creamy Spinach',
    category: 'vegetarian',
    price: '13.66',
    rate: '3.9',
    image: vegetarian3,
    off: '0',
    ingredients: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'v4',
    title: 'Crispy Tofu with Coconut Quinoa',
    category: 'vegetarian',
    price: '18.10',
    rate: '4.1',
    image: vegetarian4,
    off: '0',
    ingredients: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'v5',
    title: 'Pan-Roasted Sweet',
    category: 'vegetarian',
    price: '17.99',
    rate: '3.5',
    image: vegetarian5,
    off: '0',
    ingredients: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'v6',
    title: 'Rutabaga Tacos with Greens',
    category: 'vegetarian',
    price: '13.00',
    rate: '4.3',
    image: vegetarian6,
    off: '0',
    ingredients: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'v7',
    title: 'Sesame Tofu',
    category: 'vegetarian',
    price: '15.10',
    rate: '3.8',
    image: vegetarian7,
    off: '0',
    ingredients: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'v8',
    title: 'Soy-Glazed Tofu',
    category: 'vegetarian',
    price: '16.50',
    rate: '3.6',
    image: vegetarian8,
    off: '0',
    ingredients: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'v9',
    title: 'Vegetarian Chili',
    category: 'vegetarian',
    price: '20.00',
    rate: '3',
    image: vegetarian9,
    off: '0',
    ingredients: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'v10',
    title: 'Vegetarian Meatballs',
    category: 'vegetarian',
    price: '17.99',
    rate: '4.3',
    image: vegetarian10,
    off: '0',
    ingredients: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'v11',
    title: 'Vegetarian Ramen',
    category: 'vegetarian',
    price: '18.00',
    rate: '4.9',
    image: vegetarian11,
    off: '0',
    ingredients: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'v12',
    title: 'Warm Chickpea Bowls',
    category: 'vegetarian',
    price: '14.00',
    rate: '4.4',
    image: vegetarian12,
    off: '0',
    ingredients: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
];
export default VEGETARIAN;
