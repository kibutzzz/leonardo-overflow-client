import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
      height: 100%;
  }
  #root {
    overflow-y: scroll;
  }

  body {
      background-color: rgb(245, 245, 248);
      -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
      font-family: Roboto, sans-serif;
      font-size: 0.95rem;
  }

  a {
    color: rgba(0, 0, 0, 0.7);
    text-decoration: none;
    transition: all 1s ease;
    :hover {
      color: black;
      text-decoration: underline;
    }
  }

`;
