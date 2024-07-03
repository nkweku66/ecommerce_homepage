import styled from 'styled-components'

interface Props {
    variant?: boolean;
}

const FeatWrapper = styled.section`
    padding: 3.75em 2em 4.5em 2em;
    position: relative;

    @media only screen and (37.5em <= width <= 63.9375em) {
        padding: 5em 6.25em 7em 6em;
    }

    @media only screen and (64em <= width <= 89.9375em) {
        padding: 4.5em 2.25em 3em 3em;
    }

    @media only screen and (85.375em <= width <= 90em) {
        padding: 7.5em 5em 0 5em;
    }

    @media only screen and (width > 90em) {
        padding: 7.5em 5em 9.5625em 5em;
    }
`

const FeatHeader = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing:-1.67px;
    margin-bottom: 0.4em;

    @media only screen and (37.5em <= width <= 120em) {
        font-size: 3rem;
        letter-spacing: -2px;
        
    }

    @media only screen and (64em <= width <= 89.9375em) {
        font-size: 2.3rem;
    }

    @media only screen and (width >= 90em) {
        font-size: 2.5rem;
    }

    @media only screen and (width > 90em) {
        font-size: 3rem;
    }


`

const FeatContent = styled.p`
    color: #A0A0A0;
    letter-spacing: -0.67px;
    line-height: 1.37rem;

    @media only screen and (37.5em <= width <= 63.9375em) {
        font-size: 1.2rem;
        letter-spacing: -0.33px;
        line-height: 1.5rem;
    }

    @media only screen and (64em <= width <= 120em) {
        font-size: 0.9rem;
        line-height: 1.2rem;
    }

    @media only screen and (85.375em <= width <= 90em) {
        font-size: 1.1rem;
    }

    @media only screen and (width > 90em) {
        font-size: 1.3em;
        line-height: 1.4rem;
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

    @media only screen and (37.5em <= width <= 120em) {
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

    @media only screen and (width >= 64em) {
        width: ${(props) => (props.variant ? '4em' : '')};
        height: ${(props) => (props.variant ? '4em' : '')};
        margin-top: ${(props) => (props.variant ? '-2.2em' : '2.56em')};
        font-size: 1rem;
    }

    @media only screen and (85.375em <= width <= 90em) {
        width: ${(props) => (props.variant ? '5em' : '')};
        height: ${(props) => (props.variant ? '5em' : '')};
        margin-top: ${(props) => (props.variant ? '-7.45em' : '2.56em')};
    }

    @media only screen and (85em <= width <= 85.375em) {
        margin-top: ${(props) => (props.variant ? '-7.35em' : '2.56em')};
    }

}

`
const FeatNav = styled.nav`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    transform: translate(0, -100%);

    @media only screen and (64em <= width <= 120em) {
        display: flex;
    }

    @media only screen and (min-width: 85.375em) {
        top: 106.55%;
    }

    @media only screen and (width > 90em) {
        top: 100%;
    }

`

export {
    FeatWrapper,
    FeatHeader,
    FeatContent,
    FeatButton,
    FeatNav
}
