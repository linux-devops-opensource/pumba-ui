import {
	CREATE_STORAGE_BUCKET_FETCH_TYPE,
	DEPENDENCY_FETCH_TYPE,
	DUPLICATION_FETCH_TYPE,
	ITEMS_HAS_ERRORED_TYPE,
	ITEM_LOADING_TYPE,
	ITEM_STOPPED_LOADING_TYPE,
	REPOSITORY_UPLOAD_FETCH_TYPE,
	SET_PROCESS_RESULTS_TYPE,
	UPLOAD_TO_STORAGE_FETCH_TYPE
} from '../types';

export function itemsHasErrored(state = false, action) {
	switch (action.type) {
		case ITEMS_HAS_ERRORED_TYPE:
			return action.hasErrored;

		default:
			return state;
	}
}

export function loadingItemsCount(state = 0, action) {
	switch (action.type) {
		case ITEM_LOADING_TYPE:
			return state + 1;
		case ITEM_STOPPED_LOADING_TYPE:
			return state - 1;
		default:
			return state;
	}
}

export function processResults(state = { failed: false }, action) {
	switch (action.type) {
		case SET_PROCESS_RESULTS_TYPE:
			return action.items;

		default:
			return state;
	}
}

const defaultState = {
	finished: false
};

export function storageBucketCreation(state = defaultState, action) {
	switch (action.type) {
		case CREATE_STORAGE_BUCKET_FETCH_TYPE:
			return action.items;

		default:
			return state;
	}
}

export function duplicationCheck(state = defaultState, action) {
	switch (action.type) {
		case DUPLICATION_FETCH_TYPE:
			return action.items;

		default:
			return state;
	}
}

export function repositoryUpload(state = defaultState, action) {
	switch (action.type) {
		case REPOSITORY_UPLOAD_FETCH_TYPE:
			return action.items;

		default:
			return state;
	}
}

export function uploadToStorageManager(state = defaultState, action) {
	switch (action.type) {
		case UPLOAD_TO_STORAGE_FETCH_TYPE:
			return action.items;

		default:
			return state;
	}
}

export function dependencyCheck(state = defaultState, action) {
	switch (action.type) {
		case DEPENDENCY_FETCH_TYPE:
			return action.items;

		default:
			return state;
	}
}
