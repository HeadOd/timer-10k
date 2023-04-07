import styled from '@emotion/styled';

export const ThemeButtons = styled.button `
  cursor: pointer;
  width: 40px;
  height: 20px;
  border: none;
  border-radius: 2px;
  background-color: ${p => p.theme.colors.secondColorTrans}; 
  transition: border-radius ${p => p.theme.effect.primaryEffect};

  &:hover, :focus {
    border-radius: 10px;
  }
`;

export const ButtonName = styled.span `
  color: ${p => p.theme.colors.primaryColor}
`;