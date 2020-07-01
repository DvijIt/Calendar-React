import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Header/header.scss'
import './Main/timescale.scss'
import './Main/calendar.scss'
import 'materialize-css/dist/css/materialize.min.css';
import './index.scss';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

