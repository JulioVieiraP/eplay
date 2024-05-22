import { createGlobalStyle } from 'styled-components'
import { cores } from './Variaveis'

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;

  }
  body{
    padding-top: 40px;
    background-color: ${cores.preta};
    color: ${cores.branca};
  }

  .Container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
  `

export default GlobalCss
