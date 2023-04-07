import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('app-theme')) ||'dark');

  useLayoutEffect(()=> {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('app-theme', JSON.stringify(theme));
  }, [theme])

  return { theme, setTheme }
};