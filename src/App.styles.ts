import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;

      @media only screen and (width >= 64em) {
        display: grid;
        grid-template-rows: 100%;
        grid-template-columns: 65% 35%;
    }
`

export default Wrapper