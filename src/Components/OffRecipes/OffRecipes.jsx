
//styles
import { allProduct } from '../../App'
import Card from '../Card/Card'
import styles from './OffRecipes.module.css'

const OffRecipes = () => {
  console.log('All', allProduct)
  return (
    <div className={styles.recipe}>
      {allProduct.filter((recipe)=> 
        recipe.off>0
      ).map((item)=>(
        <Card recipe={item}/>
      ))}
    </div>
  )
}

export default OffRecipes