import { NavLink } from 'react-router-dom';
import CartBasket from '../../assets/icons/CartBasket';
import Logo from '../../Components/Logo/Logo';

import './Header.css';

const Header = () => {
  return (
    <nav>
      <Logo />

      <div className='nav-links'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/menu'>Menu</NavLink>
          </li>
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li>
            <NavLink to='/signup'>Signup</NavLink>
          </li>
        </ul>
      </div>
      <div className='cart'>
        <CartBasket />
        <div className='cart-counter'>7</div>
      </div>
    </nav>
  );
};

export default Header;
