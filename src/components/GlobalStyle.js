import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }


    body {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #121212;
        color: #ffffff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    /* Focus visible for keyboard navigation */
    :focus-visible {
        outline: 2px solid #f76c6c;
        outline-offset: 3px;
    }
`;

export default GlobalStyle;
