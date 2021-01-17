import React, { Component } from 'react';
import { HashRouter, Route, Switch, Router  } from 'react-router';
import 'react-fontawesome'
// import '@fortawesome/fontawesome-free/css/all.min.css'

// Containers
const TheLayout = React.lazy(() => import('./containers/Layout/Layout'));

const App = (props) => {

  React.useEffect(() => {
      
  }, []);
  
  return (
        <Router> 
            <React.Suspense>
              {/* <Switch>               */}
                  <Route path="/" name="Home" render={props => <TheLayout {...props}/>} /> 
        
              {/* </Switch> */}
            </React.Suspense>
         </Router>
        
    );
  }

export default (App);
