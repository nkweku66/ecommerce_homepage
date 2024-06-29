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
        /* border: 1px solid red; */

        @media (1439px <= width <= 1440px) {
            width: 100%;
        }
    }

    button {
        font-family: 'League Spartan', sans-serif;
    }
`

export default GlobalStyle