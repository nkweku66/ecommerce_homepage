import styled from 'styled-components'

type Props = {
    visible: boolean;
}

const NavDesk = styled.nav`
    display: none;
    margin: 3.94em 0 0 3em;
    position: absolute;


    @media only screen and (728px <= width <= 1920px) {
        display: flex;
        align-tems: center;
    }
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    margin: 3em 1.5em;
    position: absolute;

    @media only screen and (728px <= width <= 1920px) {
        display: none;
    }
`

const NavMenuButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

`

const NavLogo = styled.img`
    margin-left: 7.5em;
    height: 0.9em;
    cursor: pointer;

    @media only screen and (728px <= width <= 1920px) {
        margin-left: 0;
        margin-right: 3em;
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


    @media only screen and (728px <= width <= 1920px) {
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

    @media only screen and (728px <= width <= 1024px) {
        gap: 3rem;
    }

`

const Navlink = styled.a`
    text-decoration: none;
    color: #000;
    font-weight: 500;
    letter-spacing: -0.67px;
    transition: color 0.3s ease;
    position: relative;
    cursor: pointer;

    &:hover {
        color: #666;
    }

    @media only screen and (728px <= width <= 1920px) {
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