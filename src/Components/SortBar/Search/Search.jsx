import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

//styles
import styles from './Search.module.css';
//components
import SearchIcon from '../../../assets/icons/Search';

const Search = () => {
  const [input, setInput] = useState('');
  const inputValue = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setInput(inputValue.current.value);
    inputValue.current.value = '';
  };

  console.log('input', input);
  return (
    <form className={styles['search-input']} onSubmit={(e) => submitHandler(e)}>
      <div className={styles.wrapper}>
        <motion.input
          layout
          type='text'
          name='search'
          placeholder='Search Products'
          whileFocus={{ scaleX: 1.02 }}
          ref={inputValue}
        />
        <button className={styles.icon} type='submit'>
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default Search;
