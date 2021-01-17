import React from 'react';

const Home = React.lazy(() => import('./views/Home'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  
];

export default routes;
