import { SET_REPOSITORY_SELECTION_TYPE } from '../types';

export function setRepositorySelection(repository) {
	return (dispatch) => {
		dispatch({
			type: SET_REPOSITORY_SELECTION_TYPE,
			repository
		});
	};
}
