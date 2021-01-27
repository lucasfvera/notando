import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LoadingContextProvider } from './components/index'


ReactDOM.render(
	<React.StrictMode>
		<LoadingContextProvider>
			<App />
		</LoadingContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
