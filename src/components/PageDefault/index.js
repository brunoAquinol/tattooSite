import React from 'react';
import Menu  from '../Menu/Nav/Navbar';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

const Main = styled.main`
    flex: 2;
    padding-top: 50px;
    margin-bottom: 20px;
    `;
 /*
    padding-left: 5%;
    padding-right: 5%;
*/

function PageDefault({children}){
    return(
        <>
            <Menu/>
                <Main>
                    {children}
                </Main>
            <Footer/>
        </>
    );
}

export default PageDefault;