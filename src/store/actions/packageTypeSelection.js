export function set(packageType) {
    return {
        type: 'SET_PACKAGE_TYPE',
        packageType
    }
        
}

export function setPackageType(packageType) {
    return (dispatch) => {
        dispatch(set(packageType));        
    };
}