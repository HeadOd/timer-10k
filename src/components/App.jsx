import { Timer } from './Timer/Timer';
import { Time } from './Time/Time';

import { useState } from 'react';

export const App = () => {
  const [howClose, setHowClose] = useState(0);

  return (
    <>
    <Time count={ howClose }></Time>
    <Timer onClick={ setHowClose }></Timer>
    </>
  );
};
