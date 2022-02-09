import { SET_HASHED_PACKAGES_TYPE } from '../types';

export function setHashedPackages(newPackageArray, hashedPackages) {
	hashedPackages.push(newPackageArray);
	return (dispatch) => {
		dispatch({
			type: SET_HASHED_PACKAGES_TYPE,
			hashedPackages
		});
	};
}
