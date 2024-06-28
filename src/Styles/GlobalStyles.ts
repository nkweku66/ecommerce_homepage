import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'League Spartan', sans-serif;
        width: 27.5%;
        border: 1px solid red;

        @media (max-width: 1440px) {
            width: 100%;
        }
    }
`

export default GlobalStyle