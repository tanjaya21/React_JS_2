import React, {useState, useEffect} from 'react';
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavbarMenu, NavbarItem, NavLinks, NavbarButtonLink, NavbarButton  } from './navbarStyles';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    useEffect (() =>{
        window.addEventListener('scroll', changeNav)
    }, [])


    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavbarLogo to='/' onClick={toggleHome} > Logo </NavbarLogo>
                    <MobileIcon onClick={toggle}> 
                        <FaBars />
                    </MobileIcon > 
                    <NavbarMenu>
                        <NavbarItem>
                            <NavLinks to="about"> About </NavLinks>
                        </NavbarItem>
                        <NavbarItem>
                            <NavLinks to="discover"> Discover </NavLinks>
                        </NavbarItem>
                        <NavbarItem>
                            <NavLinks to="services"> Services </NavLinks>
                        </NavbarItem>
                        <NavbarItem>
                            <NavLinks to="signup"> Sign Up </NavLinks>
                        </NavbarItem>
                    </NavbarMenu>
                    <NavbarButton>
                        <NavbarButtonLink to="/signin"> Sign In </NavbarButtonLink>
                    </NavbarButton>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
