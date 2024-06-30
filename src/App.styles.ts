import styled from 'styled-components'

const Wrapper = styled.div`
    @media only screen and (min-width: 1025px) and (max-width: 1439px) {
        display: grid;
        grid-template-rows: 534px;
        grid-template-columns: 70% 30%;
    }

    @media only screen and (min-width: 1440px) {
        display: grid;
        grid-template-rows: 534px;
        grid-template-columns: 840px 534px;
    }
`

export default Wrapper