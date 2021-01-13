import React from 'react';

import styled from 'styled-components';
import Menu from './Menu';

const Nav = styled.nav`
    width: 100%;
    height: 70px;
    z-index:100;

    position: fixed;
    bottom:0;
    left:0;
    right:0;

    background: rgb(22, 22, 22);

    .line{
        width: 100%;
        height: 1px;
        background-color: var(--mainOrange);
    }

`;

const Navbar = () => {
    return(
        <header>
            <Nav>
                <div className="line" />
                <Menu/>
            </Nav>
        </header>
    )
}

export default Navbar