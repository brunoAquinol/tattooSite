import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './pages/Home/App.js';

import Error404 from './pages/Error404';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import About from './pages/About/index';
import Budget from './pages/Budget';
import Agenda from './pages/Agenda'
import Contact from './pages/Contact';
import Home from "./admin/pages/home";
import Orcamento from "./admin/pages/orcamentos";

import ScrollToTop from './components/ScrollToTop';


ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/sobre" component={About} />
        <Route path="/orcamento" component={Budget} />
        <Route path="/agendamento" component={Agenda} />
        <Route path="/contato" component={Contact} />
        <Route path="/admin" exact component={Home} />
        <Route path="/admin/orcamento" exact component={Orcamento} />
        <Route component={Error404} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
