import { SET_SESSION_ID_TYPE } from '../types';

export function sessionId(state = '', action) {
	switch (action.type) {
		case SET_SESSION_ID_TYPE:
			return action.sessionId;

		default:
			return state;
	}
}
