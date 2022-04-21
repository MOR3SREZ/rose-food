
//styles
import styles from './Card-services.module.css'
const CardServices = ({icon , content}) => {

  return (
    <div className={styles['card-services']}>
      <div className={styles["card-icon"]}>{icon}</div>
      <div className={styles["card-content"]}><h2>{content}</h2></div>
    </div>
  )
}

export default CardServices