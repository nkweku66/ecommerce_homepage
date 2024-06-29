import styled from 'styled-components'

type Props = {
    visible: boolean;
}

const NavDesk = styled.nav`
    display: none;

    @media (1439px <= width <= 1440px) {
        display: flex;
        align-tems: center;
        margin: 3.94em 0 0 3em;
        position: absolute;
    }
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    margin: 3em 1.5em;
    position: absolute;

    @media (1439px <= width <= 1440px) {
        display: none;
    }
`

const NavMenuButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    @media (1439px <= width <= 1440px) {
        display: none;
    }
`

const NavLogo = styled.img`
    margin-left: 7.5em;
    height: 0.9em;
    cursor: pointer;

    @media (1439px <= width <= 1440px) {
        margin-right: 2em;
        margin-left: 0;
    }
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

    @media (1439px <= width <= 1440px) {
        display: none;
    }
`

const Navlinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 1.9rem;
    margin: 0;
    padding: 0;
    margin-left: 4em;

    @media (1439px <= width <= 1440px) {
        gap: 1.94em;
        border: 1px solid red;
    }
`

const Navlink = styled.a`
    text-decoration: none;
    color: #000;
    font-weight: 500;
    letter-spacing: -0.67px;
    transition: color 0.3s ease;
    position: relative;

    &:hover {
        color: #666;
    }

    @media (1439px <= width <= 1440px) {
        color: #fff;
        font-size: 1.2rem;

        &:after {
            content: '';
            position: absolute;
            background-color: #fefeff;
            border-radius: 5px;
            height: 3px;
            width: 0;
            left: 0;
            bottom: -10px;
        }
        
        &:hover {
            color: #A0A0A0;
            transition: 0.3s ease-in-out;
        }
        
        &:hover:after {
            width: 100% ;
            transition: 0.3s ease-in-out;
        }
    }
`

export {
    Nav,
    NavMenuButton,
    NavLogo,
    Navmenu,
    Navlinks,
    Navlink,
    NavDesk
}