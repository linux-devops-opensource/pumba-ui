import { SET_RESULTS_TYPE } from '../types';

export function setResults(result) {
	return (dispatch) => {
		dispatch({
			type: SET_RESULTS_TYPE,
			result
		});
	};
}
