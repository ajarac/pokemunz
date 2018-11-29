export const GET_POKEMONS_PENDING = '[UI] Get Pokemons Pending';
export const GET_POKEMONS_SUCCESS = '[API] Get Pokemons success';

export const GET_POKEMON_BY_ID = '[UI] Get Pokemon By Id';
export const GET_POKEMON_BY_ID_SUCCESS = '[API] Get Pokemon By Id Success';

export const GetPokemonsPending = () => ({ type: GET_POKEMONS_PENDING });

export function GetPokemons(url = null) {
	return (dispatch) => {
		dispatch(GetPokemonsPending());
		return fetch(url ? url : 'http://pokeapi.salestock.net/api/v2/pokemon/')
			.then((res) => res.json())
			.then((pokemons) => {
				dispatch(GetPokemonsSuccess(pokemons));
				return pokemons;
			});
	};
}

export const GetPokemonsSuccess = (payload) => ({
	type: GET_POKEMONS_SUCCESS,
	payload
});

export function GetPokemonById(id) {
	return (dispatch) =>
		fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${id}`).then((res) => res.json()).then((pokemon) => {
			dispatch(GetPokemonByIdSuccess(pokemon));
			return pokemon;
		});
}

export const GetPokemonByIdSuccess = (pokemon) => ({
	type: GET_POKEMON_BY_ID_SUCCESS,
	pokemon
});
