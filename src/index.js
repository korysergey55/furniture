import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

// normalize and basic styles for application
import './index.css'
import 'normalize.css'
import './sourses/styles/styles.scss'

import App from './Components/App/App';

const root = ReactDOM.createRoot(

  document.getElementById('root')
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

