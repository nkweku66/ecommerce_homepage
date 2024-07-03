import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;

      @media only screen and (1024px <= width <= 1920px) {
        display: grid;
        grid-template-rows: 100%;
        grid-template-columns: 65% 35%;
    }

    /* @media only screen and (min-width: 1440px){
      grid-template-rows: 534px;
      grid-template-columns: 840px 600px;
    } */

    /* @media only screen and (width > 1440px)
    {
      grid-template-rows: 100%;
      grid-template-columns: 65% 35% ;
    } */

`

export default Wrapper