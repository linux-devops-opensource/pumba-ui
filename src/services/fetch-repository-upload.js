import { REPOSITORY_UPLOAD_FETCH_TYPE } from '../store/types';
import { fetchDataPost } from './generic-post-req';
import { UPLOADER_URL } from './variables';

const serviceName = 'repository upload';
const contentType = 'application/json';

const uploaderUrl = UPLOADER_URL;

export function fetchRepositoryUpload(packagesArray, sid, tech) {
	const pkgs = packagesArray.map((p) => {
		return { name: p };
	});

	// let url = `${uploaderUrl}/api/package/${sid}`;
	let url = `${uploaderUrl}/sessions`;
	let body = {
		sid: sid,
		type: tech,
		pkgs: pkgs
	};
	console.log('REPO UPLOAD~~', body);
	let payload = JSON.stringify(body);
	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, REPOSITORY_UPLOAD_FETCH_TYPE, payload, contentType));
	};
}
