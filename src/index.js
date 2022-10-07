import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MiniEcommerce from './mini-ecommerce';
import "bootstrap/dist/css/bootstrap.min.css";

//npm install react-bootstrap bootstrap@4 --save
//npm install react-bootstrap@1.0.0-beta.16 bootstrap@4.4.1 --save
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