// globalStyles.js
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
  }
  canvas{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`

export default GlobalStyle
