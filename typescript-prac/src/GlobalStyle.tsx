import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`

export default GlobalStyle