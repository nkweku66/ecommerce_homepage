import styled from 'styled-components'

const HeroContainer = styled.section`
    position: relative;
    /* border: 1px solid red; */
`

const HeroImage = styled.img`
    width: 100%;
    object-fit:cover;
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
    HeroButton
} 