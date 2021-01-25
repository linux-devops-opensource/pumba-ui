import React, { Component } from 'react';
import { HashRouter, Route, Switch, Router  } from 'react-router';
import 'react-fontawesome'
import { createBrowserHistory } from "history";
import { TextareaAutosize } from '@material-ui/core';
import './App.css'
import pumbaloading from './images/pumba-loading.gif'

// import '@fortawesome/fontawesome-free/css/all.min.css'

// Containers
const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

const history = createBrowserHistory({ basename: baseUrl });
const TheLayout = React.lazy(() => import('./containers/Layout/Layout'));
const loading = (
  <div className="Loading">
    <img src={pumbaloading} />
  </div>
)
const App = (props) => {

 
  
  return (
        <Router history={history}> 
            <React.Suspense fallback={loading}>
              {/* <Switch>               */}
                  <Route path="/" name="Home" render={props => <TheLayout {...props}/>} /> 
        
              {/* </Switch> */}
            </React.Suspense>
         </Router>
        
    );
  }

export default (App);
