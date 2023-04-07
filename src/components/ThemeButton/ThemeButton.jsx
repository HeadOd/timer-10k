import { Section, Container } from "../Global/Global.styled";
import { ThemeButtons, ButtonName } from "./ThemeButton.styled";
import { useTheme } from "../Global/useTheme";

export const ThemeButton = () => {
  const { setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme('light');
  }

  const handleDarkThemeClick = () => {
    setTheme('dark');
  }

  return ( <Section>
  <Container>
      <ThemeButtons onClick={() => handleDarkThemeClick()}><ButtonName>Dark</ButtonName></ThemeButtons>
      <ThemeButtons onClick={() => handleLightThemeClick()}><ButtonName>Light</ButtonName></ThemeButtons>
    </Container>
    </Section>);
}