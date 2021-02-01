import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';
import Burger from './Burger';
import LogoNav from '../../../assets/img/LogoNav.png'

const Nav = styled.nav`
    width: 100%;
    height: 100px;
    z-index:100;

    position: fixed;
    padding-left:5%;
    padding-right: 5%;
    top: 0;
    left:0;
    right:0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: var(--black);

    

    .logo{
        padding: 15px 0;
    }

    .navLogo{
        max-width:100px;
        margin-top: 5px;
        margin-bottom: 1px;
    }

`;

const Navbar = () => {
    return(
        <header>
            <Nav>
                <div className="logo">
                    <Link to="/">
                        <img className="navLogo" src={LogoNav} alt="LogoNav"/>
                    </Link>
                </div>
                <Burger/>
            </Nav>
        </header>
    )
}

export default Navbar