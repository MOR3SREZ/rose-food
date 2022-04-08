//image imports
import pizza1 from '../assets/pizza/Quattro stagioni pizza.jpg';
import pizza2 from '../assets/pizza/Prosciutto-E-Funghi.jpg';
import pizza3 from '../assets/pizza/Americana.jpg';
import pizza4 from '../assets/pizza/capriciosa.jpg';
import pizza5 from '../assets/pizza/carnivore.jpg';
import pizza6 from '../assets/pizza/crudo-e-rucola.jpg';
import pizza7 from '../assets/pizza/everest.jpg';
import pizza8 from '../assets/pizza/Margherita-scaled.jpg';
import pizza9 from '../assets/pizza/grande.jpg';
import pizza10 from '../assets/pizza/Hawaiian.jpg';
import pizza11 from '../assets/pizza/italia.jpg';
import pizza12 from '../assets/pizza/Picante.jpg';
import pizza13 from '../assets/pizza/pollo.jpg';
import pizza14 from '../assets/pizza/primavera.jpg';
import pizza15 from '../assets/pizza/salami.jpg';
import pizza16 from '../assets/pizza/vegetariana.jpg';

const PIZZA = [
  {
    id: 'p1',
    title: 'Quattro stagioni pizza',
    category: 'pizza',
    price: '15.23',
    rate: '4.8',
    image: pizza1,
    ingredients: [
      'Flour',
      'Prosciutto Crudo',
      'Cherry Tomato',
      'Cheese',
      'Olives',
      'Salamino Piccante',
      'Basil',
    ],
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus rerum minus nostrum fugiat quibusdam! Ea atque ut quasi cum ex adipisci distinctio quidem autem. Excepturi, quia iste nihil eum provident mollitia tempora voluptate ad.',
  },
  {
    id: 'p2',
    title: 'Prosciutto e funghi pizza ',
    category: 'pizza',
    price: '11.60',
    rate: '4.6',
    image: pizza2,
    ingredients: [
      'Flour',
      'Prosciutto Crudo',
      'Tomato Sauce',
      'Mushroom',
      'Mozzarell',
    ],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sed quae at asperiores perspiciatis culpa animi optio corporis dolorum? Quidem at explicabo voluptatem dolores voluptatibus earum voluptas iste! Iste, quia ab dolorem sunt minima earum.',
  },
  {
    id: 'p3',
    title: 'Picante pizza',
    category: 'pizza',
    price: '10.50',
    rate: '4.6',
    image: pizza12,
    ingredients: [
      'Tomato Sauce',
      'Chili Flakes',
      'Mozzarella',
      'Hot Green Chili',
      'Olives',
      'Jalapenos',
    ],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'p4',
    title: 'Pizza Margherita',
    category: 'pizza',
    price: '8.00',
    rate: '4.5',
    image: pizza8,
    ingredients: ['Tomato', 'Flour', 'Mozzarella', 'Basil', 'Olives'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'p5',
    title: 'Pizza Hawaiian',
    category: 'pizza',
    price: '12.90',
    rate: '3.8',
    image: pizza10,
    ingredients: [
      'Smoky BBQ sauce',
      'mozzarella',
      'chicken',
      'sweet corn',
      'mushroom',
      'parmesan',
    ],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'p6',
    title: 'Pizza Grande',
    category: 'pizza',
    price: '10.50',
    rate: '4.9',
    image: pizza9,
    ingredients: ['Homemade tomato sauce', 'mozzarella', 'ham', 'pineapple '],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'p7',
    title: 'Pizza Crudo e Rucola',
    category: 'pizza',
    price: '10.00',
    rate: '4.1',
    image: pizza6,
    ingredients: ['Homemade tomato sauce', 'mozzarella', 'ham', 'pineapple '],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'p8',
    title: 'Pizza Everest',
    category: 'pizza',
    price: '13.00',
    rate: '3.5',
    image: pizza7,
    ingredients: [
      'Tomato Sauce',
      'Prosciutto Cotto',
      'Champignons',
      'Artichoke',
      'Olives',
      'Flour',
    ],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'p9',
    title: 'Pizza Capriciosa',
    category: 'pizza',
    price: '9.99',
    rate: '3.2',
    image: pizza4,
    ingredients: ['Homemade tomato sauce', 'mozzarella', 'ham', 'pineapple '],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'p10',
    title: 'Pizza Americana',
    category: 'pizza',
    price: '14.30',
    rate: '4.7',
    image: pizza3,
    ingredients: [
      'mozzarella',
      'Homemade tomato sauce',
      'Tomato Sauce',
      'Prosciutto Cotto',
      'Champignons',
      'ham',
    ],
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ullam doloremque, quae delectus repellendus quibusdam neque dolor corrupti? Quos nobis reiciendis, optio odio dolor voluptas culpa sint suscipit iure vero facere voluptate at facilis atque?',
  },
  {
    id: 'p11',
    title: 'Pizza Carnivore',
    category: 'pizza',
    price: '12.80',
    rate: '4.8',
    image: pizza5,
    ingredients: [
      'Homemade tomato sauce',
      'Tomato Sauce',
      'Prosciutto Cotto',
      'Champignons',
    ],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'p12',
    title: 'Pizza Primavera',
    category: 'pizza',
    price: '15.80',
    rate: '3.9',
    image: pizza14,
    ingredients: ['Homemade tomato sauce', 'mozzarella', 'ham', 'pineapple '],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'p13',
    title: 'Pizza Italia',
    category: 'pizza',
    price: '10.90',
    rate: '4.4',
    image: pizza11,
    ingredients: ['Homemade tomato sauce', 'mozzarella', 'ham', 'pineapple '],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'p14',
    title: 'Pizza Pollo',
    category: 'pizza',
    price: '11.00',
    rate: '4',
    image: pizza13,
    ingredients: ['Homemade tomato sauce', 'mozzarella', 'ham', 'pineapple '],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'p15',
    title: 'Pizza Vegetariana',
    category: 'pizza',
    price: '9.00',
    rate: '3.1',
    image: pizza16,
    ingredients: ['Homemade tomato sauce', 'mozzarella', 'ham', 'pineapple '],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium ad commodi quidem dolore fugit voluptatem quia saepe facilis dignissimos illo magni tenetur vel voluptate, minima harum ipsum nihil error quod voluptatum nam quas nisi.',
  },
  {
    id: 'p16',
    title: 'Pizza Salami',
    category: 'pizza',
    price: '9.50',
    rate: '3.2',
    image: pizza15,
    ingredients: ['Homemade tomato sauce', 'mozzarella', 'ham', 'pineapple '],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi a eveniet nam, laudantium soluta autem praesentium, vero sint quis, odit necessitatibus in! Dicta, amet quae in repudiandae reprehenderit, harum iste quod totam minima deleniti culpa!',
  },
];

export default PIZZA;
