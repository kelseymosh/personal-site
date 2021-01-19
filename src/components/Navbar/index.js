import React from 'react'
import { 
    Nav, 
    NavLink, 
    Bars, 
    NavMenu
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src="/images/Logo.png" alt="logo" height="90" width="90"/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/resume" activeStyle>
                        Resume
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;