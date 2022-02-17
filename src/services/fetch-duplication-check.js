import { DUPLICATION_FETCH_TYPE } from '../store/types';
import { fetchDataPost } from './generic-post-req';
import { CHECKER_URL } from './variables';

// checker
const serviceName = 'duplication check';
const contentType = 'application/json';

// const checkerUrl = 'http://20.103.101.183:3000';
const checkerUrl = CHECKER_URL;

// TODO change this api
export function fetchDuplicationCheck(hashedPackages, tech, sid) {
	let url = `${checkerUrl}/session`;
	console.log('tecg', tech);
	console.log('sid##########', sid);
	let body = {
		sid: sid,
		type: tech,
		statusCode: 200,
		pkgs: hashedPackages
	};
	console.log(body);
	let payload = JSON.stringify(body);
	// let payload = body;
	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, DUPLICATION_FETCH_TYPE, payload, contentType));
	};
}
