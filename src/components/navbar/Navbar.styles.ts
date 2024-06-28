import styled from 'styled-components'

const Contain = styled.div`
    width: 375px;
    border: 1px solid red;
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    margin: 3em 1.5em;
    /* border: 1px solid blue; */
`

const NavMenuButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const NavLogo = styled.img`
    margin-left: 7.5em;
    height: 0.82rem;
    cursor: pointer;
`

const Navmenu = styled.div`
    display: none;
`

const Navlinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
`

const Navlink = styled.a`
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
        color: #666;
    }
`

export {
    Nav,
    NavMenuButton,
    NavLogo,
    Navmenu,
    Navlinks,
    Navlink,
    Contain
}