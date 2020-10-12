import React from 'react';
import {Formik} from 'formik';

import './style.css';
import PageDefault from '../../components/PageDefault'

function Budget(){
    return(
        <PageDefault>
            <div className="all">
                <h1> ORÇAMENTO </h1>
                <p> Nos conte a sua ideia</p>
                <Formik
                    initialValues={{nome:'', email:'', telefone:'', tatuador:'', descricao:''}}
                    validate={
                        values => {
                            const errors = {};
                            if(
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ){
                                errors.email = 'Email Inválido';
                            }
                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting}) =>{
                            setTimeout(() =>{
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting  
                    }) =>(

                        <form onSubmit={handleSubmit}>

                            <input 
                                type="text"
                                name="nome"
                                placeholder="Nome"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nome}
                            />
                            {errors.nome && touched.nome && errors.nome}

                            <input 
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}

                            <input 
                                type="text"
                                name="telefone"
                                required
                                placeholder="Whatsapp com DDD"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.telefone}
                            />
                            {errors.telefone && touched.telefone && errors.telefone}

                            

                                <select
                                    
                                />

                                <input
                                    type="file"
                                    name="file"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.telefone}
                                />
                            

                            <textarea
                                type="text"
                                name="descricao"
                                placeholder="Nos conte a sua ideia"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.descricao}
                            />
                            {errors.descricao && touched.descricao && errors.descricao}

                        </form>
                    )}

                </Formik>
            </div>
            

        </PageDefault>
    );
};

export default Budget;