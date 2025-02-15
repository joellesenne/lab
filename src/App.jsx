import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { IoIosArrowUp } from 'react-icons/io';
import { CookieConsent } from 'react-cookie-consent';
import ReactGA from 'react-ga';

import { ThemeProvider } from 'styled-components';
import { useToggleTheme } from './hooks/useToggleTheme.jsx';

import { useScrollToTop } from "./utils";

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Toggle from './components/Toggle';
import ScrollToTop from './components/ScrollToTop';

import GlobalStyle from './theme/globalStyle';
import { SectionStyled } from './components/styles/Layout.Styled';
import { darkTheme, lightTheme } from './theme/toggleThemeStyle';

export default function App() {
  const [theme, toggleTheme] = useToggleTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const [visible, setVisible] = useState(false);
  const iconArrowUp = <IoIosArrowUp />;
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    ReactGA.initialize('UA-28372011-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <SectionStyled>
        <Toggle
          toggleTheme={toggleTheme}
          title={theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
          aria-label="Toggle theme"
        />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {visible && (
          <div dir="rtl">
            <ScrollToTop scrollToTop={useScrollToTop} title={iconArrowUp} />
          </div>
        )}
        <CookieConsent
          location="bottom"
          buttonText="OK"
          cookieName="myAwesomeCookieName2"
          style={{
            fontSize: '1.75rem',
            color: themeMode.text,
            background: themeMode.body
          }}
          buttonStyle={{
            background: themeMode.text,
            color: themeMode.body,
            fontSize: '1.5rem'
          }}
          expires={150}>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </SectionStyled>
    </ThemeProvider>
  );
};
