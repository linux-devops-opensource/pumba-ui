export function set(hashedPackages) {
    return {
        type: 'SET_HASHED_PACKAGES',
        hashedPackages
    }
        
}

export function setHashedPackages(newPackageArray, hashedPackages) {
    hashedPackages.push(newPackageArray)
    return (dispatch) => {
        dispatch(set(hashedPackages));        
    };

}