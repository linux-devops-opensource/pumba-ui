import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen"; 
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiTheme from './theme';
import { render } from 'react-dom'


// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
  
  ReactDOM.render(
    <React.StrictMode>
      <MuiThemeProvider theme={MuiTheme}>
        <App />       
        <CssBaseline />
      </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
