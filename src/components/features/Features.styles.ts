import styled from 'styled-components'

interface Props {
    variant?: boolean;
}

const FeatWrapper = styled.section`
    padding: 3.75em 2em 4.5em 2em;
    position: relative;

    @media only screen and (768px <= width <= 1023px) {
        padding: 5em 6.25em 7em 6em;
    }

    @media only screen and (1024px <= width <= 1439px) {
        padding: 4.5em 2.25em 3em 3em;
    }

    @media only screen and (min-width: 1440px) {
        padding: 7.5em 5em 9.5625em 5em;
    }
`

const FeatHeader = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing:-1.67px;
    margin-bottom: 0.4em;

    @media only screen and (768px <= width <= 1920px) {
        font-size: 3rem;
        letter-spacing: -2px;
        
    }

    @media only screen and (1024px <= width <= 1439px) {
        font-size: 2.3rem;
    }

    @media only screen and (min-width: 1440px) {
        font-size: 3em;
    }

`

const FeatContent = styled.p`
    color: #A0A0A0;
    letter-spacing: -0.67px;
    line-height: 1.37rem;

    @media only screen and (768px <= width <= 1920px) {
        font-size: 1.2rem;
        letter-spacing: -0.33px;
        line-height: 1.5rem;
    }

    @media only screen and (1024px <= width <= 1920px) {
        font-size: 0.9rem;
        line-height: 1.2rem;
    }

    @media only screen and (min-width: 1440px) {
        font-size: 1.1rem;
    }
`
const FeatButton = styled.button<Props>`
    background-color: ${(props) => (props.variant ? '#000' : 'transparent')};
    border: none;
    cursor: pointer;
    line-height: ${(props) => (props.variant ? '' : '1rem')};
    letter-spacing: ${(props) => (props.variant ? '' : '12.5px')};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.9rem;
    margin-top: ${(props) => (props.variant ? '' : '2.56em')};
    display: flex;
    align-items: center;


    & > svg {
        margin-left: 1.5em;
    }

    & > svg > path:hover:active {
            fill: #A0A0A0;
            transition: 0.3s ease-in-out;
        }

    & > span {
        margin-right: 2em;
    }

    & > span:hover {
        color: #A0A0A0;
        transition: 0.3s ease-in-out;
    }

    & > span:active {
        color: #A0A0A0;
        transition: 0.3s ease-in-out;
    }

    @media only screen and (768px <= width <= 1920px) {
        width: ${(props) => (props.variant ? '5em' : '')};
        height: ${(props) => (props.variant ? '5em' : '')};

        &:hover {
            background-color: ${(props) => (props.variant ? '#444444' : 'transparent')};
            transition: 0.3s ease-in-out;
        }

        &:active {
            background-color: ${(props) => (props.variant ? '#444444' : 'transparent')};
            transition: 0.3s ease-in-out;
        }
        
        & > svg {
        margin: 0 auto;
    }

    @media only screen and (width >= 1024px) {
        width: ${(props) => (props.variant ? '4em' : '')};
        height: ${(props) => (props.variant ? '4em' : '')};
        margin-top: ${(props) => (props.variant ? '-2.2em' : '2.56em')};
    }

    @media only screen and (min-width: 1440px) {
        width: ${(props) => (props.variant ? '5em' : '')};
        height: ${(props) => (props.variant ? '5em' : '')};
        margin-top: ${(props) => (props.variant ? '-7.45em' : '2.56em')};
    }

}

`
const FeatNav = styled.nav`
    display: none;
    position: absolute;
    top: 28.85em;
    left: 0;

    @media only screen and (1024px <= width <= 1920px) {
        display: flex;
        top: 24.8em;
    }

    @media only screen and (min-width: 1440px) {
        top: 35.55em;
    }
`

export {
    FeatWrapper,
    FeatHeader,
    FeatContent,
    FeatButton,
    FeatNav
}
