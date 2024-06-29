import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'League Spartan', sans-serif;
        width: 23.44em;

        @media (1439px <= width <= 1440px) {
            width: 100%;
            display: grid;
            grid-template: 534px 266px / 420px 550px 440px;
            border: 1px solid red;
        }
    }

    button {
        font-family: 'League Spartan', sans-serif;
    }
`

export default GlobalStyle