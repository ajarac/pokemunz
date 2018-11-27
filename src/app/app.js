import React from 'react';

import MainNavbar from './ui/navbar';
import Home from './components/Home';

import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<Router>
        <div>
				  <MainNavbar />
				  <Home />
        </div>
      </Router>
		);
	}
}

export default App;
