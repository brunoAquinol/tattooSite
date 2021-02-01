import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';

import './style.css'

function FormCalendar(props){

    const bookedDate = props.bookDate;

    const [fields, setFields] = useState({
        name:'',
        email:'',
        phone:'',
        tatoo:'',
        description:'',
        respondido: 0
    });
      
    
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
        <form onSubmit={handleFormSubmit}>

            <div>
                <label> Data Selecionada:</label>
                <text className="bookedDateArea">{bookedDate}</text>
            </div>           

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

            <button className="btn btn-success"  type="submit"> Enviar </button>
            
        </form>


    );
}

export default FormCalendar;