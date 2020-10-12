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
        <Route component={Error404} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
