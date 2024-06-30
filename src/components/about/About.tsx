import * as S from './About.styles'
import { aboutData } from "../../../src/info-data/data"


const About: React.FC = () => {
    return (
        <S.AboutWrapper>
            <S.AboutImage src={aboutData[0].darkimage} alt='furniture'/>
            <S.AboutContainer>
                <S.AboutHeader>{aboutData[0].title}</S.AboutHeader>
                <S.AboutContent>{aboutData[0].description}</S.AboutContent>
            </S.AboutContainer>
            <S.AboutImage src={aboutData[0].lightimage} alt='furniture'/>
        </S.AboutWrapper>
    )
}

export default About;