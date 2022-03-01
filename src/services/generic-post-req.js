import {
	increaseItemsThatLoading,
	decreaseItemsThatLoading,
	itemsFetchDataSuccess,
	setSuccessResults,
	setErrorResults,
	itemsHasErrored
} from '../store/actions/servicesFetchingActions';

export function fetchDataPost(serviceName, url, requestOption, payload, contentType, callback = undefined) {
	return (dispatch) => {
		dispatch(increaseItemsThatLoading());

		const headers = {
			Accept: 'application/json, text/plain, */*',
			'Access-Control-Request-Method': '*',
			'Access-Control-Allow-Headers': '*',
			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PATCH, DELETE, PUT',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'X-Requested-With'
		};
		if (contentType !== undefined) {
			headers['Content-Type'] = contentType;
		}
		const requestOpts = {
			headers: headers,
			method: 'POST',
			body: payload,
			timeout: 600000
		};
		fetch(url, requestOpts)
			.then((response) => {
				if (!response.ok) {
					throw response;
				}
				dispatch(decreaseItemsThatLoading());
				console.log(serviceName, response.body);
				return response.json();
			})
			.then((items) => {
				console.log(serviceName, items);
				dispatch(itemsFetchDataSuccess(requestOption));
				if (callback) {
					callback(items, dispatch);
				}
			})
			.catch((err) => {
				dispatch(itemsHasErrored(true));
				console.log(serviceName, 'ERROR!!!!!!!!!!!!!!!!!!!!', err);

				err.json().then((errMsg) => {
					dispatch(setErrorResults(serviceName, errMsg));
				});
			});
	};
}
