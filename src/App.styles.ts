import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;

      @media only screen and (64em <= width <= 120em) {
        display: grid;
        grid-template-rows: 100%;
        grid-template-columns: 65% 35%;
    }
`

export default Wrapper