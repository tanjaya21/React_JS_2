import styled from 'styled-components';
import { Link as linkRouter } from 'react-router-dom';
import { Link as linkScroll } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? 'green' : 'transparent')}
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-sizes: 1 rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.75s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavbarLogo = styled(linkRouter)`
    color: Green;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.8rem;
    display: flex;
    align-item: center;
    margin-left: 24px;
    margin-top: 17px;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        trasnform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavbarMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px ){
        display: none;
    }
`

export const NavbarItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(linkScroll)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`

export const NavbarButton = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavbarButtonLink = styled(linkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-sizes: 16px;
    // text-align: center;
    // align-items: center;
    // font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
