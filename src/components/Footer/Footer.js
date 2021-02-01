import React from 'react';
import './Footer.css';
import {Container, Col, Row} from 'react-bootstrap';

import LogoNav from '../../assets/img/Mapa_Mercator-países.jpg'
import SimpleMap from '../MapAdress/MapAdress'

import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import RoomIcon from '@material-ui/icons/Room';

function Footer(){
    return(
        <footer className="footerApp">
            <Container>
                <Row >
                    <Col className="align-itens-center">
                        <div className="contact" >
                            <WhatsAppIcon className="whatsIcon" color="var(--mainOrange);"/>
                            <p>21 9475478</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="contact" >
                            <InstagramIcon className="whatsIcon"/>
                            <p>Tatoo.Studio</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="contact" >
                            <FacebookIcon className="whatsIcon"/>
                            <p>Estúdio de Tatuagem</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="mapAddress" >
                <h2>Onde nos encontrar</h2>
                <div className="mapTxtMark">
                    <RoomIcon className="mapMark"/>
                    <p>UPA Duque de Caxias 45, Parque Lafaiete, Duque de Caxias</p>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.4245447483695!2d-43.32635678540336!3d-22.786727639325832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ace9837bcbb%3A0xf78ae8757d063786!2sUPA%2024h%20Parque%20Lafaiete%20-%20Duque%20de%20Caxias%20I!5e0!3m2!1spt-BR!2sbr!4v1612205620079!5m2!1spt-BR!2sbr"  width="100%" height="350" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
            

            <div className="devName">
                <h2 className="devTxt">Desenvolvido por </h2>
                <h2 className="name"><a href="https://www.linkedin.com/in/bruno-aquino-ab547a144/" target="_blank" rel="noopener noreferrer">Bruno Aquino de Oliveira </a></h2>
            </div>
            
        </footer>
    );
}

export default Footer;