import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @layer theme {
    :root {
      --duration: 0.25s;
      --fw-300: 300;
    }
  }
  
  @layer reset, global, theme, layout, utilities;
  
  @layer reset {
    *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
      all: unset;
      display: revert;
    }
    
    *,
    *::after,
    *::before {
      box-sizing: border-box;
    }
    
    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none;
      }
    }

    a:not([class]), button:not([class]) {
      cursor: pointer;
    }
  }
  
  @layer global {
    html {
      box-sizing: inherit;
      font-size: 62.5%;
      line-height: 1.15;
      tab-size: 4;
      overflow-y: scroll;
      -webkit-text-size-adjust: 100%;
      @media (prefers-reduced-motion: no-preference) {
        scroll-behavior: smooth;
      }
    }
    body {
      margin: 0;
      padding: 0;
      max-width: inherit;
      color: ${({ theme }) => theme.text};
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
      font-size: 1.8rem;
      line-height: 1.618;
      text-transform: Uppercase;
      font-kerning: normal;
      font-weight: var(--fw-300);
      font-feature-settings: "liga","kern";
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: ${({ theme }) => theme.body};
      transition: all var(--duration) linear;
      @media only screen and (max-width: 768px) {
        font-size: 16px;
      }
    }

    h1, h2, h3, h4, h5, h6 {
      margin:0;
      line-height: 1.1;
      font-weight: var(--fw-300);
      color: inherit;
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
      hyphens: auto;
    }
    
    h1 {
      font-size: 5ex;
    }
    
    h2 {
      font-size: 3ex;
    }
    
    p {
      margin: 0;
      font-size: 2ex;
      letter-spacing: -0.6px;
    }

    a:not([class]) {
      color: ${({ theme }) => theme.text};
      text-decoration: none;
      font-weight: var(--fw-300);
      transition: opacity var(--duration) linear;
      &:hover {
        outline-width: 0;
        opacity: .8;
      }
    }
    button {
      color: inherit;
      border-width: 0;
      background-color: transparent;
      &:focus :not(:focus-visible) {
        outline: none;
      }
    }
    img,
    iframe {
      min-width: 100%;
      border-style: none;
    }
    iframe {
      display: block;
    }
    ul, ol, dd{margin:0; padding:0; list-style:none;}
    li {
      color: inherit;
      font-size: 3ex;
      font-weight: bold;
      text-rendering: optimizeLegibility;
    }
  }
  
  @layer  {
    main {
      display: block;
    }
  }
`;

export default GlobalStyle;
