import { extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

export const theme = extendTheme({
	components: {
		Steps
	}
});

// import { createMuiTheme } from '@material-ui/core';
// // import typography from './typography';
// import { red, green, yellow, grey, orange } from '@material-ui/core/colors';
// import { extendTheme } from "@chakra-ui/react"

// // ADI_TO_CHANGE_TAG

// /* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
// import vars from '!!sass-vars-to-js-loader!../assests/core/_variables-mui.scss';

// const MuiTheme = createMuiTheme({
// 	error: {
// 		main: orange[500]
// 	},
// 	success: {
// 		main: green[500]
// 	},
// 	warning: {
// 		main: yellow[500]
// 	},
// 	restricted: {
// 		main: grey[400]
// 	},
// 	palette: {
// 		primary: {
// 			main: vars.primary
// 		},
// 		grey: {
// 			300: vars.inheritDefault1,
// 			A100: vars.inheritDefault2
// 		},
// 		secondary: {
// 			main: vars.secondary
// 		},

// 		warning: {
// 			color: vars.yellow,
// 			backgroundColor: vars.yellow,
// 			main: vars.yellow
// 		},
// 		helpers: {
// 			primary: vars.blue,
// 			main: 'rgba(25, 46, 91, .035)'
// 		},
// 		contrastThreshold: 3,
// 		tonalOffset: 0.1
// 	},
// 	shape: {
// 		borderRadius: '0.5rem'
// 	},
// 	overrides: {
// 		MuiButton: {
// 			text: {
// 				paddingLeft: '14px',
// 				paddingRight: '14px'
// 			},
// 			containedSizeSmall: {
// 				paddingLeft: '14px',
// 				paddingRight: '14px'
// 			},
// 			root: {
// 				textTransform: 'none',
// 				fontWeight: 'normal'
// 			}
// 		},
// 		MuiTableCell: {
// 			root: {
// 				padding: '1vh'
// 			}
// 		},
// 		MuiTooltip: {
// 			tooltip: {
// 				backgroundColor: vars.second,
// 				padding: '8px 16px',
// 				fontSize: '13px'
// 			},
// 			arrow: {
// 				color: vars.second
// 			}
// 		}
// 	},
// 	typography
// });

// export default MuiTheme;
