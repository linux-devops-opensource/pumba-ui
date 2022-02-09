import { DUPLICATION_FETCH_TYPE } from '../store/types';
import { fetchDataPost } from './generic-data-post';

// checker
const serviceName = 'duplication check';
const contentType = 'application/json';

export function fetchDuplicationCheck(hashedPackages, sid) {
	let url = 'http://51.124.62.119:3000/api/checkpackages';
	let body = {
		type: 'npm',
		packages: hashedPackages
	};
	let payload = JSON.stringify(body);
	let requestOption = DUPLICATION_FETCH_TYPE;
	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, requestOption, payload, contentType));
	};
}
