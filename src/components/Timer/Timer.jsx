import { useState, useRef, useEffect } from "react";
import { PropTypes } from 'prop-types';

export const Timer = ({ onClick }) => {
  const [count, setCount] = useState(() => Number(JSON.parse(localStorage.getItem('count'))) || 0);
  const [activeBtn, setActiveBtn] = useState(true);
  const [minusBtn, setminusBtn] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(() => addLeadingZero(0));
  const [hours, setHours] = useState(() => addLeadingZero(0));
  let timerId = useRef(null);

  const startTimer = () => {
    timerId.current = setInterval(() => { 
      setCount(prev => prev + 1)
    }, 1000);

    setActiveBtn(false);
  }

  useEffect(() => {
    if (count >= 3600) {
      setHours(addLeadingZero(Math.floor(count / 3600)));
      setMinutes(addLeadingZero(Math.floor((count % 3600) / 60)));
      setSeconds(addLeadingZero(Math.floor((count % 3600) % 60)));
    } else if (count >= 60) {
      console.log('min');
      setSeconds(addLeadingZero(count % 60));
      setMinutes(addLeadingZero(Math.floor(count / 60)));
    } else if (count < 60) {
      setSeconds(addLeadingZero(count));
    }  

    localStorage.setItem('count', JSON.stringify(count));
  }, [count])

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  };

  const stop = () => {
    clearInterval(timerId.current);
    setActiveBtn(true);
    setminusBtn(false);
  }

  const minus = () => {
    onClick(count);

    setCount(0);
    setMinutes(addLeadingZero(0));
    setHours(addLeadingZero(0));
    setminusBtn(true);
  }
  
  return <div>
    <p
      style={{
        height: '30h',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
        <span className='hours'>{hours}</span>
        <span>:</span>
        <span className='minutes'>{minutes}</span>
        <span>:</span>
        <span className='seconds'>{seconds}</span>
    </p>
    <button type="button" disabled={!activeBtn} onClick={() => startTimer()}>Start</button>
    <button type="button" disabled={activeBtn} onClick={() => stop()}>Stop</button>
    <button type="button" disabled={minusBtn} onClick={() => minus()}>Minus</button>
  </div>
}

Timer.propTypes = {
  onClick: PropTypes.func.isRequired,
}