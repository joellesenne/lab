import { useState } from 'react';

const THEME_STORAGE_KEY = 'theme';
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

const isThemeValue = (value) => value === THEMES.LIGHT || value === THEMES.DARK;

const readStoredTheme = () => {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isThemeValue(stored) ? stored : THEMES.LIGHT;
};

export const useToggleTheme = () => {
  const [theme, setTheme] = useState(readStoredTheme);

  const toggleTheme = (event) => {
    event?.preventDefault?.();

    const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  };

  return [theme, toggleTheme];
};
