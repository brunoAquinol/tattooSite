import React from 'react';
import {Container, Row} from 'react-bootstrap'


import PageDefault from '../../components/PageDefault';
import Professional from '../../components/Professional';
import Title from '../../components/Title';

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
            <Title titulo="Galeria"/>
              <Container className="galleryImg">
                <Row xs={3} sm={4}>
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
                <img src={Tatu10} alt="tatu1" />
                <img src={Tatu10} alt="tatu1" />
                </Row>
              </Container>
          </section>
          <Title titulo="Artistas"/>
          <Professional/>
           
        </div>  
      </div>
    </PageDefault>
  );
}

export default App;
