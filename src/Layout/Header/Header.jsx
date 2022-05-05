import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';

//Components
import Logo from '../../Components/Logo/Logo';

//styles
import './Header.css';
import CartBasket from '../../assets/icons/CartBasket';
import Favorite from '../../assets/icons/Favorite';
import { useEffect, useState } from 'react';
import Hamburger from '../../assets/icons/Hamburger';

const Header = () => {
  const controlsCart = useAnimation();
  const controlsFavorite = useAnimation();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);

  const [cartLength, setCartLength] = useState(cartItems.length);
  const [favoriteLength, setFavoriteLength] = useState(favoriteItems.length);
  const [open, setOpen] = useState(false);

  //animation controls for cart and favorite
  useEffect(() => {
    setCartLength((prev) => {
      //to prevent re rendering on page change
      if (prev !== cartItems.length) {
        controlsCart.start({
          rotate: ['0deg', '35deg', '-35deg', '15deg', '-15deg', '0deg'],
        });
        return cartItems.length;
      } else return cartItems.length;
    });
    setFavoriteLength((prev) => {
      //to prevent re rendering on page change
      if (prev !== favoriteItems.length) {
        controlsFavorite.start({
          rotate: ['0deg', '35deg', '-35deg', '15deg', '-15deg', '0deg'],
        });
        return favoriteItems.length;
      } else return favoriteItems.length;
    });
  }, [cartItems.length, favoriteItems.length]);

  //Hamburger handler
  return (
    <nav>
      <Logo />

      <div className={`nav-links ${open ? 'active' : ''}`}>
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
      <motion.div className='cart' animate={controlsCart}>
        <Link to={'/cart'}>
          <CartBasket color={'var(--primary-black)'} />
          <div className='cart-counter'>{cartLength}</div>
        </Link>
      </motion.div>
      <motion.div className='favorite' animate={controlsFavorite}>
        <Link to={'/favorite'}>
          <Favorite color={'var(--primary-black)'} />
          <div className='favorite-counter'>{favoriteLength}</div>
        </Link>
      </motion.div>
      <div className='hamburger' onClick={() => setOpen((prev) => !prev)}>
        <Hamburger />
      </div>
    </nav>
  );
};

export default Header;
