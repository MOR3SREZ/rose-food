import { Link, NavLink } from 'react-router-dom';
import CartBasket from '../../assets/icons/CartBasket';
import Favorite from '../../assets/icons/Favorite';
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
        <Link to={'/cart'}>
          <CartBasket color={'var(--primary-black)'} />
          <div className='cart-counter'>7</div>
        </Link>
      </div>
      <div className='favorite'>
        <Link to={'/favorite'}>
          <Favorite color={'var(--primary-black)'} />
          <div className='favorite-counter'>7</div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
