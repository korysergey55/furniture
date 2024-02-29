import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import history from './utiles/history/history'

// normalize and basic styles for application
import 'normalize.css'
import './index.css'
import './sourses/styles/styles.scss'
import "yet-another-react-lightbox/styles.css";

import App from './Components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>
);

