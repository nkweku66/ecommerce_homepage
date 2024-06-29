import styled from 'styled-components'

type Props = {
    visible: boolean;
}

const Contain = styled.div`
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

const Navmenu = styled.nav<Props>`
    display: ${props => props.visible ? 'flex' : 'none'};
    position: absolute;
    /* justify-content: space-between; */
    align-items: center;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 11vh;
    background-color: #fff;
    padding: 2.95em 1.64em;
    box-shadow: 0 0 100px 10000px rgba(0, 0, 0, 0.5);
    transition: ease-out 0.5s;
`

const Navlinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 1.9rem;
    margin: 0;
    padding: 0;
    margin-left: 4em;
`

const Navlink = styled.a`
    text-decoration: none;
    color: #000;
    font-weight: 500;
    letter-spacing: -0.67px;
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