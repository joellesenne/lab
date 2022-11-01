import { useEffect, useState } from 'react';

export const useToggleTheme = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = (e) => {
    e.preventDefault();
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
};
