import React from 'react';
import styled from 'styled-components';

const Div = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 30px;


    .risco{
    background: var(--mainOrange);
    width: 80%;
    height: 1px;
    }

    h1{
    text-align: center;
    font-size: 30px;
    margin-left: 15px;
    margin-right: 15px;
    }

`;


function Title(props){
    return(
        <>
            <Div>
                <div className="risco"></div>
                <h1>{props.titulo}</h1>
                <div className="risco"></div>
            </Div>
        </>
    );
}

export default Title;
