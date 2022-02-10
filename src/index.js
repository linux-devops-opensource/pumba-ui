import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import blueGrey from "@material-ui/core/colors/blueGrey";
// import lightGreen from "@material-ui/core/colors/lightGreen";
// import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from 'react-redux';
import { theme } from './theme';
// import MuiTheme from './theme';
import { ChakraProvider } from '@chakra-ui/react';

import { render } from 'react-dom';
import configureStore from './store';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });
const initialState = window.initialReduxState;

const store = configureStore(history, initialState);

ReactDOM.render(
	<React.StrictMode>
		{/* <MuiThemeProvider theme={MuiTheme}> */}
		{/* // <div> */}
		<ChakraProvider theme={theme}>
			<Provider store={store}>
				<App />
			</Provider>
			{/* <CssBaseline />
      </MuiThemeProvider> */}
		</ChakraProvider>
		{/* </div>, */}
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
