import React from 'react';
import Menu  from '../Menu/Nav/Navbar';
import styled from 'styled-components';

const Main = styled.main`
    flex: 2;

    `;


function PageDefault({children}){
    return(
        <>
            <Menu/>
                <Main>
                    {children}
                </Main>

        </>
    );
}

export default PageDefault;