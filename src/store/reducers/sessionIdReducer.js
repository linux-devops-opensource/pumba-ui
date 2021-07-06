
  export function sessionId(state = '', action) {
    switch (action.type) {
        case 'SET_SESSION_ID':
            return action.sessionId;
  
        default:
            return state;
    }
  }