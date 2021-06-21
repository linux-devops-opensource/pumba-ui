export function set(packagesArray) {
    return {
        type: 'SET_UPLOADED_PACKAGES',
        hostsList
    }
        
}

export function setUploadedPackages(packagesArray) {
    return (dispatch) => {
        dispatch(set(packagesArray));        
    };

}