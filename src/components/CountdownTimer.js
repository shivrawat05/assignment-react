import React, { useState, useEffect } from 'react';
import './../styles.css';

function CountdownTimer() {
  const [time, setTime] = useState(0);
  const [inputTime, setInputTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (timerRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, time]);

  const startTimer = () => {
    setTime(inputTime * 60);
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setTime(0);
    setTimerRunning(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <label htmlFor="timerInput">Set Timer (in minutes): </label>
      <input type="number" id="timerInput" value={inputTime} onChange={e => setInputTime(e.target.value)} />
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
      <div className="countdown">{formatTime()}</div>
    </div>
  );
}

export default CountdownTimer;
