import React from 'react';
import ReactDOM from 'react-dom/client';

// normalize and basic styles for application
import 'normalize.css'
import './index.css'
import './sourses/styles/styles.scss'

import App from './Components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <App />
);

