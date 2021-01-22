import React from 'react';
import { hydrate, render } from "react-dom";
import { HashRouter } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import UserContextProvider from './context/UserContext';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// axios.defaults.baseURL =
//   'https://lisbon-js-202003-pjt3-guias-backend.jsrover.wilders.dev';

axios.defaults.withCredentials = true;

axios.defaults.headers.common = { 'Authorization': `Bearer ${Cookies.get('token')}` };


/* ReactDOM.render(
  <HashRouter>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </HashRouter>,
  document.getElementById('root'),
); */

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
    <HashRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </HashRouter>
    , rootElement);
} else {
  render(
    <HashRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </HashRouter>
    ,rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
