import styled from 'styled-components'

interface HeroProps {
    mobile?: boolean;
}
const HeroContainer = styled.section`
    position: relative;

    
    @media only screen and (width >= 64em) {
        display: none;
    }
`
const HeroWrapper = styled.div`
    position: relative;
    width: 100%;
`
const HeroDesktop = styled.section`
    display: none;

    @media only screen and (width >= 37.5em) {
        display: flex;
        width: 100%;
    }
`
const HeroImage = styled.img<HeroProps>`
    width: 100%;
    height: 100%;
    object-fit:cover;

    @media only screen and (37.5em <= width <= 63.9375em) {
        display: ${(props) => (props.mobile ? 'none' : '')};
    }
`

const HeroNav = styled.nav`
    display: flex;
    margin-top: -4px;
    position: absolute;
    top: 100%;
    left: 100%;
    transform: translate(-100%, -100%);


    @media only screen and (min-width: 37.5em) {
        margin-top: 0;
    }
`


const HeroButton = styled.button`
    width: 3.5em;
    height: 3.5em;
    background-color: #000;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #444444;
        transition: 0.3s ease-in-out;
    }

    &:active {
        background-color: #444444;
    }

    @media only screen and (min-width: 37.5em) {
        width: 5em;
        height: 5em;
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