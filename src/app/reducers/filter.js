import * as fromFilter from '../actions/filter';

const initialState = '';

const filter = (state = initialState, action) => {
	switch (action.type) {
		case fromFilter.SET_FILTER:
			return action.payload;
		default:
			return state;
	}
};

export default filter;
