import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  * {
    border: 0;
    background: none;
    font-family: 'Cairo', sans-serif;
  }
  html {
    background: var(--primary);
  }
  :root {
    --primary: #161B22;
    --white: #FFFFFF;
    --black: #000000;
  }
`;
