import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

//styles
import styles from './Select.module.css';

const sortOptions = [
  {
    id: 'none',
    text: 'Featured',
  },
  {
    id: 'pLow',
    text: 'Price: Low to High',
  },
  {
    id: 'pHigh',
    text: 'Price: High to Low',
  },
  {
    id: 'rev',
    text: 'Avg. Customer Review',
  },
];

const Select = () => {
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);

  const clickHandler = (e, id) => {
    setSelected(e.target.textContent);
    setOpen(false);
    //id for sorting Foods
  };

  useEffect(() => {
    setOpen(false);
  }, [selected]);

  return (
    <div className={styles.dropdown}>
      <motion.div
        className={styles['dropdown-btn']}
        layout
        animate={open ? { scale: 1.1 } : {}}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <p>sort by: {selected}</p>
        <motion.span
          className={styles.arrow}
          animate={open ? { rotate: '90deg' } : { rotate: '0deg' }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z'
              fill={`var(--primary-black)`}
            />
          </svg>
        </motion.span>
      </motion.div>

      {open && (
        <div className={styles['dropdown-content']}>
          {sortOptions.map((option) => (
            <motion.div
              className={styles['content-item']}
              key={option.id}
              whileHover={{ scale: 1.1 }}
              onClick={(e) => clickHandler(e, option.id)}
            >
              <motion.p
                whileHover={{ color: `var(--primary-orange)` }}
                transition={{ duration: 0.15 }}
              >
                {option.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Select;
