import React, {useState} from 'react';
import {Container, Row, Alert} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'
import axios from 'axios';

import './style.css';
import PageDefault from '../../components/PageDefault'
import Select  from '../../components/Select';

import api from '../../services/api';


function Budget(){

    const [fields, setFields] = useState({
        name:'',
        email:'',
        phone:'',
        tatoo:'',
        file:'',
        description:''
    });

    
    function handleInputChange(e){
        fields[e.target.name] = e.target.value;
        setFields(fields);
    }
    
    /*  
    function handleFormSubmit(e){
        e.preventDefault();
        //console.log(fields);
        api.post('orcamento', fields).then(() => {
            alert('Cadastro realizado com sucesso!');
        }
        ).catch(() =>{
            alert('Erro no cadastro!')
        })
    }
    */
   
   const history = useHistory();
   function handleFormSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:5000/orcamento', fields)
        .then(alert("Orçamento enviado com sucesso") )
        .then(history.push('/'))      
    } 
    return(

        <PageDefault>
            <div className="all">
                <fieldset>
                    <h1> ORÇAMENTO </h1>
                    <p> Nos conte a sua ideia</p>

                    <form onSubmit={handleFormSubmit}>

                        <Container>
                            <Row xs={1} sm={1} md={2}>
                                <input 
                                    type="text"
                                    name="name"
                                    placeholder="Nome"
                                    onChange={handleInputChange}
                                />
                                <input 
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleInputChange}
                                />
                                <input 
                                    type="text"
                                    name="phone"
                                    required
                                    placeholder="Whatsapp com DDD"
                                    onChange={handleInputChange}
                                />

                                <Select
                                    name="tatoo"
                                    label="tatuador"
                                    onChange={handleInputChange}
                                    option={[
                                        {value: 'Bruno', label:'Bruno'},
                                        {value: 'Arred', label:'Arred'}
                                    ]}
                                />

                                <input
                                    type="file"
                                    name="file"
                                    onChange={handleInputChange}
                                />
                                </Row>
                                <Row xs={1} sm={1}>
                                    <textarea
                                        type="text"
                                        name="description"
                                        placeholder="Nos conte a sua ideia"
                                        onChange={handleInputChange}
                                    /> 
                                </Row>
                                <input type="submit" value="Enviar" />
                        </Container>
                    </form>
                </fieldset>
            </div>
            

        </PageDefault>
    );
};

export default Budget;