import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const title = ReactDOM.createRoot(document.getElementById('title'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
const title = ReactDOM.createRoot(document.getElementById('title'));

root.render(
  <React.StrictMode>
    <App targetId="root" />
  </React.StrictMode>
);

title.render(
  <React.StrictMode>
    <App targetId="title" />
  </React.StrictMode>
);
