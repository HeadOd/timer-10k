import { useState, useEffect } from "react";

import { Section, Container, TimeColor } from "../Global/Global.styled";
import { addLeadingZero } from "../Global/addLeadingZero";
import { TimeItem, Clock } from "./Time.styled";

export const Time = ({ count }) => {
  const [expertTime, setExpertTime] = useState(() => Number(JSON.parse(localStorage.getItem('expertTime'))) || 36000000);
  const [seconds, setSeconds] = useState(() => addLeadingZero(0));
  const [minutes, setMinutes] = useState(() => addLeadingZero(0));
  const [hours, setHours] = useState(() => addLeadingZero(0));
  const [days, setDays] = useState(() => addLeadingZero(0));

  useEffect(() => {
    setExpertTime(prev => prev - count); 
  }, [count]);

  useEffect(() => {
    localStorage.setItem('expertTime', JSON.stringify(expertTime));

    if(expertTime >= 86400){
      setDays(addLeadingZero(Math.floor(expertTime / 86400)));
      setHours(addLeadingZero(Math.floor((expertTime % 86400) / 3600)));
      setMinutes(addLeadingZero(Math.floor((expertTime % 3600) / 60)));
      setSeconds(addLeadingZero(Math.floor((expertTime % 3600) % 60)));
    } else if (expertTime >= 3600) {
      setHours(addLeadingZero(Math.floor(expertTime / 3600)));
      setMinutes(addLeadingZero(Math.floor((expertTime % 3600) / 60)));
      setSeconds(addLeadingZero(Math.floor((expertTime % 3600) % 60)));
    } else if (expertTime >= 60) {
      setSeconds(addLeadingZero(expertTime % 60));
      setMinutes(addLeadingZero(Math.floor(expertTime / 60)));
    } else if (expertTime < 60) {
      setSeconds(addLeadingZero(expertTime));
    } 
  }, [expertTime]);

  return  (<Section>
    <Container>  
      <h1>You will become a professional through:</h1>
      <ul>
        <TimeItem><Clock>{ days }</Clock><TimeColor>days</TimeColor></TimeItem>
        <TimeItem><Clock>{ hours }</Clock><TimeColor>hours</TimeColor></TimeItem>
        <TimeItem><Clock>{ minutes }</Clock><TimeColor>minutes</TimeColor></TimeItem>
        <TimeItem><Clock>{ seconds }</Clock><TimeColor>seconds</TimeColor></TimeItem>
      </ul>
    </Container>
  </Section>);
}
