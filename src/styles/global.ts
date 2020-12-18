import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.primary.white};
    color: ${props => props.theme.colors.neutral.grayishViolet};
    font: 500 18px Poppins, sans-serif;
  }
`
