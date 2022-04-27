//styles
import Search from './Search/Search';
import styles from './SortBar.module.css';

const SortBar = () => {
  return (
    <div className={styles['sort-bar']}>
      <Search />
      <div className={styles['sort-by']}></div>
    </div>
  );
};

export default SortBar;
