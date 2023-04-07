import { useState, useRef, useEffect } from "react";
import { PropTypes } from 'prop-types';
import { IconContext } from "react-icons";

import { AiFillPlayCircle } from 'react-icons/ai';
import { BsFillStopCircleFill } from "react-icons/bs";
import { GiHeartMinus } from "react-icons/gi";
import { TimerItem, Clock, BoxButton, Button, ButtonName } from './Timer.styled';
import { Section, Container, TimeColor } from "../Global/Global.styled";
import { addLeadingZero } from "../Global/addLeadingZero";

export const Timer = ({ onClick }) => {
  const [count, setCount] = useState(() => Number(JSON.parse(localStorage.getItem('count'))) || 0);
  const [activeBtn, setActiveBtn] = useState(true);
  const [minusBtn, setminusBtn] = useState(() => Number(JSON.parse(localStorage.getItem('count'))) ? false : true);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(() => addLeadingZero(0));
  const [hours, setHours] = useState(() => addLeadingZero(0));
  let timerId = useRef(null);

  const startTimer = () => {
    timerId.current = setInterval(() => { 
      setCount(prev => prev + 1)
    }, 1000);

    setActiveBtn(false);
    setminusBtn(true);
  }

  useEffect(() => {
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

    localStorage.setItem('count', JSON.stringify(count));
  }, [count])

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
  
  return (<Section>
    <Container>
      <h2>You are closer to the goal on:</h2>
      <ul>
        <TimerItem><Clock>{ hours }</Clock><TimeColor>hours</TimeColor></TimerItem>
        <TimerItem><Clock>{ minutes }</Clock><TimeColor>minutes</TimeColor></TimerItem>
        <TimerItem><Clock>{ seconds }</Clock><TimeColor>seconds</TimeColor></TimerItem>
      </ul>

      <IconContext.Provider value={{size: '24px'}}>
        <BoxButton>
          <Button type="button" disabled={!activeBtn} onClick={() => startTimer()}><AiFillPlayCircle /><ButtonName>Start</ButtonName></Button>
          <Button type="button" disabled={activeBtn} onClick={() => stop()}><BsFillStopCircleFill /><ButtonName>Stop</ButtonName></Button>
          <Button type="button" disabled={minusBtn} onClick={() => minus()}><GiHeartMinus /><ButtonName>Minus</ButtonName></Button>
        </BoxButton>
      </IconContext.Provider>     
    </Container>
  </Section>);
}

Timer.propTypes = {
  onClick: PropTypes.func.isRequired,
}