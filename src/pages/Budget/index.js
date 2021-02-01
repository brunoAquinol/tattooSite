import React, {useState, useEffect} from 'react';
import {Container, Row} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'

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
        description:'',
        respondido: 0
    });

    const[professionals, setProfessional] = useState([]);

    
    useEffect(
        () => {
            const loadProfessionals = () => {
                api.get('professionals').then(response => {
                    setProfessional(response.data)
                })
                
            }

            loadProfessionals();
        }
        ,[]);

    function handleInputChange(e){
        fields[e.target.name] = e.target.value;
        setFields(fields);
    }
    
    
    const history = useHistory();
    
    function handleFormSubmit(e){
        e.preventDefault();
        api.post('orcamento', fields)
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
                            <Row xs={1} sm={1} md={1}>
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
                                    option={professionals}
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