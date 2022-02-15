// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #171923;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  :root {
  --black: #000000;
  --marineblue: #051c2c;
  --royalblue: #1b4a6b;
  --white: #ffffff;
  --gray: #979797;
  --whitegray: #f0f0f0;
  --red: #E53E3E;
  --lightblue: #4299e1;
  --whitebody: #f6f6f7;
  --bgcolor: #1f212b;
}
`;

export default GlobalStyle;
