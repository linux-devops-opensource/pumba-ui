import { SET_PACKAGES_DETAILS_TYPE } from '../types';

export function setPackageDetails(newPkg, packagesInfo) {
	// console.log(newPkg);
	// console.log(packagesInfo);

	packagesInfo[newPkg.packageName] = newPkg;

	return (dispatch) => {
		dispatch({
			type: SET_PACKAGES_DETAILS_TYPE,
			packagesInfo
		});
	};
}
