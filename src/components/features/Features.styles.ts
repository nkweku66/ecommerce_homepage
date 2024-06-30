import styled from 'styled-components'

interface Props {
    variant?: boolean;
}

const FeatWrapper = styled.section`
    padding: 3.75em 2em 4.5em 2em;
    position: relative;

    @media only screen and (1366px <= width <= 1440px) {
        padding: 5em 6.25em 9.56em 6.25em;
    }


`

const FeatHeader = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing:-1.67px;
    margin-bottom: 0.4em;

    @media only screen and (1366px <= width <= 1440px) {
        font-size: 3rem;
        letter-spacing: -2px;
        
    }
`

const FeatContent = styled.p`
    color: #A0A0A0;
    letter-spacing: -0.67px;
    line-height: 1.37rem;

    @media only screen and (1366px <= width <= 1440px) {
        font-size: 1rem;
        letter-spacing: -0.33px;
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
        margin-right: auto;
    }

    & > span:hover {
        color: #A0A0A0;
        transition: 0.3s ease-in-out;
    }

    & > span:active {
        color: #A0A0A0;
        transition: 0.3s ease-in-out;
    }

    @media only screen and (1366px <= width <= 1440px) {
        width: ${(props) => (props.variant ? '5em' : '')};
        height: ${(props) => (props.variant ? '5em' : '')};

        &:hover {
            background-color: ${(props) => (props.variant ? '#444444' : 'transparent')};;
            transition: 0.3s ease-in-out;
        }

        &:active {
            background-color: ${(props) => (props.variant ? '#444444' : 'transparent')};;
            transition: 0.3s ease-in-out;
        }
        
        & > svg {
        margin: 0 auto;
    }

}



`
const FeatNav = styled.nav`
    display: none;
    position: absolute;
    top: 28.85em;
    left: 0;

    @media only screen and (1366px <= width <= 1440px) {
        display: flex;
    }
`

export {
    FeatWrapper,
    FeatHeader,
    FeatContent,
    FeatButton,
    FeatNav
}
