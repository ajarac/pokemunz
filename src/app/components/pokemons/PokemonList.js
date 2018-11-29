import React from 'react';
import { connect } from 'react-redux';

import { ListGroup, ListGroupItem, ProgressBar, FormControl } from 'react-bootstrap';

import { GetPokemons } from '../../actions/pokemons';
import { SetFilter } from '../../actions/filter';

import Page from '../shared/Page';

const style = {
	input: {
		margin: '5px 0'
	}
};

class PokemonList extends React.Component {
	componentWillMount() {
		this.props.getPokemons();
	}

	clickPokemon(id) {
		this.props.history.push('/' + id);
	}

	prev() {
		this.props.getPokemons(this.props.previous);
	}

	next() {
		this.props.getPokemons(this.props.next);
	}

	getId(pokemon) {
		let urlSplit = pokemon.url.split(/\//g);
		urlSplit = urlSplit.filter((s) => s !== '');
		return urlSplit[urlSplit.length - 1];
	}

	renderList(pokemons) {
		return (
			<ListGroup>
				{pokemons.length &&
					pokemons.map((pokemon) => {
						const id = this.getId(pokemon);
						return (
							<ListGroupItem key={id} onClick={() => this.clickPokemon(id)}>
								#{id} - {pokemon.name}
							</ListGroupItem>
						);
					})}
			</ListGroup>
		);
	}

	render() {
		const { pokemons, loading } = this.props;

		return (
			<div>
				<FormControl
					style={style.input}
					type="text"
					value={this.props.filter}
					placeholder="Search..."
					onChange={this.props.setFilter}
				/>
				{loading && <ProgressBar active now={100} />}
				{this.renderList(pokemons)}
				<Page prev={this.prev.bind(this)} next={this.next.bind(this)} />;
			</div>
		);
	}
}

const pokemonsFilter = (pokemons, filter) => pokemons.filter((p) => p.name.includes(filter));

const mapStateToProps = (state) => ({
	pokemons: pokemonsFilter(state.pokemons.pokemons, state.filter),
	next: state.pokemons.next,
	previous: state.pokemons.previous,
	loading: state.pokemons.loading,
	filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
	getPokemons: (url) => {
		dispatch(SetFilter(''));
		dispatch(GetPokemons(url));
	},
	setFilter: (e) => dispatch(SetFilter(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
