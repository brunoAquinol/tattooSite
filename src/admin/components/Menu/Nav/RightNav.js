import React from 'react';
import styled from 'styled-components';

import {Container, Row} from 'react-bootstrap'

import { Link } from 'react-router-dom';

const Ul = styled.ul`
    list-style:none;
    display: flex;
    flex-flow: row nowrap;
    //height: 100%;
    margin-right: 50px;
    text-align: center;
    
 
    li{
        padding: 18px 10px;
        color: white;
        
    }

    li:hover{
        color: #ff6600;
        transition: 0.5s;
    }


    @media (max-width: 768px){
        flex-flow: column nowrap;
        background-color: black;
        margin-right: 0px;
        position: fixed;
        display: flex;
        text-align: left;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top:0;
        right:0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li{
            width: 100%;
        }

        .singin, .login{
            text-align: center;
            margin-left: -20px;
        }

        .login{
            margin-top: 12px;
        }
        

    }    

`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


const RightNav = ({open}) =>{
    return(
        <Ul open={open}>
            <Container>
                <Row xs={3} sm={4}>
                    <StyledLink to="/">
                        <li>Início</li>
                    </StyledLink>
                    <StyledLink to="/admin/orcamentos">
                        <li>Orçamentos</li>
                    </StyledLink>
                    <StyledLink to="/admin/agenda">
                        <li>Agenda</li>
                    </StyledLink>
                    <StyledLink to="/admin/usuarios" >
                        <li>Usuários</li>
                    </StyledLink>
                    <li className="login">Entrar</li>
                    <li className="singin">Registrar</li>
                </Row>
            </Container>
        </Ul>
    )
}

export default RightNav;