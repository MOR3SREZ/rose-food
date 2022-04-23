import { Link, NavLink } from 'react-router-dom';
import CartBasket from '../assets/icons/CartBasket';
import Logo from '../Components/Logo/Logo';

import styles from './Header.module.css';

const Header = () => {
  return (
    <nav>
      <Link to='/'>
        <Logo />
      </Link>
      <div className={styles['nav-links']}>
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
      <div className={styles.cart}>
        <CartBasket />
        <div className={styles['cart-counter']}>7</div>
      </div>
    </nav>
  );
};

export default Header;
