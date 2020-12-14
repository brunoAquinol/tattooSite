import React from 'react';
import styled from 'styled-components';

import {Container, Row} from 'react-bootstrap'

import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';

import { Link } from 'react-router-dom';

const Ul = styled.ul`
    list-style:none;
    flex-flow: row nowrap;
    text-align: center;
    display: flex;
    //justify-content: space-between;
    //align-items: center;
    margin-left: -10%;
    
    li{
        //padding: 18px 10px;
        color: black;
        font-size: 15px;
    
        
    }

    li:hover{
        color: #ff6600;
        transition: 0.5s;
    }

    .IconTxt{
        color: var(--mainOrange);
        //background-color: black;
        width: 100%;
        padding-top: 10px;
        height: 70px;
    }

    .verticalLine{
        background-color: var(--mainOrange);
        width: 1px;
        height: 50px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


const Menu = () =>{
    return(
        <Ul>
            <Container>
                <Row xs={4} sm={4}>
                    <div className="IconTxt">
                        <StyledLink to="/admin">
                            <HomeIcon/>
                            <li>Início</li>
                        </StyledLink>
                    </div>
                    <div className="IconTxt">  
                        <StyledLink to="/admin/orcamentos">
                            <ListAltIcon/>
                            <li>Orçamentos</li>
                        </StyledLink>
                    </div>
                    <div className="IconTxt">
                        <StyledLink to="/admin/agenda">
                            <DateRangeIcon/>
                            <li>Agenda</li>
                        </StyledLink>
                    </div>
                    <div className="IconTxt">
                        <StyledLink to="/admin/usuarios" >
                            <PeopleIcon/>
                            <li>Usuários</li>
                        </StyledLink>
                    </div>
                </Row>
            </Container>
        </Ul>
    )
  /*          <div>
                <li className="login">Entrar</li>
                <li className="singin">Registrar</li>
            </div>*/
}

export default Menu;