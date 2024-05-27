import { createGlobalStyle } from 'styled-components'
import { cores } from './Variaveis'
export const breakpoints = {
  tablet: '768px',
  desktop: '1024px'
}

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

    @media (max-width: ${breakpoints.desktop}){
      max-width: 80%;
    }
  }

`

export default GlobalCss
