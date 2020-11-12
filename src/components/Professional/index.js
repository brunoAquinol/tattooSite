import React from 'react';
import styled from 'styled-components';

import profilePic from '../../assets/img/LogoNav.png';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const ProfPerfil = styled.div`

.professional p, h2{
  margin-right: 9px;
  margin-left: 10px;
}

.profImgTxt{
  display: flex;
  background-color: cadetblue;
  color: white;
  border-radius: 30px;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.profImgLegend{
  text-align: center;
}

.profImgLegend p{
  margin-top: -2px;
}

/*.profileTxt{
  display: flexbox;
}*/
 
.p1{
  font-size: 15px;
  text-shadow: 5px 5px 10px #868686;
  text-align: justify;
  margin-left: 10px;
  margin-right: 10px;
}

.p2{
  font-size: 20px;
  text-align: right;
  margin-left: 10px;
}

.lineContact{
  background-color:rgb(152, 191, 192);
  width: 2px;
}

.bookNArrow{
  display: flex;
  align-items: center;
  justify-content: center;
}

.profileImg{
  width: 150px;
  height: 150px;
  align-self: center;
}

.bookEstArea{
  display: block;
  width: 100%;
}

@media (max-width:768px){

.profImgTxt{
  display: block;
  border-radius: 30px;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.lineContact{
  width: 2px;
}

.bookNArrow{
  justify-content: flex-end;  
}

}
    `;


function Professional(){
    return(
        <ProfPerfil className="professional">
            <div className="profImgTxt">
              <div className="profImgLegend">
                <img className="profileImg" src={profilePic} alt="profilePic"></img>
                <p>@joselitoTattoo</p>
              </div>
              <div className="profileTxt">
                <h2>Joselito</h2>
                <p className="p1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula metus sem, a dignissim leo semper a. Integer lacinia libero est, sed varius turpis vestibulum id. Pellentesque nec neque posuere, porta tellus eget, pharetra velit. Donec consectetur efficitur efficitur...
                </p>
              </div>
              <div className="lineContact"></div>
              <div className="bookNArrow">
                <p className="p2">AGENDAR</p>
                <ArrowForwardIcon/>
              </div>
            </div>
        </ProfPerfil>
    );
}

export default Professional;