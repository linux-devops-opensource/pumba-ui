import { REPOSITORY_UPLOAD_FETCH_TYPE } from '../store/types';
import { fetchDataPost } from './generic-post-req';
import { UPLOADER_URL } from './variables';
import { setSuccessResults } from '../store/actions/servicesFetchingActions';
import { store } from '../store';
import { setPackageDetails } from '../store/actions/packagesDetailsActions';
import { setErrorResults } from '../store/actions/servicesFetchingActions';
import { itemsHasErrored } from '../store/actions/servicesFetchingActions';

const serviceName = 'repository upload';
const contentType = 'application/json';

const uploaderUrl = UPLOADER_URL;

const callback = async (items, dispatch) => {
	console.log('THIS IS THE REPO UPLOAD CALLBACK');
	console.log(items);
	const state = store.getState();

	for (const p of items.pkgs) {
		const info = state.packagesInfo[p.name];
		if (p.statusCode === 204) {
			info.info = 'upload successful 🤩';
			info.failed = false;
		} else {
			info.failed = true;
			info.info = p.info || 'failed during pkg upload';
		}
		dispatch(setPackageDetails(info, state.packagesInfo));
	}

	dispatch(setSuccessResults(items));
};

export function fetchRepositoryUpload(packagesArray, sid, tech) {
	const notFailedPkgs = packagesArray.filter((p) => !p.failed);
	console.log('attempting repo upload', notFailedPkgs.length);
	const pkgs = notFailedPkgs.map((p) => {
		return {
			name: p.packageName
		};
	});

	let url = `${uploaderUrl}/sessions`;
	let body = {
		sid: sid,
		type: tech,
		pkgs: pkgs
	};
	console.log('REPO UPLOAD~~', body);

	let payload = JSON.stringify(body);
	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, REPOSITORY_UPLOAD_FETCH_TYPE, payload, contentType, callback));
	};
}
