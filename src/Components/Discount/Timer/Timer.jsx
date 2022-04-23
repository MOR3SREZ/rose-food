import React, { useEffect, useState } from 'react';

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
    <div>
      <p>{day}day</p>
      <p>{hour < 10 ? '0' + hour : hour}hour</p>
      <p>{minute < 10 ? '0' + minute : minute}minute</p>
      <p>{second < 10 ? '0' + second : second}seconde</p>
    </div>
  );
};

export default Timer;
