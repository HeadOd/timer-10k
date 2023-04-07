import { useState } from 'react';
import { Global } from "@emotion/react";
import { ThemeProvider } from '@emotion/react'

import { Timer } from './Timer/Timer';
import { Time } from './Time/Time';
import { Main } from "./App.styled";
import { GlobalStyles } from "./Global/Global.styled";
import { theme } from "./Global/Theme";
import { ThemeButton } from "./ThemeButton/ThemeButton";

export const App = () => {
  const [howClose, setHowClose] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={ GlobalStyles }/>
      <Main>
        <ThemeButton />
        <Time count={ howClose }></Time>
        <Timer onClick={ setHowClose }></Timer>
      </Main>
    </ThemeProvider>
  );
};
