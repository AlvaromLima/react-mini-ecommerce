import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MiniEcommerce from './mini-ecommerce';
import "bootstrap/dist/css/bootstrap.min.css";

//npm install react-bootstrap bootstrap --save
//npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
//npm install react-datepicker date-fns@next --save
//npm install formik yup --save
//npm install prop-types axios --save

//iniciar também o servidor-api, acessar C:\Users\NOT\workspace\projetos_react\servidor-api ,pelo prompt do dos e dar
//o comando "node index.js".

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MiniEcommerce />
  </React.StrictMode>
);