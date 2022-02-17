import { CREATE_STORAGE_BUCKET_FETCH_TYPE } from '../store/types';
import { fetchDataPost } from './generic-post-req';
import { STORAGE_MANAGER_URL } from './variables';

const serviceName = 'create upload bucket';
const contentType = 'application/json';

// const storageManagerUrl = 'http://20.93.212.122:3000';
const storageManagerUrl = STORAGE_MANAGER_URL;

export function createStorageBucket(hashedPackages, tech, sid) {
	let pkgs = hashedPackages.map((p) => {
		console.log(p);
		return { name: p.packageName };
	});
	console.log(pkgs);
	let url = `${storageManagerUrl}/sessions`;
	let body = {
		sid: sid,
		type: tech,
		pkgs: hashedPackages
	};

	console.log(body);
	console.log('TRYING TO CREATE!!');
	let payload = JSON.stringify(body);

	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, CREATE_STORAGE_BUCKET_FETCH_TYPE, payload, contentType));
	};
}
