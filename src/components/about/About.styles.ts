import styled from 'styled-components'

const AboutWrapper = styled.section`
    display: flex;
    flex-direction: column;

    @media only screen and (width >= 64em) {
        flex-direction: row;
    }
`
const AboutImage = styled.img`
    width: 100%;

    @media only screen and (64em <= width <= 74.9em) {
        width: 20.5em;
    }

    @media only screen and (75em <= width <= 89.9375em) {
        width: 25em;
    }

    @media only screen and (width > 90em) {
        width: 150em;
    }

    @media only screen and (width >= 100em) {
        width: 200em;
    }
    
`

const AboutContainer = styled.div`
    padding: 3.0625em 2em 2.56em 2em;

    @media only screen and (37.5em <= width <= 63.9375em) {
        padding: 5em 6.25em 5em 6em; 
    }

    @media only screen and (width >= 64em) {
        padding: 2em 2em 0 2em;
    }

    @media only screen and (75em <= width <= 89.9375em) {
        padding: 2.5em 2em 0 2em;
    }

    @media only screen and (width >= 90em) {
        padding: 4em 3.5em 0 3.5em;
    }

    @media only screen and (width > 90em) {
        padding: 4em 3.5em 2em 3.5em;
    }
`
const AboutHeader = styled.h2`
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing:5.83px;
    margin-bottom: 1em;

    @media only screen and (600px <= width <= 63.9375em) {
        font-size: 1.3rem;
    }

    @media only screen and (1024px <= width <= 74.9375em) {
        font-size: 0.9em;
    }

    @media only screen and (1200px <= width <= 89.9375em) {
        font-size: 1rem;
    }

    @media only screen and (width >= 90em) {
        font-size: 1.3rem;
    }

    @media only screen and (width > 90em) {
        font-size: 1.5rem;
    }
`
const AboutContent = styled.p`
    color: #A0A0A0;
    letter-spacing: -0.33px;
    line-height: 1.37rem;

    @media only screen and (37.5em <= width <= 120em) {
        font-size: 1.2rem;
        line-height: 1.5rem;
    }

    @media only screen and (64em <= width <= 74.9375em ) {
        font-size: 0.875rem;
        line-height: 1.2rem;
    }

    @media only screen and (1200px <= width <= 89.9375em) {
        font-size: 0.9rem;
    }

    @media only screen and (width >= 90em) {
        font-size: 1.1rem;
    }

    @media only screen and (width > 90em) {
        font-size: 1.2rem;
    }
`

export {
    AboutWrapper,
    AboutImage,
    AboutContainer,
    AboutHeader,
    AboutContent
}