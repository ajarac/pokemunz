import React from 'react';

import { Route } from 'react-router-dom';

import PokemonList from './pokemons/PokemonList';
import PokemonItem from './pokemons/PokemonItem';

class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<Route path="/" exact component={PokemonList} />
        <Route path="/:id" component={PokemonItem} />
			</div>
		);
	}
}

export default Home;
