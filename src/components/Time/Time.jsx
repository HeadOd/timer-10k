import { useState, useEffect } from "react";

export const Time = ({ count }) => {
  const [expertTime, setExpertTime] = useState(() => Number(JSON.parse(localStorage.getItem('expertTime'))) || 36000000);

  useEffect(() => {
    setExpertTime(prev => prev - count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem('expertTime', JSON.stringify(expertTime));
  }, [expertTime]);

  return  <div
      style={{
      height: '30',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101'}}
      >  
    <p>{ expertTime }</p>
    </div>
}
