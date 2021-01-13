import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Navbar from '../../components/Menu/Nav/Navbar'
import './Login.css';
//import { Redirect, useHistory } from 'react-router-dom';

async function loginUser(credentials){
  return fetch('http://localhost:5000/login',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
}


export default function Login({setToken}){

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e =>{
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
  
    setToken(token);
    /*
    fillToken ? <Redirect to="/admin"/> : history.push('/login');
    */
  }

    return(
        <div className="login-wrapper">
        <Navbar/>
        <h1>Faça Log In</h1>
        <form onSubmit={handleSubmit} >
          <label>
            <p>Usuário</p>
            <input type="text" onChange={e => setUsername(e.target.value)}/>
          </label>
          <label>
            <p>Senha</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      )
}

Login.protoType = {
  setToken: PropTypes.func.isRequired
}