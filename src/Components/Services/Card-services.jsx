import {motion} from 'framer-motion'
//styles
import styles from './Card-services.module.css'
const CardServices = ({icon , content}) => {

  return (
    <motion.div className={styles['card-services']} whileHover={{scale:1.1}} transition={{ease:'easeInOut', duration:0.3}}>
      <div className={styles["card-icon"]}>{icon}</div>
      <div className={styles["card-content"]}><h2>{content}</h2></div>
    </motion.div>
  )
}

export default CardServices