import { REPOSITORY_UPLOAD_FETCH_TYPE } from '../store/types';
import { fetchDataPost } from './generic-post-req';

const serviceName = 'repository upload';
const contentType = 'application/json';

const uploaderUrl = 'http://20.126.168.149:3000';

// TODO change this api
export function fetchRepositoryUpload(packagesArray, sid) {
	let url = `${uploaderUrl}/api/package/${sid}`;
	let body = {
		packages: packagesArray
	};
	let payload = JSON.stringify(body);
	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, REPOSITORY_UPLOAD_FETCH_TYPE, payload, contentType));
	};
}
