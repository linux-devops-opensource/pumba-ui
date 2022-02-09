import { SET_TECHNOLOGY_SELECTION_TYPE } from '../types';
export function technologySelected(state = '', action) {
	switch (action.type) {
		case SET_TECHNOLOGY_SELECTION_TYPE:
			return action.techlonogy;

		default:
			return state;
	}
}
