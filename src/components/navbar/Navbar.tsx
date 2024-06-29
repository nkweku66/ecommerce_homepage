import { useEffect, useState, useRef } from 'react'
import * as S from './Navbar.styles'
import logo from '/src/assets/images/logo.svg'


const Navbar: React.FC = () => {

  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false)
  const menuRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuClicked((prev) => !prev)
  }

  // Add click outside event listener to close menu when clicking outside of menu
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuClicked(false);
      }
    };
    if (isMenuClicked) {
      document.addEventListener('mousedown', closeMenu); 
    }
    return () => {
      document.removeEventListener('mousedown', closeMenu);
    };
  }, [isMenuClicked]);

  return (
    <>
      <S.NavDesk>
        <S.Navlinks>
          <S.NavLogo src={logo} />
          <S.Navlink>home</S.Navlink>
          <S.Navlink>shop</S.Navlink>
          <S.Navlink>about</S.Navlink>
          <S.Navlink>contact</S.Navlink>
        </S.Navlinks>
      </S.NavDesk>
      <S.Nav>
          <S.NavMenuButton onClick={toggleMenu}>
            <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/>
            </svg>
          </S.NavMenuButton>
          <S.NavLogo src={logo} />
      </S.Nav>
      <S.Navmenu visible={isMenuClicked}>
          <S.NavMenuButton ref={menuRef} onClick={toggleMenu}>
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fill-rule="evenodd" opacity=".201"/>
            </svg>
          </S.NavMenuButton>
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