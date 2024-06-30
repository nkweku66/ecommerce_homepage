import styled from 'styled-components'

const HeroContainer = styled.section`
    position: relative;

    @media only screen and (min-width: 1025px) and (max-width: 1440px) {
        display: none;
    }
`
const HeroWrapper = styled.div`
    position: relative;
`
const HeroDesktop = styled.section`
    display: none;

    @media only screen and (min-width: 1025px) and (max-width: 1439px) {
        display: flex;
        width: 100%;
    }

    @media only screen and (min-width: 1440px) {
        display: flex;
        width: 100%;
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