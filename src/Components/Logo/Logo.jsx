import styles from './Logo.module.css';
import Rose from '../../assets/icons/Rose';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles['logo-name']}>
        <h1>Rose Food</h1>
      </div>
      <div className={styles['logo-svg']}>
        <Rose color={`var(--primary-red)`} />
      </div>
    </div>
  );
};

export default Logo;
