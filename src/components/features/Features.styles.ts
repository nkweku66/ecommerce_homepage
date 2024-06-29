import styled from 'styled-components'

const FeatWrapper = styled.section`
    padding: 3.75em 2em 4.5em 2em;
`

const FeatHeader = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing:-1.67px;
    margin-bottom: 0.4em;
`

const FeatContent = styled.p`
    color: #A0A0A0;
    letter-spacing: -0.67px;
    line-height: 1.37rem;
`
const FeatButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    line-height: 1rem;
    letter-spacing: 12.5px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8rem;
    margin-top: 2.56em;
    display: flex;
    align-items: center;

    & > svg {
        margin-left: 1.25em;
    }

    & > svg > path:hover:active {
            fill: #A0A0A0;
        }

    &:hover:active {
        color: #A0A0A0;
    }

`
export {
    FeatWrapper,
    FeatHeader,
    FeatContent,
    FeatButton
}
