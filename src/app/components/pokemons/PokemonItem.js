import React from 'react';
import { connect } from 'react-redux';

import { GetPokemonById } from '../../actions/pokemons';

import { PageHeader, ProgressBar, Grid, Row, Col, Image } from 'react-bootstrap';

const POKEMON_PROPERTIES = [ 'id', 'weight', 'height', 'order' ];

class PokemonItem extends React.Component {
	constructor() {
		super();
	}

	componentWillMount() {
		const id = this.props.match.params['id'];
		const { dispatch } = this.props;
		dispatch(GetPokemonById(id));
	}

	render() {
		const { pokemon } = this.props;
		if (pokemon) {
			return (
				<div>
					<PageHeader>
            {pokemon.name}
            <br />
						<small>{pokemon.types.map(({ type }) => type.name)}</small>
					</PageHeader>
					<Grid>
						<Row>
							<Col xs={4}>
								<Image src={pokemon.sprites.front_default} />
							</Col>
							<Col xs={8}>
								<Grid>
									{POKEMON_PROPERTIES.map((p) => (
										<Row key={p}>
											<Col xs={6}>{p}:</Col>
											<Col xs={6}>{pokemon[p]}</Col>
										</Row>
									))}
								</Grid>
							</Col>
						</Row>
					</Grid>
				</div>
			);
		} else {
			return <ProgressBar active now={100} />;
		}
	}
}

const mapStateToProps = (state) => ({
	pokemon: state.pokemons.pokemon
});

export default connect(mapStateToProps)(PokemonItem);
