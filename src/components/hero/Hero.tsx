import * as S from './HeroSection.styles'
import { MouseEventHandler } from 'react'
import Navbar from '../navbar/Navbar'

interface Props {
  coverImage?: string;
  mobileImage?: string;
  moveForward?:  MouseEventHandler<HTMLButtonElement>;
  moveBack?:   MouseEventHandler<HTMLButtonElement>;
}


const Hero: React.FC<Props> = (props: Props) => {
  return (

    <S.HeroContainer>
      <Navbar />
      <S.HeroImage src={props.mobileImage} />
      <S.HeroNav>
        <S.HeroButton onClick={props.moveBack}>
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/>
          </svg>
        </S.HeroButton>
        <S.HeroButton onClick={props.moveForward}>
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/>
          </svg>
        </S.HeroButton>
      </S.HeroNav>
    </S.HeroContainer> 
  )
}

export default Hero