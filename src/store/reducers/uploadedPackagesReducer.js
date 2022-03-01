import { SET_UPLOADED_PACKAGES_TYPE } from '../types';

export function uploadedPackages(state = [], action) {
	switch (action.type) {
		case SET_UPLOADED_PACKAGES_TYPE:
			return action.uploadedPackages;

		default:
			return state;
	}
}
