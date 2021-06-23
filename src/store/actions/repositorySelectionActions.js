export function set(repository) {
    return {
        type: 'SET_REPOSITORY_SELECTION',
        repository
    }
        
}

export function setRepositorySelection(repository) {
    return (dispatch) => {
        dispatch(set(repository));        
    };
}