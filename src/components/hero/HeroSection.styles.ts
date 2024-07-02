import styled from 'styled-components'

interface HeroProps {
    mobile?: boolean;
}
const HeroContainer = styled.section`
    position: relative;

    
    @media only screen and (1024px <= width <= 1920px) {
        display: none;
    }
`
const HeroWrapper = styled.div`
    position: relative;
`
const HeroDesktop = styled.section`
    display: none;

    @media only screen and (768px <= width <= 1920px) {
        display: flex;
        width: 100%;
    }
`
const HeroImage = styled.img<HeroProps>`
    width: 100%;
    height: 100%;
    object-fit:cover;

    @media only screen and (768px <= width <= 1023px) {
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


    @media only screen and (min-width: 728px) {
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
`



export {
    HeroImage,
    HeroContainer,
    HeroNav,
    HeroButton,
    HeroWrapper,
    HeroDesktop
} 