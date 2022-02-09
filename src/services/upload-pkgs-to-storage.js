import { UPLOAD_TO_STORAGE_FETCH_TYPE } from '../store/types';
import { fetchDataPost } from './generic-data-post';

const serviceName = 'upload packages to storage';
const contentType = undefined;

export function fetchUploadToStorage(packageToUpload, sid) {
	const payload = new FormData();
	payload.append('file', packageToUpload);

	let url = 'http://20.73.218.20:3000/packages/'.concat(sid);
	let requestOption = UPLOAD_TO_STORAGE_FETCH_TYPE;
	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, requestOption, payload, contentType));
	};
}
