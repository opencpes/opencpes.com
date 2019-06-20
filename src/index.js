// react & Router
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Context API
import GlobalState from './contexts/GlobalState';
// service worker
import * as serviceWorker from './serviceWorker';
// roboto
import 'typeface-roboto';
// baseline
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <BrowserRouter basename="/">
    <CssBaseline />
    <GlobalState />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls..
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
