import styled from 'styled-components'

const HeroContainer = styled.section`
    width: 375px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
    /* border: 1px solid red; */
`

const HeroImage = styled.img`
    width: 100%;
`

const HeroNav = styled.nav`
    position: absolute;
    top: 19.58em;
    left: 17.58em;
`

const HeroButton = styled.button`
    width: 3.5em;
    height: 3.5em;
    background-color: #000;
    border: none;
    cursor: pointer;

`



export {
    HeroImage,
    HeroContainer,
    HeroNav,
    HeroButton
} 