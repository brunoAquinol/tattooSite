import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import * as serviceWorker from './serviceWorker';

import AppRouter from './routes/routes'


ReactDOM.render(
  <AppRouter/>,
  document.getElementById('root')
);

serviceWorker.unregister();
