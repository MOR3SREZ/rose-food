import { Link, NavLink } from 'react-router-dom';
import CartBasket from '../assets/icons/CartBasket';
import Rose from '../assets/icons/Rose';

import styles from './Header.module.css'

const Header = () => {
  return (
    <nav>
      <div className={styles.logo}>
      <div className={styles["logo-name"]}>
         <Link to='/'>
         <h1>Rose Food</h1>
         </Link> 
        </div>
        <div className={styles["logo-svg"]}>
          <Rose color={`var(--primary-red)`}/>
        </div>
        
      </div>
      <div className={styles["nav-links"]}>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/menu' >Menu</NavLink>
          </li>
          <li>
            <NavLink to='/login' >Login</NavLink>
          </li>
          <li>
            <NavLink to='/signup' >Signup</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.cart}>
        <CartBasket />
        <div className={styles["cart-counter"]}>7</div>
      </div>
    </nav>
  )
}

export default Header;