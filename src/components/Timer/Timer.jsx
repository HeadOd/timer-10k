import { useState, useRef, useEffect } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);
  const [activeBtn, setActiveBtn] = useState(true);
  const [minusBtn, setminusBtn] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  let timerId = useRef(null);

  const startTimer = () => {
    console.log('It`s work!');
    timerId.current = setInterval(() => { 
      setCount(prev => prev + 1)
    }, 1000);

    setActiveBtn(false);
  }

  useEffect(() => {
    setMinutes(addLeadingZero(0));
    setHours(addLeadingZero(0));

    if (count >= 3600) {
      setHours(addLeadingZero(Math.floor(count / 3600)));
      setMinutes(addLeadingZero(Math.floor((count % 3600) / 60)));
      setSeconds(addLeadingZero(Math.floor((count % 3600) % 60)));
    } else if (count >= 60) {
      setSeconds(addLeadingZero(count % 60));
      setMinutes(addLeadingZero(Math.floor(count / 60)));
    } else if (count < 60) {
      setSeconds(addLeadingZero(count));
    }
    
  }, [count])

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  };

  const stop = () => {
    console.log('Stop!');
    clearInterval(timerId.current);
    setActiveBtn(true);
    setminusBtn(false);
  }

  const minus = () => {
    console.log(count);
    setCount(0);
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