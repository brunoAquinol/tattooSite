import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './pages/Home/App.js';

import Error404 from './pages/Error404';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import About from './pages/About/index';
import Budget from './pages/Budget';
import Agendamento from './pages/Agendamento'
import Contact from './pages/Contact';
import Home from "./admin/pages/home";
import Orcamento from "./admin/pages/orcamentos";
import Usuario from "./admin/pages/Usuario";
import Agenda from "./admin/pages/Agenda";
import Config from "./admin/pages/Config";

import ScrollToTop from './components/ScrollToTop';


ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/sobre" component={About} />
        <Route path="/orcamento" component={Budget} />
        <Route path="/agendamento" component={Agendamento} />
        <Route path="/contato" component={Contact} />
        <Route path="/admin" exact component={Home} />
        <Route path="/admin/orcamentos" exact component={Orcamento} />
        <Route path="/admin/usuarios" exact component={Usuario} />
        <Route path="/admin/agenda" exact component={Agenda} />
        <Route path="/admin/config" exact component={Config} />
        <Route component={Error404} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
