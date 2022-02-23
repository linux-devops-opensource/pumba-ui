import { DUPLICATION_FETCH_TYPE } from '../store/types';
import { fetchDataPost } from './generic-post-req';
import { CHECKER_URL } from './variables';

const serviceName = 'duplication check';
const contentType = 'application/json';
const checkerUrl = CHECKER_URL;

const callback = (items) => {
	console.log(items);
	console.log('THIS IS THE CALLBACK FUNC');
	// TODO change this so it would change the file status
};

export function fetchDuplicationCheck(hashedPackages, tech, sid) {
	const brokeDownPkgs = [];
	for (const p of hashedPackages) {
		let name = p.packageName.substring(0, p.packageName.lastIndexOf('.'));
		let lastIndexOfHyper = name.lastIndexOf('-');
		brokeDownPkgs.push({
			name: name.substring(0, lastIndexOfHyper),
			version: name.substring(lastIndexOfHyper + 1),
			sha1: p.sha1
		});
	}

	let url = `${checkerUrl}/session`;
	let body = {
		sid: sid,
		type: tech,
		statusCode: 200,
		pkgs: brokeDownPkgs
	};

	let payload = JSON.stringify(body);

	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, DUPLICATION_FETCH_TYPE, payload, contentType, callback));
	};
}
