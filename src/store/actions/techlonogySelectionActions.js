import { SET_TECHNOLOGY_SELECTION_TYPE } from '../types';

export function setTechlonogySelection(techlonogy) {
	return (dispatch) => {
		dispatch({
			type: SET_TECHNOLOGY_SELECTION_TYPE,
			techlonogy
		});
	};
}
