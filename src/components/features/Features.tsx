import * as S from './Features.styles'

interface FeatProps {
    heading: string;
    description: string;
}

const Feature: React.FC<FeatProps> = (props: FeatProps) => {
  return (
    <S.FeatWrapper>
        <S.FeatHeader>{props.heading}</S.FeatHeader>
        <S.FeatContent>{props.description}</S.FeatContent>
        <S.FeatButton>
            Shop Now
            <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/>
            </svg>
        </S.FeatButton>
    </S.FeatWrapper>
  )
}

export default Feature