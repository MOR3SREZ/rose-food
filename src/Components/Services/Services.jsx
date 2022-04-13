
//styles
import styles from './Services.module.css'

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles["services-title"]}>
        <h2>We offer people best way<br /> to eat healthy food</h2>
      </div>
      <div className={styles["services-slider"]}>
        <div className={styles["services-slides"]}>
          <div className={styles.slide}>
            <p>Hot Food</p>
          </div>
          <div className={styles.slide}>
            <p>Fast Food</p>
          </div>
          <div className={styles.slide}>
            <p>Healthy Food</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services