import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import history from './utiles/history/history';
import { ToastContainer } from 'react-toastify';
import App from './Components/App/App';

// normalize and basic styles for application
import 'normalize.css';
import './index.css';
import './sourses/styles/styles.scss';

import 'yet-another-react-lightbox/styles.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter history={history}>
    <App />
    <ToastContainer autoClose={5000} />
  </BrowserRouter>
);
