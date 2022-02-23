import { SET_PACKAGES_DETAILS_TYPE } from '../types';

export function packagesInfo(state = {}, action) {
	switch (action.type) {
		case SET_PACKAGES_DETAILS_TYPE:
			return action.packagesInfo;

		default:
			return state;
	}
}
