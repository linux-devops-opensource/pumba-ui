import { UPLOAD_TO_STORAGE_FETCH_TYPE } from '../store/types';
import { fetchDataPost } from './generic-post-req';
import { STORAGE_MANAGER_URL } from './variables';
import { store } from '../store';

import { setPackageDetails } from '../store/actions/packagesDetailsActions';
import { setErrorResults } from '../store/actions/servicesFetchingActions';
import { itemsHasErrored } from '../store/actions/servicesFetchingActions';

const serviceName = 'upload packages to storage';
const contentType = undefined;

const storageManagerUrl = STORAGE_MANAGER_URL;

const callback = async (items, dispatch) => {
	// console.log('THIS IS THE CALLBACK FUNC');
	const state = store.getState();
	console.log(items);

	const info = state.packagesInfo[items.name];
	info.info = 'finished s3 uploade';
	info.failed = false;
	info.uploadedIntoStorage = true;

	console.log('s3 check ----', info.info);
	dispatch(setPackageDetails(info, state.packagesInfo));
};

export function fetchUploadToStorage(packageToUpload, sid) {
	const payload = new FormData();
	payload.append('file', packageToUpload);

	let url = `${storageManagerUrl}/sessions/${sid}/file/${packageToUpload.path}`;
	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, UPLOAD_TO_STORAGE_FETCH_TYPE, payload, contentType, callback));
	};
}
