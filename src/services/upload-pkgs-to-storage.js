import { UPLOAD_TO_STORAGE_FETCH_TYPE } from '../store/types';
import { fetchDataPost } from './generic-post-req';
import { STORAGE_MANAGER_URL } from './variables';

const serviceName = 'upload packages to storage';
const contentType = undefined;

// const storageManagerUrl = 'http://20.93.212.122:3000';
const storageManagerUrl = STORAGE_MANAGER_URL;

export function fetchUploadToStorage(packageToUpload, sid) {
	const payload = new FormData();
	payload.append('file', packageToUpload);

	let url = `${storageManagerUrl}/packages/${sid}`;
	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, UPLOAD_TO_STORAGE_FETCH_TYPE, payload, contentType));
	};
}
