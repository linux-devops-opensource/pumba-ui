import { SET_REPOSITORY_SELECTION_TYPE } from '../types';

export function repositorySelected(state = '', action) {
	switch (action.type) {
		case SET_REPOSITORY_SELECTION_TYPE:
			return action.repository;

		default:
			return state;
	}
}
