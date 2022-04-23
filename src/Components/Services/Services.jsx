// components
import CardServices from './Card-services';

//svg icons
import HealthyFood from '../../assets/icons/HealthyFood';
import CashOnDelivery from '../../assets/icons/CashOnDelivery';
import FullTime from '../../assets/icons/FullTime';
import HotFood from '../../assets/icons/HotFood';

//styles
import styles from './Services.module.css';
import Rose from '../../assets/icons/Rose';

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles['services-title']}>
        <h2>
          We offer people best way
          <br /> to eat healthy food
        </h2>
      </div>
      <div className={styles['services-slider']}>
        <CardServices icon={<HealthyFood />} content={'Healthy Food'} />
        <CardServices icon={<CashOnDelivery />} content={'Cash On Delivery'} />
        <CardServices icon={<HotFood />} content={'Hot Food'} />
        <CardServices icon={<FullTime />} content={'24H Service'} />
      </div>
      <div className={styles['services-background']}>
        <Rose color={'rgba(150,150,150,0.1)'} />
      </div>
    </section>
  );
};

export default Services;
