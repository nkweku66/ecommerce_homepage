import React from 'react'
import * as S from './Navbar.styles'
import logo from '/src/assets/images/logo.svg'


const Navbar: React.FC = () => {
  return (
    <>
      <S.Nav>
          <S.NavMenuButton>
            <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/>
            </svg>
          </S.NavMenuButton>
          <S.NavLogo src={logo} />
      </S.Nav>
      <S.Navmenu>
          <S.Navlinks>
              <S.Navlink>home</S.Navlink>
              <S.Navlink>shop</S.Navlink>
              <S.Navlink>about</S.Navlink>
              <S.Navlink>contact</S.Navlink>
          </S.Navlinks>
      </S.Navmenu>
    </>
  )
}

export default Navbar