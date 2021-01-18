import React from 'react';

const Home = React.lazy(() => import('./views/home'));


const routes = [
  { path: '/', name: 'Home', component: Home },


];

export default routes;
