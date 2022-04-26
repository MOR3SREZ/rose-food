import styles from './Logo.module.css';
import Rose from '../../assets/icons/Rose';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to='/'>
        <div className={styles['logo-name']}>
          <h1>Rose Food</h1>
        </div>
        <div className={styles['logo-svg']}>
          <Rose color={`var(--primary-red)`} />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
