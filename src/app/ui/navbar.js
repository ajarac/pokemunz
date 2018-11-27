import React from 'react';

import { Navbar } from 'react-bootstrap';

import { Link } from "react-router-dom";

class MainNavbar extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Navbar collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">Pokémunz!</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
			</Navbar>
		);
	}
}

export default MainNavbar;
