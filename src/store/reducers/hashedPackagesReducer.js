import { SET_HASHED_PACKAGES_TYPE } from '../types';

export function hashedPackages(state = [], action) {
	switch (action.type) {
		case SET_HASHED_PACKAGES_TYPE:
			return action.hashedPackages;

		default:
			return state;
	}
}
