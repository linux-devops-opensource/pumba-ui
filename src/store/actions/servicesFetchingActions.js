import {
	INC_PKG_NUMBER_UPLOADED_TO_STORAGE_TYPE,
	ITEMS_HAS_ERRORED_TYPE,
	ITEM_LOADING_TYPE,
	ITEM_STOPPED_LOADING_TYPE,
	SET_PROCESS_RESULTS_TYPE
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
