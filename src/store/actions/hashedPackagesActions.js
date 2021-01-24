export function set(hostsList) {
    return {
        type: 'SET_HASHED_PACKAGES',
        hostsList
    }
        
}

export function setHashedPackages(newPackageArray, oldPackageArray) {
    let hashedPackages = oldPackageArray.push(newPackageArray)
    return (dispatch) => {
        dispatch(set({hashedPackages: hashedPackages}));        
    };

}