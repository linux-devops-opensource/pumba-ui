export function set(repository) {
    return {
        type: 'SET_REPOSITORY',
        repository
    }
        
}

export function setRepository(repository) {
    return (dispatch) => {
        dispatch(set(repository));        
    };
}