import * as fromPokemons from '../actions/pokemons';

const initialState = {
	count: null,
	next: '',
	previous: '',
	pokemons: [],
	pokemon: null
};

const pokemons = (state = initialState, action) => {
	switch (action.type) {
		case fromPokemons.GET_POKEMONS_SUCCESS:
			const { results, count, next, previous } = action.payload;
			return {
				...state,
				pokemons: results,
				count,
				next,
				previous
			};

		case fromPokemons.GET_POKEMON_BY_ID_SUCCESS:
			return {
				...state,
				pokemon: action.pokemon
			};

		default:
			return state;
	}
};

export default pokemons;
