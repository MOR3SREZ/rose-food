import React from 'react';

//components
import Logo from '../../Components/Logo/Logo';
import Location from '../../assets/icons/Location';
import Phone from '../../assets/icons/Phone';

//styles
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.top}>
        <div className={styles['contact-information']}>
          <Logo />
          <div className={styles.address}>
            <Location />
            <p>
              401 Broadway 24th floor
              <br /> Near ant mall cross road
            </p>
          </div>
          <dir className={styles.telephone}>
            <Phone />
            <p>
              Phone: 1-800-222-000
              <br /> Email: demo@demo.com
            </p>
          </dir>
        </div>
        <div className={styles['other-links']}>
          <div className={styles.services}>
            <h3>Services</h3>
            <ul>
              <li>About Rose Food</li>
              <li>Faq's</li>
              <li>Contact us</li>
              <li>News</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className={styles.privacy}>
            <h3>Privacy & terms</h3>
            <ul>
              <li>Payment policy</li>
              <li>Privacy policy</li>
              <li>Return policy</li>
              <li>Shipping policy</li>
              <li>Terms & conditions</li>
            </ul>
          </div>
          <div className={styles.account}>
            <h3>My account</h3>
            <ul>
              <li>My account</li>
              <li>My cart</li>
              <li>Order history</li>
              <li>My wishlist</li>
              <li>My address</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        Copyright &#169; 2022 MORTEZA REZAEIAN
      </div>
    </footer>
  );
};

export default Footer;
