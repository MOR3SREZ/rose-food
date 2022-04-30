//styles
import styles from './Discount.module.css';
import chicken from '../../assets/hero-pictures/chicken.png';
import Timer from './Timer/Timer';

const Discount = () => {
  return (
    <section className={styles.discount}>
      <div className={styles['main-container']}>
        <div className={styles['discount-content']}>
          <h2>Our Spacial Offer</h2>
          <div className={styles.timer}>
            <p>Discount End in:</p>
            <div className={styles['timer-container']}>
              <Timer />
            </div>
          </div>
        </div>
        <div className={styles['discount-img']}>
          <img src={chicken} alt='this is a chicken ' />
        </div>
      </div>
    </section>
  );
};

export default Discount;
