import React from 'react';
import profilePic from '../../assets/img/LogoNav.png';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import PageDefault from '../../components/PageDefault';
import PromoImg from '../../assets/img/promo.png';
import Tatu1 from '../../assets/img/t1.jpg';
import Tatu2 from '../../assets/img/t2.jpg';
import Tatu3 from '../../assets/img/t3.jpg';
import Tatu4 from '../../assets/img/t4.jpg';
import Tatu5 from '../../assets/img/t5.jpg';
import Tatu6 from '../../assets/img/t6.jpg';
import Tatu7 from '../../assets/img/t7.jpg';
import Tatu8 from '../../assets/img/t8.jpg';
import Tatu9 from '../../assets/img/t9.jpg';
import Tatu10 from '../../assets/img/t10.jpg';


import '../../styles/App.css';

function App() {
  return (
    <PageDefault>
      <img className="imgHeader" src={PromoImg} alt="PromoImg" />
      <div className="App">
        <div className="body">

          <section className="galleryDiv">
            <div className="titulo">
              <div className="risco"></div>
              <h1>Galeria</h1>
              <div className="risco"></div>
            </div>
            <div className="galleryImg">
              <img src={Tatu1} alt="tatu1" />
              <img src={Tatu2} alt="tatu1" />
              <img src={Tatu3} alt="tatu1" />
              <img src={Tatu4} alt="tatu1" />
              <img src={Tatu5} alt="tatu1" />
              <img src={Tatu6} alt="tatu1" />
              <img src={Tatu7} alt="tatu1" />
              <img src={Tatu8} alt="tatu1" />
              <img src={Tatu9} alt="tatu1" />
              <img src={Tatu10} alt="tatu1" />
            </div>
          </section>

          <div className="professional">
            <div className="titulo">
                <div className="risco"></div>
                <h1>Tatuadores</h1>
                <div className="risco"></div>
              </div>
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


            <div className="profImgTxt">
              <div className="profImgLegend">
                <img className="profileImg" src={profilePic} alt="profilePic"></img>
                <p>@nunesTattoo</p>
              </div>
              <div className="profileTxt">
                <h2>Nunes</h2>
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

          </div>
        </div>  
      </div>
    </PageDefault>
  );
}

export default App;
