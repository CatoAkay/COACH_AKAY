import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from '../theme';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.bg};
    color: ${colors.textPrimary};
    font-family: ${fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.display};
    margin: 0;
    line-height: 1.05;
    letter-spacing: 0.02em;
  }

  p { margin: 0; }
  a { text-decoration: none; color: inherit; }
  button { font-family: ${fonts.body}; }
  img { max-width: 100%; height: auto; display: block; }

  ::selection { background: ${colors.accent}; color: ${colors.white}; }
  :focus-visible { outline: 2px solid ${colors.accent}; outline-offset: 3px; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: ${colors.bg}; }
  ::-webkit-scrollbar-thumb { background: ${colors.border}; border-radius: 2px; }
  ::-webkit-scrollbar-thumb:hover { background: ${colors.accent}; }
`;

export default GlobalStyle;
