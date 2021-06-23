export function set(result) {
    return {
        type: 'SET_RESULTS',
        result
    }
        
}

export function setTechlonogySelection(techlonogy) {
    return (dispatch) => {
        dispatch(set(techlonogy));        
    };
}