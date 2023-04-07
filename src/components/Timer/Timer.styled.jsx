import styled from '@emotion/styled';

export const TimerItem = styled.li `
  display: inline-block;
  font-size: 20px;
  padding: 16px;
  text-transform: uppercase;
`;

export const Clock = styled.span `
  display: block;
  font-size: 40px;
`;

export const BoxButton = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 10px;
  margin: 5px;

  justify-content: center;

  color: ${p => p.theme.colors.svgColor};
  box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
  background: ${p => p.theme.colors.primaryColor};

  transition: ${p => p.theme.effect.primaryEffect};



  &:hover {
    width: 150px;
    border-radius: 5px;
  }

  &:disabled {
    color: ${p => p.theme.colors.primaryColor};

    :hover {
      width: 50px;
    }
  }

  &:hover span{
    display: inline-block;
    padding: 2px;
    width: 80px;
  }
`;

export const ButtonName = styled.span `
  width: 0px;
  display:none;
  transition: 0.3s;
  text-align: center;
  margin-left: 5px;
`;