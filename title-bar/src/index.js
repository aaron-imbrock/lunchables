import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/reset.css';
import 'styles/style.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App targetId="title" />
  </React.StrictMode>
);

