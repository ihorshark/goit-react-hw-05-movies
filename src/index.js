import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ToastContainer } from 'react-toastify';

import './index.css';
import GlobalCSS from './globalStyles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalCSS />
      <App />
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
