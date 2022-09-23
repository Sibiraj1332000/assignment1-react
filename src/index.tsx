import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';


// Axios Interseptor
axios.interceptors.request.use(config => {
  // console.log("THE AXIOS REQUEST : ", config);
  // console.log(config.headers);

  const token = localStorage.getItem('accessKey');

  // console.log("mytoken", token);

  const modConfig = {
    ...config,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      ...config.headers
    }
  };
  // config.headers.Authorization = token ? `Bearer ${token}` : ' ';

  // console.log("mod config ", modConfig);


  return modConfig;

});


// axios.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     if (error.response.status === (403 || 401)) {
//       console.log("LogOut");
//       window.sessionStorage.clear();
//       window.localStorage.clear();
//       window.location.assign('/')
//     }
//   }
// );


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  , document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
