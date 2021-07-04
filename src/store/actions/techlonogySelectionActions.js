export function set(techlonogy) {
    return {
        type: 'SET_TECHNOLOGY_SELECTION',
        techlonogy
    }
        
}

export function setTechlonogySelection(techlonogy) {
    return (dispatch) => {
        dispatch(set(techlonogy));        
    };
}