import {
	DEPENDENCY_FETCH_TYPE,
	DUPLICATION_FETCH_TYPE,
	ITEMS_HAS_ERRORED_TYPE,
	ITEM_LOADING_TYPE,
	ITEM_STOPPED_LOADING_TYPE,
	REPOSITORY_UPLOAD_FETCH_TYPE,
	SET_PROCESS_RESULTS_TYPE,
	UPLOAD_TO_STORAGE_FETCH_TYPE
} from '../types';

// some api call has failed, not only services
export function itemsHasErrored(bool) {
	return {
		type: ITEMS_HAS_ERRORED_TYPE,
		hasErrored: bool
	};
}

// some api call is loading
export function increaseItemsThatLoading() {
	return {
		type: ITEM_LOADING_TYPE
	};
}

// decrease the amount of api calles than running
export function decreaseItemsThatLoading() {
	return {
		type: ITEM_STOPPED_LOADING_TYPE
	};
}

// the uploading process has failed
export function setErrorResults(service, results) {
	return {
		type: SET_PROCESS_RESULTS_TYPE,
		items: {
			finished: false,
			failed: {
				service: service,
				results: results
			}
		}
	};
}

// the uploading process has finished
export function setSuccessResults(items) {
	return {
		type: SET_PROCESS_RESULTS_TYPE,
		items: Object.assign(items, {
			finished: true
		})
	};
}

export function itemsFetchDataSuccess(requestOption) {
	return {
		type: requestOption,
		items: {
			finished: true
		}
	};
}

// TODO
export function fetchRepositoryUpload(packagesArray, sid) {
	let serviceName = 'repository upload';
	let url = 'http://20.73.127.215:3000/api/package/'.concat(sid);
	let body = {
		packages: packagesArray
	};
	let payload = JSON.stringify(body);
	let requestOption = REPOSITORY_UPLOAD_FETCH_TYPE;
	let contentType = 'application/json';
	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, requestOption, payload, contentType));
	};
}

// validator
export function fetchDependencyCheck(sessionId) {
	let serviceName = 'dependency check';
	let url = 'http://20.76.10.244:3000/session';
	let body = {
		sid: sessionId,
		type: 'npm',
		statusCode: 0,
		pkgs: [ {} ]
	};
	let payload = JSON.stringify(body);
	let requestOption = DEPENDENCY_FETCH_TYPE;
	let contentType = 'application/json';
	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, requestOption, payload, contentType));
	};
}

export function fetchUploadToStorage(packageToUpload, sid) {
	let serviceName = 'upload packages to storage';
	const payload = new FormData();
	payload.append('file', packageToUpload);

	let url = 'http://20.73.218.20:3000/packages/'.concat(sid);
	let requestOption = UPLOAD_TO_STORAGE_FETCH_TYPE;
	let contentType = undefined;
	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, requestOption, payload, contentType));
	};
}

// checker
export function fetchDuplicationCheck(hashedPackages, sid) {
	let serviceName = 'duplication check';
	let url = 'http://51.124.62.119:3000/api/checkpackages';
	let body = {
		type: 'npm',
		packages: hashedPackages
	};
	let payload = JSON.stringify(body);
	let requestOption = DUPLICATION_FETCH_TYPE;
	let contentType = 'application/json';
	return (dispatch) => {
		dispatch(fetchDataPost(serviceName, url, requestOption, payload, contentType));
	};
}

function fetchDataPost(serviceName, url, requestOption, payload, contentType) {
	return (dispatch) => {
		dispatch(increaseItemsThatLoading());
		console.info(payload);
		const headers = {
			Accept: 'application/json, text/plain, */*',
			'Access-Control-Request-Method': '*',
			'Access-Control-Allow-Headers': '*',
			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PATCH, DELETE, PUT',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'X-Requested-With'
		};
		if (contentType != undefined) {
			headers['Content-Type'] = contentType;
		}
		const requestOpts = {
			headers: headers,
			method: 'POST',
			body: payload
		};
		fetch(url, requestOpts)
			.then((response) => {
				if (!response.ok) {
					throw response;
				}
				dispatch(decreaseItemsThatLoading());
				console.log(serviceName, response);
				return response;
			})
			.then((items) => {
				console.log(serviceName, items);
				dispatch(itemsFetchDataSuccess(requestOption));
				if (serviceName == 'repository upload') {
					dispatch(setSuccessResults(items));
				}
			})
			.catch((err) => {
				dispatch(itemsHasErrored(true));
				console.log(serviceName, 'ERROR!!!!!!!!!!!!!!!!!!!!', err);

				err.json().then((erroeMsg) => {
					dispatch(setErrorResults(serviceName, erroeMsg));
				});
			});
	};
}
