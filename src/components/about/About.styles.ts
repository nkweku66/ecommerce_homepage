import styled from 'styled-components'

const AboutWrapper = styled.section`
    display: flex;
    flex-direction: column;

    @media only screen and (1024px <= width <= 1920px) {
        flex-direction: row;
    }
`
const AboutImage = styled.img`
    width: 100%;

    @media only screen and (1024px <= width <= 1920px) {
        width: 30%;
        height: 100%;

        &:nth-last-child(1) {
            width: 31.25%;
        }
    }
    
`

const AboutContainer = styled.div`
    padding: 3.0625em 2em 2.56em 2em;

    @media only screen and (728px <= width <= 1920px) {
        padding: 5em 6.25em 7em 6em; 
    }

    @media only screen and (width >= 1024px) {
        padding: 2em 2em 0 2em;
    }

    @media only screen and (width >= 1440px) {
        padding: 4.5em 3em 0 3em;
    }
`
const AboutHeader = styled.h2`
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing:5.83px;
    margin-bottom: 1em;

    @media only screen and (728px <= width <= 1920px) {
        font-size: 1.3rem;
    }

    @media only screen and (width >= 1024px) {
        font-size: 0.9em;
    }

    @media only screen and (width >= 1440px) {
        font-size: 1.1rem;
    }
`
const AboutContent = styled.p`
    color: #A0A0A0;
    letter-spacing: -0.33px;
    line-height: 1.37rem;

    @media only screen and (728px <= width <= 1920px) {
        font-size: 1.2rem;
        line-height: 1.5rem;
    }

    @media only screen and (width >= 1024px ) {
        font-size: 0.875rem;
        line-height: 1.2rem;
    }

    @media only screen and (width >= 1440px) {
        font-size: 1.1rem;
    }
`

export {
    AboutWrapper,
    AboutImage,
    AboutContainer,
    AboutHeader,
    AboutContent
}