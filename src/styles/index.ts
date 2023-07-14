import { createGlobalStyle } from 'styled-components'

export const color = {
  primaryColor: '#E66767',
  secondaryColor: '#FFEBD9',
  tertiaryColor: '#FFF8F2',
  defaultWhite: '#FFF',
  defaultBlack: '#000',
  formTextColor: '#4B4B4B'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
  }
`
