import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

//styles
import styles from './Search.module.css';
//components
import SearchIcon from '../../../assets/icons/Search';
import { filterActions } from '../../../Store/filter-slice';

const Search = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterActions.searchFilter(input));
  }, [input]);

  //i can't forward input in store and in the same time set is to ''
  const submitHandler = (e) => {
    e.preventDefault();
    // setInput('');
  };

  return (
    <form className={styles['search-input']} onSubmit={submitHandler}>
      <div className={styles.wrapper}>
        <motion.input
          layout
          type='text'
          name='search'
          placeholder='Search Products'
          whileFocus={{ scaleX: 1.02 }}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button className={styles.icon} type='submit'>
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default Search;
