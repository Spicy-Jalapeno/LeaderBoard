import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const font = 'Rubik, sans-serif'

const theme = createMuiTheme({
	typography: {
		fontFamily: font
	},
	palette: {
		type: "dark"
	}
})

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Router>
			<App />
		</Router>
	 </ThemeProvider>,
	document.getElementById('root')
);
