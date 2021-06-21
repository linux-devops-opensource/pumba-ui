export function set(hashedPackages) {
    return {
        type: 'SET_HASHED_PACKAGES',
        hashedPackages
    }
        
}

export function setHashedPackages(newPackageArray, oldPackageArray) {
    let hashedPackages = oldPackageArray
    hashedPackages.push(newPackageArray)
    return (dispatch) => {
        dispatch(set(hashedPackages));        
    };

}