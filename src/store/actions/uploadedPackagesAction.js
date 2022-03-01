import { SET_UPLOADED_PACKAGES_TYPE } from '../types';

export function setUploadedPackages(newPackageArray, oldPackageArray) {
	let uploadedPackages = oldPackageArray;
	uploadedPackages.push(newPackageArray);
	return (dispatch) => {
		dispatch({
			type: SET_UPLOADED_PACKAGES_TYPE,
			uploadedPackages
		});
	};
}
