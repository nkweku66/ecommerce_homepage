import styled from 'styled-components'

const AboutWrapper = styled.section`
    display: flex;
    flex-direction: column;
`
const AboutImage = styled.img`
    width: 100%;
`

const AboutContainer = styled.div`
    padding: 3.0625em 2em 2.56em 2em;
`
const AboutHeader = styled.h3`
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing:5.83px;
    margin-bottom: 0.4em;
`
const AboutContent = styled.p`
    color: #A0A0A0;
    letter-spacing: -0.33px;
    line-height: 1.37rem;
`

export {
    AboutWrapper,
    AboutImage,
    AboutContainer,
    AboutHeader,
    AboutContent
}