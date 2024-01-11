import { useEffect, useState } from 'react';

export const UseToggleTheme = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = (e) => {
    e.preventDefault();
    const newTheme = theme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
};
