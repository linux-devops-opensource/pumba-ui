import { DEPENDENCY_FETCH_TYPE } from '../store/types';
import { fetchDataPost } from './generic-data-post';

// validator
const serviceName = 'dependency check';
const contentType = 'application/json';

export function fetchDependencyCheck(sessionId) {
	let url = 'http://20.76.10.244:3000/session';
	let body = {
		sid: sessionId,
		type: 'npm',
		statusCode: 0,
		pkgs: [ {} ]
	};
	let payload = JSON.stringify(body);
	let requestOption = DEPENDENCY_FETCH_TYPE;
	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, requestOption, payload, contentType));
	};
}
