import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

//product imports
import CHICKEN from './utils/chicken';
import PIZZA from './utils/pizza';
import STEAK from './utils/steak';
import DRINK from './utils/drink';
import VEGETARIAN from './utils/vegetarian';
import PASTA from './utils/pasta';

export const allProduct = [
  ...PIZZA,
  ...CHICKEN,
  ...PASTA,
  ...STEAK,
  ...VEGETARIAN,
  ...DRINK,
];

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
