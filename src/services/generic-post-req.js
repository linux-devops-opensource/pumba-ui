import {
	increaseItemsThatLoading,
	decreaseItemsThatLoading,
	itemsFetchDataSuccess,
	setSuccessResults,
	setErrorResults,
	itemsHasErrored
} from '../store/actions/servicesFetchingActions';

export function fetchDataPost(serviceName, url, requestOption, payload, contentType) {
	return (dispatch) => {
		dispatch(increaseItemsThatLoading());
		console.log('~~~~~~~');
		console.info(payload);
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
				// TODO find a way to make this better and less specific
				if (serviceName === 'repository upload') {
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
