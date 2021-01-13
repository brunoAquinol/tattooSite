import React from 'react';
import styled from 'styled-components';
import {Container, Row} from 'react-bootstrap'

import profilePic from '../../assets/img/LogoNav.png';

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DateRangeIcon from '@material-ui/icons/DateRange';

const ProfPerfil = styled.div`


margin-right: 0px;

.professional p, h2{
  margin-right: 9px;
  margin-left: 10px;
  //text-align: center;
}

.profImgTxt{
  display: block;
  background-color: white;
  color: black;
  width: 250px;
 // border-radius: 30px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}

.profImgTxt{
  //box-shadow: 4px 4px 20px  var(--mainOrange);
}

.profImgLegend{
  text-align: center;
}

.profImgLegend p{
  margin-top: -2px;
}

.p2{
  font-size: 15px;
  //text-align: right;
  //margin-left: 10px;
}

.lineContact{
  background-color:rgb(152, 191, 192);
  width: 1px;
}

.professionalName{
  text-align: center;
}

.bookNBudget{
  display: flexbox;
  justify-content: center;
  margin-left: 5%;
  margin-right:5%;
}

.icon{
  font-size: 2rem;
  color: var(--mainOrange);
}

.IconNtext{
  text-align: center;
  margin-right: 8%;
}

.IconNtext2{
  text-align: center;
  margin-left: 8%;
}

.verticalLine{
  background-color: var(--mainOrange);
  width: 1px;
  height: 50px;
}

.profileImg{
  width: 150px;
  height: 150px;
  align-self: center;
}

@media (max-width:768px){

  .profImgTxt{
    display: block;
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

}

@media (max-width:768px){

  .profImgTxt{
    display: block;
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

}
    `;


function Professional(){
    return(
        <ProfPerfil className="professional">
          <Container>
            <Row>
              <div className="profImgTxt">
                <div className="profImgLegend">
                  <img className="profileImg" src={profilePic} alt="profilePic"></img>
                  <p>@joselitoTattoo</p>
                </div>
                <div className="profileTxt">
                  <h2 className="professionalName">Joselito</h2>
                </div>
                <div className="lineContact"></div>
                <div className="bookNBudget">
                  <div className="IconNtext">
                    <DateRangeIcon className="icon"/>
                    <p className="p2">AGENDAR</p>
                  </div>
                  <div className="verticalLine align-self-center"></div>
                  <div className="IconNtext2">
                    <MonetizationOnIcon className="icon"/>
                    <p className="p2">ORÇAMENTO</p>
                  </div>
                </div>
              </div>

              <div className="profImgTxt">
                <div className="profImgLegend">
                  <img className="profileImg" src={profilePic} alt="profilePic"></img>
                  <p>@BrunoTattoo</p>
                </div>
                <div className="profileTxt">
                  <h2 className="professionalName">Bruno</h2>
                </div>
                <div className="lineContact"></div>
                <div className="bookNBudget">
                  <div className="IconNtext">
                    <DateRangeIcon className="icon"/>
                    <p className="p2">AGENDAR</p>
                  </div>
                  <div className="verticalLine"></div>
                  <div className="IconNtext2">
                    <MonetizationOnIcon className="icon"/>
                    <p className="p2">ORÇAMENTO</p>
                  </div>
                </div>
              </div>

              
            </Row>
          </Container>
        </ProfPerfil>
    );
}

export default Professional;