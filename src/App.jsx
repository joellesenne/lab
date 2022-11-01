import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga';

import { CookieConsent } from 'react-cookie-consent';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { IoIosArrowUp } from 'react-icons/io';

import { useToggleTheme } from './hooks/userToggleTheme';

import GlobalStyle from './theme/globalStyle';
import { darkTheme, lightTheme } from './theme/toggleThemeStyle';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Toggle from './components/Toggle';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  ReactGA.initialize('UA-28372011-2');
  ReactGA.pageview(window.location.pathname + window.location.search);

  const [theme, toggleTheme] = useToggleTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  let toggleTitle;
  if (theme === 'light') {
    toggleTitle = <BsFillMoonFill />;
  } else {
    toggleTitle = <BsFillSunFill />;
  }

  const [visible, setVisible] = useState(false);
  const iconArrowUp = <IoIosArrowUp />;
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener('scroll', toggleVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toggle toggleTheme={toggleTheme} title={toggleTitle} arial-label="Toggle theme" />
      <div style={{ display: visible ? 'inline' : 'none' }}>
        <ScrollToTop scrollToTop={scrollToTop} title={iconArrowUp} />
      </div>
      <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="myAwesomeCookieName2"
        style={{
          fontSize: '1.75rem',
          color: theme === 'light' ? darkTheme.text : lightTheme.text,
          background: theme === 'light' ? darkTheme.body : lightTheme.body
        }}
        buttonStyle={{
          background: theme === 'light' ? darkTheme.text : lightTheme.text,
          color: theme === 'light' ? darkTheme.body : lightTheme.body,
          fontSize: '1.5rem'
        }}
        expires={150}>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </ThemeProvider>
  );
}

export default App;
