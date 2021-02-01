import React, {useState} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from '../pages/Home/App.js';
import Artista from '../pages/Artista';
import Budget from '../pages/Budget';
import Agendamento from '../pages/Agendamento'
import Contact from '../pages/Contact';
import Login from '../pages/Login/Login'
import Home from "../admin/pages/home";
import Orcamento from "../admin/pages/orcamentos";
import Usuario from "../admin/pages/Usuario";
import Agenda from "../admin/pages/Agenda";
import Config from "../admin/pages/Config";
import Error404 from '../pages/Error404';

import ScrollToTop from '../components/ScrollToTop';

function AppRouter(){

    const [token, setToken] = useState();

    if(!token) {
        return(
            <BrowserRouter>
                <ScrollToTop>
                <Switch>
                    <Route path="/" component={App} exact />
                    <Route path="/artista" component={Artista} />
                    <Route path="/orcamento" component={Budget} />
                    <Route path="/agendamento" component={Agendamento} />
                    <Route path="/contato" component={Contact} />
                    <Route path="/admin/index" component={Home} />
                    <Route path="/admin/orcamentos" component={Orcamento} />
                    <Route path="/admin/usuarios" component={Usuario} />
                    <Route path="/admin/agenda" component={Agenda} />
                    <Route path="/admin/config" component={Config} />
                    <Route path="/login" >
                        <Login setToken={setToken} />
                    </Route>
                    <Route component={Error404} />
                </Switch>
                </ScrollToTop>
            </BrowserRouter>
            
        );
      }

    return(
        <BrowserRouter>
            <ScrollToTop>
                <Switch>
                    <Route path="/admin" exact component={Home} />
                    <Route path="/admin/orcamentos" exact component={Orcamento} />
                    <Route path="/admin/usuarios" exact component={Usuario} />
                    <Route path="/admin/agenda" exact component={Agenda} />
                    <Route path="/admin/config" exact component={Config} />
                    <Route component={Error404} />
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
        
    );
}

export default AppRouter;