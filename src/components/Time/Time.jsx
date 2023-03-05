import { useState, useEffect } from "react";

import { Section, Container } from "../Global/Global.styled";

export const Time = ({ count }) => {
  const [expertTime, setExpertTime] = useState(() => Number(JSON.parse(localStorage.getItem('expertTime'))) || 36000000);

  useEffect(() => {
    setExpertTime(prev => prev - count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem('expertTime', JSON.stringify(expertTime));
  }, [expertTime]);

  return  <Section>
    <Container>  
      <h1>You will become a professional through:</h1>
      <p>{ expertTime }</p>
    </Container>
  </Section>
}
