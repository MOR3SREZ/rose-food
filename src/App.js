import CHICKEN from './utils/chicken';
import PIZZA from './utils/pizza';
import STEAK from './utils/steak';
import DRINK from './utils/drink';
import VEGETARIAN from './utils/vegetarian';
import PASTA from './utils/pasta';

import rose from './assets/icons/logo.svg';

let allProduct = [
  ...PIZZA,
  ...CHICKEN,
  ...PASTA,
  ...STEAK,
  ...VEGETARIAN,
  ...DRINK,
];

function App() {
  console.log(allProduct);
  return (
    <div className='App'>
      <h1>
        Rose's
        <img src={rose} alt='' />
      </h1>
      <h2>this is a test </h2>
    </div>
  );
}

export default App;
