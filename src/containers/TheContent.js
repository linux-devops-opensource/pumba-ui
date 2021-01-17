import React, { Suspense, useEffect } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
// routes config
import routes from '../routes'
import Grid from '@material-ui/core/Grid'


const TheContent = () => {

  return (
    <main className="c-main">
      <Grid container direction="row" justify="center" style={{ minHeight: '101vh', maxWidth: '100%' }}>                     
        
          <Grid id="content-grid" xs={12} container direction="row" align="center">     
          <Suspense>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              )
            })}
            {/* <Redirect from="/" to="/dashboard" /> */}
          </Switch>
        </Suspense>
        </Grid>         
      </Grid>
    </main>
  )
}

export default React.memo(TheContent)
