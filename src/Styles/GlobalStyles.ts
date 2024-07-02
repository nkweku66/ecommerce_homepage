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
        overflow-x: hidden;

        @media (376px <= width <= 1920px) {
            width: 100%;
        }
    }

    button {
        font-family: 'League Spartan', sans-serif;
    }
`

export default GlobalStyle