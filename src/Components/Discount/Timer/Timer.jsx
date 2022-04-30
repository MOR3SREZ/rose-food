import { useState } from 'react';

//styles
import styles from './Timer.module.css';

const Timer = () => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const countdown = () => {
    const countDate = new Date('Mar 17, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const s = 1000;
    const m = s * 60;
    const h = m * 60;
    const d = h * 24;

    setDay(Math.floor(gap / d));
    setHour(Math.floor((gap % d) / h));
    setMinute(Math.floor((gap % h) / m));
    setSecond(Math.floor((gap % m) / s));
  };
  setInterval(countdown, 1000);

  return (
    <div className={styles.countdown}>
      <div className={styles.container}>
        <span>
          {day} <small>Day</small>
        </span>
        <span>
          {hour < 10 ? '0' + hour : hour} <small>Hour</small>
        </span>

        <span>
          {minute < 10 ? '0' + minute : minute} <small>Minute</small>
        </span>
        <span>
          {second < 10 ? '0' + second : second} <small>Second</small>
        </span>
      </div>
    </div>
  );
};

export default Timer;
