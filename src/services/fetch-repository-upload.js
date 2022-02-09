import { REPOSITORY_UPLOAD_FETCH_TYPE } from '../store/types';
import { fetchDataPost } from './generic-data-post';

const serviceName = 'repository upload';
const contentType = 'application/json';

export function fetchRepositoryUpload(packagesArray, sid) {
	let url = 'http://20.73.127.215:3000/api/package/'.concat(sid);
	let body = {
		packages: packagesArray
	};
	let payload = JSON.stringify(body);
	let requestOption = REPOSITORY_UPLOAD_FETCH_TYPE;
	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, requestOption, payload, contentType));
	};
}
