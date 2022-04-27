import { motion } from 'framer-motion';

//styles
import styles from './Search.module.css';
//components
import SearchIcon from '../../../assets/icons/Search';

const Search = () => {
  return (
    <form className={styles['search-input']}>
      <div className={styles.wrapper}>
        <motion.input
          type='text'
          name='search'
          placeholder='Search Products'
          whileFocus={{ scaleX: 1.01 }}
        />
        <button className={styles.icon} type='submit'>
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default Search;
