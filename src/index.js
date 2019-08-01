// react & Router
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Context API
import GlobalState from './contexts/GlobalState';

// service worker
import * as serviceWorker from './serviceWorker';

// open routes at top of page
import ScrollToTop from './components/ScrollToTop';

// material ui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  typography: {
    body1: {
      fontFamily: 'sofia-pro-soft, sans-serif',
      color: '#54585A',
      lineHeight: '1.9',
      fontSize: '15px',
      paddingBottom: '20px',
      fontWeight: '300'
    },
    body2: {
      fontFamily: 'sofia-pro-soft, sans-serif',
      color: '#54585A',
      lineHeight: '1.9',
      fontSize: '13px',
      paddingBottom: '20px',
      fontWeight: '300'
    },
    h1: {
      color: '#54585A',
      fontSize: '51px',
      fontFamily: 'sofia-pro-soft, sans-serif',
      fontWeight: '500'
    },
    h2: {
      color: '#54585A',
      fontSize: '28px',
      fontFamily: 'sofia-pro-soft, sans-serif',
      fontWeight: '400'
    },
    h3: {
      color: '#54585A',
      fontSize: '25px',
      fontFamily: 'sofia-pro-soft, sans-serif',
      fontWeight: '400'
    },
    h4: {
      color: '#54585A',
      fontSize: '16px',
      fontFamily: 'sofia-pro-soft, sans-serif',
      fontWeight: '700'
    },
    button: {
      textTransform: 'none',
      fontSize: '13px',
      fontFamily: 'sofia-pro-soft, sans-serif',
      fontWeight: '400',
      paddingLeft: '50px',
      paddingRight: '50px'
    }
  }
});

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <GlobalState />
      </MuiThemeProvider>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls..
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
