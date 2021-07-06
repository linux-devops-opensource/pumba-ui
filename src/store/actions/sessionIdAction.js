export function set(sessionId) {
    return {
        type: 'SET_SESSION_ID',
        sessionId
    }
        
}

export function setSessionId() {
    const sessionId = Math.random().toString(36).substring(7); 

    return (dispatch) => {
        dispatch(set(sessionId));        
    };

}