//Styles
import { useState } from 'react';
import styles from './Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div className={styles['order-counter']}>
      <button
        className={styles.decrease}
        onClick={() => setCount(count !== 1 ? count - 1 : 1)}
      >
        -
      </button>
      <input
        type='number'
        min={1}
        max={100}
        value={count}
        onChange={(e) => setCount(+e.target.value)}
      />
      <button
        className={styles.increase}
        onClick={() => setCount(count !== 100 ? count + 1 : 100)}
      >
        +
      </button>
    </div>
  );
};
export default Counter;
