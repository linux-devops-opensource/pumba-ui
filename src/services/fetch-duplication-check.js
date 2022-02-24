import { DUPLICATION_FETCH_TYPE } from '../store/types';
import { fetchDataPost } from './generic-post-req';
import { CHECKER_URL } from './variables';
import { store } from '../store';
import { setPackageDetails } from '../store/actions/packagesDetailsActions';
import { setErrorResults } from '../store/actions/servicesFetchingActions';
import { itemsHasErrored } from '../store/actions/servicesFetchingActions';

const serviceName = 'duplication check';
const contentType = 'application/json';
const checkerUrl = CHECKER_URL;

const callback = async (items, dispatch) => {
	// console.log('THIS IS THE CALLBACK FUNC');
	const state = store.getState();

	for (const p of items.pkgs) {
		const info = state.packagesInfo[`${p.name}-${p.version}.tgz`];
		if (p.existInTarget == true) {
			info.existInTarget = p.existInTarget;
			info.info = p.info;
			info.failed = true;
		} else {
			info.existInTarget = false;
			info.info = 'finished dupe check';
		}
		console.log('dupe check ----', info.info);
		dispatch(setPackageDetails(info, state.packagesInfo));
	}

	const duplicatePkgs = Object.values(state.packagesInfo).filter((p) => {
		console.log(p);
		return p.existInTarget;
	});

	if (duplicatePkgs.length === Object.values(state.packagesInfo).length) {
		dispatch(itemsHasErrored(true));
		dispatch(setErrorResults(serviceName, { error: { message: 'failed in dup check' } }));
	}
};

export function fetchDuplicationCheck(hashedPackages, tech, sid) {
	const pkgs = Object.values(hashedPackages).map((p) => {
		return { name: p.name, version: p.version, sha1: p.sha1 };
	});
	let url = `${checkerUrl}/session`;
	let body = {
		sid: sid,
		type: tech,
		statusCode: 200,
		pkgs: pkgs
	};

	let payload = JSON.stringify(body);

	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, DUPLICATION_FETCH_TYPE, payload, contentType, callback));
	};
}
