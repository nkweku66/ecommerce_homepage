import * as S from './About.styles'
import { aboutData } from '/src/data/data'

const About: React.FC = () => {
    return (
        <S.AboutWrapper>
            <S.AboutImage src={aboutData.darkimage} />
            <S.AboutContainer>
                <S.AboutHeader>{aboutData.title}</S.AboutHeader>
                <S.AboutContent>{aboutData.description}</S.AboutContent>
            </S.AboutContainer>
            <S.AboutImage src={aboutData.lightimage} />
        </S.AboutWrapper>
    )
}

export default About;