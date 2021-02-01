import React, {useState} from 'react';
import {Container, Row, Alert} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'
import axios from 'axios';

import logo512 from '../../assets/img/LogoNav.png';

import './style.css';

import PageDefault from '../../components/PageDefault'
import Title from '../../components/Title'
import Calendar from '../../components/Calendar'
import Select  from '../../components/Select';

function About(){

  const [fields, setFields] = useState({
    name:'',
    email:'',
    phone:'',
    tatoo:'',
    description:'',
    respondido: 0
});

const[agenda, setAgenda] = useState(0);


function handleInputChange(e){
    fields[e.target.name] = e.target.value;
    setFields(fields);
}


const history = useHistory();

function handleFormSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:5000/orcamento', fields)
    .then(alert("Orçamento enviado com sucesso") )
    .then(history.push('/'))      
}


  return(
    <PageDefault>
      <div className="completePerfil" >
        <div className="profileImg">
          <img className="perfilImg" src={logo512} alt="logo" />
        </div>

        <div className="aboutArtist"> 
            <h1>Sobre <a className="perfilName">Bruno</a></h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>

      <Title titulo="Agendamento" />
      { agenda === 0 ? <Calendar /> : (

        <form onSubmit={handleFormSubmit}>
          <h1> Agenda Fechada </h1>
          <p>Agenda fechada até COLOCAR STATE DE MÊS. Cadastre seu contato para ser informado quando será aberta a agenda ou para quando houver desistência.</p>
          <input 
            type="text"
            name="name"
            className="agendaName"
            required
            placeholder="Nome"
            onChange={handleInputChange}
          />
          <input 
              type="email"
              name="email"
              className="agendaEmail"
              required
              placeholder="Email"
              onChange={handleInputChange}
          />
          <input 
              type="text"
              name="phone"
              className="agendaTelefone"
              required
              placeholder="Whatsapp com DDD"
              onChange={handleInputChange}
          />

          <textarea
              type="text"
              name="description"
              className="agendaDescription"
              placeholder="Nos conte a sua ideia"
              onChange={handleInputChange}
          />

          <button type="submit"> Enviar </button>
        </form>      
      )}
      
      <Title  className="galery" titulo="Galeria" />
        
        <br/>
        <br/>
        <br/>
        <br/>
      </PageDefault>
  );
}

export default About;