export function set(uploadedPackages) {
    return {
        type: 'SET_UPLOADED_PACKAGES',
        uploadedPackages
    }
        
}

export function setUploadedPackages(newPackageArray, oldPackageArray) {
    let uploadedPackages = oldPackageArray
    uploadedPackages.push(newPackageArray)
    return (dispatch) => {
        dispatch(set(uploadedPackages));        
    };

}