import styled from 'styled-components'

interface Props {
    mobile?: boolean;
}

const HeroContainer = styled.section`
    position: relative;

    
    @media only screen and (1366px <= width <= 1440px) {
        display: none;
    }
`
const HeroWrapper = styled.div`
    position: relative;
`
const HeroDesktop = styled.section`
    display: none;

    @media only screen and (1366px <= width <= 1440px) {
        display: flex;
        width: 100%;
    }
`
const HeroImage = styled.img<Props>`
    width: 100%;
    height:${(props) => (props.mobile ? '36vh': '')};
    object-fit: cover;
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