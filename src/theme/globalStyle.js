import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none;
    }
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  html {
    box-sizing: inherit;
    font-size: 62.5%;
    line-height: 1.15; /* 1 */
    overflow-y: scroll;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, "San Francisco", BlinkMacSystemFont, “Segoe UI”, Roboto, Helvetica, Arial, sans-serif, “Apple Color Emoji”, “Segoe UI Emoji”, “Segoe UI Symbol”;
    font-size: 20px;
    line-height: 1;
    text-transform: Uppercase;
    word-wrap: break-word;
    font-kerning: normal;
    font-weight: 300;
    font-feature-settings: "liga","kern";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.body};
    scroll-behavior: smooth;
    transition: all 0.25s linear;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  main {
    display: block;
  }
  h1, h2 {
    padding-top: 1rem;
    font-weight: 300;
    color: inherit;
    text-rendering: optimizeLegibility;
  }
  h1 {
    font-size: 3.2em;
  }
  h2 {
    font-size: 2em;
  }
  p {
    font-size: 1.25em;
    letter-spacing: -0.6px;
  }
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-weight: 300;
    background-color: transparent;
    transition: opacity 0.25s linear;
  }
  a:hover {
    outline-width: 0;
    opacity: .8;
  }
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
  }
  img {
    border-style: none;
  }
  iframe {
    margin: 0;
    display: block;
  }
  ul, li {
    padding: 0;
    list-style: none;
  }
  li {
    color: inherit;
    font-size: 1.75em;
    font-weight: bold;
    text-rendering: optimizeLegibility;
  }
`;

export default GlobalStyle;
