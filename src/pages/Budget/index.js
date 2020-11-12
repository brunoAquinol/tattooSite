import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import {Container, Row} from 'react-bootstrap';
import axios from 'axios';

import './style.css';
import PageDefault from '../../components/PageDefault'

function Budget(){

    const [fields, setFields] = useState({
        name:'',
        email:'',
        phone:'',
        tatoo:'0',
        file:'',
        description:''
    });

    function handleInputChange(e){
        fields[e.target.name] = e.target.value;
        setFields(fields);
    }

    function handleFormSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:5000/orcamento', fields).then(response =>{
            alert('Done');
            
        }).then(window.location.reload())
    } 

    return(

        <PageDefault>
            <div className="all">
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
                                <select
                                name="tatoo"
                                id="tatuador"
                                >
                                    <option value="0" label="Escolha um tatuador" />
                                    {/*tatuador.map(tatuador =>(<option key={tatuador.id} value={tatuador.id}>{tatuador.nome}</option>))*/}
                                </select>

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
            </div>
            

        </PageDefault>
    );
};

export default Budget;