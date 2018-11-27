import React from 'react';
import { connect } from 'react-redux';

import { ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';

import { GetPokemons } from '../../actions/pokemons';

import Page from '../shared/Page';

class PokemonList extends React.Component {
	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(GetPokemons());
	}

	clickPokemon(id) {
		this.props.history.push('/' + id);
	}

	prev() {
		const { dispatch } = this.props;
		dispatch(GetPokemons(this.props.previous));
	}

	next() {
		const { dispatch } = this.props;
		dispatch(GetPokemons(this.props.next));
	}

	getId(pokemon) {
		let urlSplit = pokemon.url.split(/\//g);
		urlSplit = urlSplit.filter((s) => s !== '');
		return urlSplit[urlSplit.length - 1];
	}

	render() {
		const { pokemons } = this.props;

		return (
			<div>
				{pokemons.length ? (
					<ListGroup>
						{pokemons &&
							pokemons.map((pokemon) => {
								const id = this.getId(pokemon);
								return (
									<ListGroupItem key={id} onClick={() => this.clickPokemon(id)}>
										{id} - {pokemon.name}
									</ListGroupItem>
								);
							})}
					</ListGroup>
				) : (
					<ProgressBar active now={100} />
				)}
				<Page prev={this.prev.bind(this)} next={this.next.bind(this)} />;
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	pokemons: state.pokemons.pokemons,
	next: state.pokemons.next,
	previous: state.pokemons.previous
});

export default connect(mapStateToProps)(PokemonList);
