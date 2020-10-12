import React from 'react';
import './Footer.css';

import LogoNav from '../../assets/img/Mapa_Mercator-países.jpg'
import SimpleMap from '../MapAdress/MapAdress'

import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import RoomIcon from '@material-ui/icons/Room';

function Footer(){
    return(
        <footer className="footerApp">
            <div className="contact" >
                <WhatsAppIcon className="whatsIcon" color="var(--mainOrange);"/>
                <p>21 9475478</p>
            </div>
            <div className="contact" >
                <InstagramIcon className="whatsIcon"/>
                <p>Tatoo.Studio</p>
            </div>
            <div className="contact" >
                <FacebookIcon className="whatsIcon"/>
                <p>Estúdio de Tatuagem</p>
            </div>


            <div className="mapAddress" >
                <h2>Onde nos encontrar</h2>
                <div className="mapTxtMark">
                    <RoomIcon className="mapMark"/>
                    <p>UPA Duque de Caxias 45, Parque Lafaiete, Duque de Caxias</p>
                </div>
                <img className="footerImg" src={LogoNav} alt="LogoNav" />
            </div>
            

            <div className="devName">
                <h2 className="devTxt">Desenvolvido por:</h2>
                <h2 className="name"><a href="https://www.linkedin.com/in/bruno-aquino-ab547a144/" target="_blank" rel="noopener noreferrer">Bruno Aquino de Oliveira </a></h2>
            </div>
            
        </footer>
    );
}

export default Footer;