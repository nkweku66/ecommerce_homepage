import styled from 'styled-components'

const HeroContainer = styled.section`
    position: relative;

    @media (1439px <= width <= 1440px) {
        display: none;
    }
`
const HeroWrapper = styled.div`
    position: relative;
`
const HeroDesktop = styled.section`
    display: none;

    @media (1439px <= width <= 1440px) {
        width: 52.5em;
    }
`
const HeroImage = styled.img`
    width: 100%;
    object-fit:cover;
`

const HeroNav = styled.nav`
    position: sticky;
    margin-top: -3.25em;
    margin-left: 17.6em;
    margin-right: auto;
`


const HeroButton = styled.button`
    width: 3.5em;
    height: 3.5em;
    background-color: #000;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #444444;
    }

    &:active {
        background-color: #444444;
    }
`



export {
    HeroImage,
    HeroContainer,
    HeroNav,
    HeroButton,
    HeroWrapper,
    HeroDesktop
} 