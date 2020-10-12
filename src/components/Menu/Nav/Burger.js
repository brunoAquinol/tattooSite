import React, {Component} from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 32px;
    right: 20px;
    z-index: 20;
    display: none;


    @media (max-width: 768px){
        display:flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div.hamburger{
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? 'var(--white)' : 'var(--mainOrange)'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1){
            transform: ${({open}) => open ? 'rotate(48deg)' : 'rotate(0)'};
        }

        &:nth-child(2){
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({open}) => open ? 0 : 1};
        }

        &:nth-child(3){
            transform: ${({open}) => open ? 'rotate(-48deg)' : 'rotate(0)'};
        }
    }
`;

class Burger extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
    }

    setOpen = (e) => {
        this.setState({
            open: !this.state.open
        });
    }

    render(){
        const {open} = this.state;

        return(
            <div>
                <StyledBurger open={open} onClick={() => this.setOpen(!open)}>
                    <div className="hamburger"/>
                    <div className="hamburger"/>
                    <div className="hamburger"/>
                </StyledBurger>
                <RightNav open={open}/>
            </div>
        );

    }

}

export default Burger;

