import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const GlobalStyles = css`
  body {
    font-family: -apple-system, 
      BlinkMacSystemFont, 
      "Segoe UI", 
      Roboto, 
      Oxygen-Sans, 
      Ubuntu, 
      Cantarell, 
      "Helvetica Neue", 
      sans-serif;

      background-color: var(--background-color);
      transition: background-color 200ms linear;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
`;


export const Section = styled.section `
  padding-top: 10px;
  padding-bottom: 10px;
  `;

export const Container = styled.div `
  margin: 0 auto;
  padding: 0 15px;
  text-align: center;
`;

export const TimeColor = styled.span `
  color: ${p => p.theme.colors.secondColorTrans}
`;