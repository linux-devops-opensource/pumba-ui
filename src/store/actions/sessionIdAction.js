import { SET_SESSION_ID_TYPE } from '../types';

export function setSessionId() {
	const sessionId = Math.random().toString(36).substring(7);

	return (dispatch) => {
		dispatch({
			type: SET_SESSION_ID_TYPE,
			sessionId
		});
	};
}
