import { DEPENDENCY_FETCH_TYPE } from '../store/types';
import { fetchDataPost } from './generic-post-req';
import { VALIDATOR_URL } from './variables';

// validator
const serviceName = 'dependency check';
const contentType = 'application/json';

// const validatorUrl = 'http://20.103.212.101:3000';
const validatorUrl = VALIDATOR_URL;

// TODO create callback here

export function fetchDependencyCheck(packages, tech, sessionId) {
	const brokeDownPkgs = [];
	for (const p of packages) {
		let name = p.packageName.substring(0, p.packageName.lastIndexOf('.'));
		let lastIndexOfHyper = name.lastIndexOf('-');
		brokeDownPkgs.push({
			name: name.substring(0, lastIndexOfHyper),
			version: name.substring(lastIndexOfHyper + 1)
		});
	}
	let url = `${validatorUrl}/session`;
	let body = {
		sid: sessionId,
		type: tech,
		pkgs: brokeDownPkgs
	};
	// console.log(body);
	let payload = JSON.stringify(body);
	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, DEPENDENCY_FETCH_TYPE, payload, contentType));
	};
}
