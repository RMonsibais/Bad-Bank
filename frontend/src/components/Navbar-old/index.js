import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'


const Navbar = () => {
    return(
        <>
        <Nav>
            <NavLink to ="/">
                <h1>BadBank</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/createaccount" activeStyle>
                    Create Account
                </NavLink>
                <NavLink to="/withdraw" activeStyle>
                    Withdraw
                </NavLink>
                
                <NavLink to="/deposit" activeStyle>
                    Deposit
                </NavLink>
                <NavLink to="/allData" activeStyle>
                    All Data
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/login">Login</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
    )
}

export default Navbar   