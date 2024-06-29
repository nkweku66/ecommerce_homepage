import styled from 'styled-components'

const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
    /* border: 1px solid red; */
`

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

const HeroContent = styled.section`
    padding: 3.75em 2em 4.5em 2em;
    border: 1px solid red;
`

const HeroHeading = styled.h1`
    font-size: 
    letter-spacing: -1.67px;
`
const HeroDescription = styled.p`
    letter-spacing: -0.67px;
`

export {
    HeroWrapper,
    HeroImage,
    HeroContainer,
    HeroNav,
    HeroButton,
    HeroContent,
    HeroDescription,
    HeroHeading
} 