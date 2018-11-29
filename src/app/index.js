import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './app';

if (navigator.serviceWorker) {
	navigator.serviceWorker.register('/sw.js');
}

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);

// render(<App />, window.document.getElementById('app'));
