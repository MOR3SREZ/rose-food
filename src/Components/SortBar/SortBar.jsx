//styles
import Search from './Search/Search';
import Select from './Select/Select';
import styles from './SortBar.module.css';

const SortBar = () => {
  return (
    <div className={styles['sort-bar']}>
      <Search />
      <Select />
    </div>
  );
};

export default SortBar;
